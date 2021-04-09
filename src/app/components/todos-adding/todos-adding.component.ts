import { Component, NgModule, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Task  } from "../../models/taskItem";
import { TodosComponent } from "../todos/todos.component";
import { TaskService } from "../../services/task.service";


@Component({
  selector: 'app-todos-adding',
  templateUrl: './todos-adding.component.html',
  styleUrls: ['./todos-adding.component.css']
})
export class TodosAddingComponent implements OnInit {
  
  name="";
  desc="";
  time="";

  constructor(private TaskService: TaskService) { }
 
  ngOnInit(): void {
    
  }

  addTask(name:string,desc:string,time:string):void{
    this.TaskService.addTask(0,name,desc,time);
  }

}
