import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { TaskItem } from '../../models/taskItem';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  tasks = TaskItem[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks():void{
    this.taskService.getTasks().subscribe(tasks=>this.tasks=tasks);
  }
}
