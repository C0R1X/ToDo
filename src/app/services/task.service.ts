import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';
import {Task} from '../models/taskItem';
import {TASKS} from '../mock-tasks';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(TASKS as Task[]);

  done: boolean = false;

  getTasks() {
    return this.tasks$;
  }

  getTask(id: string): Observable<Task> {
    return this.getTasks()
      .pipe(
        map(tasks => tasks.find(task => task.id === +id))
      );
  }

  addTask(name: string, desc: string, time: string) {
    const tasks = this.tasks$.getValue();
    const task = new Task(tasks.length, name, desc, time);
    tasks.push(task);
    this.tasks$.next(tasks);
  }

  deleteTask(task: Task) {
    let tasks = this.tasks$.getValue();
    tasks = tasks.filter(x => x.id !== task.id);
    this.tasks$.next(tasks);
  }

  makeTaskImportant(task: Task) {
    let t = task;
    t.important = true;
    this.tasks$.getValue().splice(this.tasks$.getValue().indexOf(task), 1, t);
  }

  getTasksByString(str: string): Observable<Task[]> {
    return this.tasks$
      .pipe(
        map(tasks => tasks.filter(task => task.name.includes(str)))
      )
  }
}
