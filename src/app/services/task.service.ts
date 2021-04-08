import { Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';

import { ITaskItem,Task } from '../models/taskItem';
import { TASKS } from '../mock-tasks'
 
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks:Task[];
  done:boolean = false;     //
  
  constructor() { }

  getTasks(): Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks;
  }
 
  getTask(id:number): Observable<Task>{
    const task = TASKS.find(t=>t.id===id) as ITaskItem;
    return of(task);
  }

  addTask(id:number,name:string,desc:string,time:string){
    this.tasks.push(new Task(id,name,desc,time));
  }
}
