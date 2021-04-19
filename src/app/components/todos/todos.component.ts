import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Task} from '../../models/taskItem';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  tasks$: Observable<Task[]> = this.taskService.getTasks();

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {
  }
}
