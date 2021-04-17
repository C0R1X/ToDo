import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of} from 'rxjs';
import { Task } from '../models/taskItem';
import { TASKS } from '../mock-tasks'
import {filter, map} from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // @ts-ignore
  private tasks$:BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(TASKS);

  done:boolean = false;     //

  constructor() {
  }

  getTasks(){
    return this.tasks$
    //   .pipe(
    //   map(tasks=>tasks.filter(task=>task.name.toLowerCase().includes(SearchComponent.arguments.searchText)))
    // );
  }

  getTask(id:number | string){
    return this.getTasks().pipe(
      map(tasks=>tasks.find(task=>task.id===+id))
    );
  }

  addTask(id:number,name:string,desc:string,time:string){
    TASKS.push(new Task(id,name,desc,time));

    // @ts-ignore
    this.tasks$.next(TASKS);
  }

  deleteTask(task:Task){
    console.log(task);
    this.tasks$.getValue().splice(this.tasks$.getValue().indexOf(task),1);
  }

  makeTaskImportant(task:Task){
    let t= task;
    t.important=true;
    this.tasks$.getValue().splice(this.tasks$.getValue().indexOf(task),1,t)
  }

  getTasksByString(str:string){
    return this.tasks$
      .pipe(
      map(tasks=>tasks.filter(task=>task.name.toLowerCase().includes(str.toLowerCase())))
    );
  }


}
