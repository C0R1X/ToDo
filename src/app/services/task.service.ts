import { Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';

import { TaskItem } from '../models/taskItem';
import { TASKS } from '../mock-tasks'
 
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getHeroes(): Observable<TaskItem[]>{
    const tasks = of(TASKS);
    return tasks;
  }

}
