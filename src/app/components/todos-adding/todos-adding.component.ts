import { Component, OnInit } from '@angular/core';

import { TaskService } from "../../services/task.service";
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Task } from 'src/app/models/taskItem';





@Component({
  selector: 'app-todos-adding',
  templateUrl: './todos-adding.component.html',
  styleUrls: ['./todos-adding.component.css']
})
export class TodosAddingComponent implements OnInit {

  temp:string[];

  myForm:FormGroup;
  constructor(private TaskService: TaskService,private FormBuilder:FormBuilder) {

    this.myForm=FormBuilder.group
      ({
        "taskName":["", [Validators.required]],
        "taskDesc":["", [Validators.required]],
        "taskTime":["",[Validators.required]]
      });
  }
  ngOnInit(): void {

  }

  onSubmit(){

    this.TaskService.addTask(
      new Task(
        0,
        this.myForm.controls.taskName.value,
        this.myForm.controls.taskDesc.value,            // error: how to send myForm.values to Task constructor?
        this.myForm.controls.taskTime.value
      )
    );

    console.log(this.myForm.value);
  }



}
