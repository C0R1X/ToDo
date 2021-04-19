import {Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {TodosComponent} from '../todos/todos.component';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  searchText: string;
  searchOption: string;

  constructor(
    private taskService:TaskService)
  { }

  ngOnInit(): void {
  }

  OnChange() {
    if(!this.searchText){
      TodosComponent.arguments.tasks$.next(this.taskService.getTasks());
    }
    else {
      console.log(this.searchText)
      TodosComponent.arguments.tasks$.next(this.taskService.getTasksByString(this.searchText));
    }

  }
}
