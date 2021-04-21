import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {TodosComponent} from '../todos/todos.component';
import {LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY} from '@angular/cdk/a11y';
import {ObserversModule} from '@angular/cdk/observers';
import {map, switchMap} from 'rxjs/operators';
import {ParamMap, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {getTableDuplicateColumnNameError} from '@angular/cdk/table/table-errors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {

  @Input() searchText: string;
  searchOption: string;


  constructor(
    private taskService: TaskService, private todos: TodosComponent) {
  }

  ngOnInit(): void {
    this.todos.tasksList$=this.taskService.getTasks();
  }


  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...

    if (this.searchText === '') {

      this.todos.tasksList$.pipe(
        //map(tasks=> { this.taskService.getTasksByString(this.searchText) } ),
        switchMap((x)=> {
          console.log(x)
          return this.taskService.getTasks()

          //return this.taskService.getTasksByString(this.searchText)
        })).subscribe(value => {
            console.log(value)
      })

    } else{

      this.todos.tasksList$.pipe(
        //map(tasks=> { this.taskService.getTasksByString(this.searchText) } ),
        switchMap((x)=> {
          console.log(x)
          return this.taskService.getTasksByString(this.searchText)
        })

      ).subscribe(value => {
            console.log(value)
        })

    }
  }


}
