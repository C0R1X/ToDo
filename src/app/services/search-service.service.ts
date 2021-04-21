import { Injectable } from '@angular/core';
import { Task } from '../models/taskItem';
import { from, Observable, of} from 'rxjs';
import { TASKS } from '../mock-tasks';
import {tap} from 'rxjs/operators';
import {TaskService} from './task.service';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  private taskss$:Observable<Task[]> = from(TASKS) as unknown as Observable<Task[]>

  get GetTsk(){
    return this.taskss$;
  }

  constructor() {
    this.taskss$.pipe()
  }
  search(){
    let tasks = this.taskss$;
    tasks.subscribe(value => {new Task(0,"","","")})


  }
}
