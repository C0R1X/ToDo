import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {IAppState} from '../../redux/states/app.state';
import {AddTodo} from '../../redux/actions/todo.actions';


@Component({
  selector: 'app-todos-adding',
  templateUrl: './todos-adding.component.html',
  styleUrls: ['./todos-adding.component.css']
})
export class TodosAddingComponent {

  myForm: FormGroup;

  constructor(private store: Store<IAppState>, private FormBuilder: FormBuilder) {

    this.myForm = FormBuilder.group
    ({
      'taskName': ['', [Validators.required]],
      'taskDesc': ['', [Validators.required]],
      'taskTime': ['', [Validators.required]]
    });

    this.myForm.valueChanges.subscribe();
  }

  onSubmit() {
    this.store.dispatch(new AddTodo(this.myForm.value));
  }
}
