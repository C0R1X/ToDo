import { Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';

import { TaskItem } from '../models/taskItem';
import { TASKS } from '../mock-tasks'
 
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<TaskItem[]>{
    const tasks = of(TASKS);
    return tasks;
  }
 
  getTask(id:number): Observable<TaskItem>{
    const task = TASKS.find(t=>t.id===id) as TaskItem;
    return of(task);
  }
}
