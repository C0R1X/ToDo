import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {TodosComponent} from '../todos/todos.component';
import {map, switchMap} from 'rxjs/operators';
import {SearchServiceService} from '../../services/search-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {

  @Input() searchText: string;
  searchOption: string;


  constructor(
    private taskService: TaskService,
    private todos: TodosComponent,
    private searchService: SearchServiceService) {
  }

  ngOnInit(): void {

  }


  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    //this.searchService.search()
    this.searchService.search(this.searchText)


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
