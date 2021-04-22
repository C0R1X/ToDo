import { Injectable } from '@angular/core';
import { Task } from '../models/taskItem';
import {from, Observable, of, Subject} from 'rxjs';
import { TASKS } from '../mock-tasks';
import {tap} from 'rxjs/operators';
import {TaskService} from './task.service';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  private taskss$:Subject<string>=new Subject<string>()

  get GetTsk(){
    return this.taskss$;
  }

  constructor() {
  }
  search(task:string) {
    this.taskss$.next(task)
  }


  }

