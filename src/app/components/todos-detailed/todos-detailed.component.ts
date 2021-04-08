import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

import { ITaskItem } from '../../models/taskItem';
import { TaskService } from '../../services/task.service';
import { ThrowStmt } from '@angular/compiler';
 
@Component({
  selector: 'app-todos-detailed',
  templateUrl: './todos-detailed.component.html',
  styleUrls: ['./todos-detailed.component.css']
})
export class TodosDetailedComponent implements OnInit {
  task: ITaskItem


  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id).subscribe(task=>this.task=task);
  }

}
