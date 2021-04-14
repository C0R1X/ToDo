import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Task } from '../models/taskItem';
import { TASKS } from '../mock-tasks'
import { map } from 'rxjs/operators';

 
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks$:BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(TASKS);
  done:boolean = false;     //
  
  constructor() { 
  }

  getTasks(){
    return this.tasks$;
  }
 
  getTask(id:number | string){
    return this.getTasks().pipe(
      map(tasks=>tasks.find(task=>task.id===+id))
    );
  }

  addTask(id:number,name:string,desc:string,time:string){
    TASKS.push(new Task(id,name,desc,time));
    this.tasks$.next(TASKS);
  }
}
