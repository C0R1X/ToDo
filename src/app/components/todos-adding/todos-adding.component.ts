import {Component} from '@angular/core';

import {TaskService} from '../../services/task.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-todos-adding',
  templateUrl: './todos-adding.component.html',
  styleUrls: ['./todos-adding.component.css']
})
export class TodosAddingComponent {

  myForm: FormGroup;

  constructor(private TaskService: TaskService, private FormBuilder: FormBuilder) {

    this.myForm = FormBuilder.group
    ({
      'taskName': ['', [Validators.required]],
      'taskDesc': ['', [Validators.required]],
      'taskTime': ['', [Validators.required]]
    });

    this.myForm.valueChanges.subscribe()
  }

  onSubmit() {
    this.TaskService.addTask(
      this.myForm.controls.taskName.value,
      this.myForm.controls.taskDesc.value,
      this.myForm.controls.taskTime.value
    );
  }
}
