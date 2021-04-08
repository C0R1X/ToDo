import { Component, Input, IterableDiffers, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ITaskItem,Task } from '../../models/taskItem';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  tasks:Task[];

  constructor(private taskService: TaskService) { 
  }

  ngOnInit(): void{
    this.taskService.getTasks().subscribe(tasks=>this.tasks=tasks);
  }

  
}
