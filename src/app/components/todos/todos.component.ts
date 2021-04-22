import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Task} from '../../models/taskItem';
import {TaskService} from '../../services/task.service';
import {SearchServiceService} from '../../services/search-service.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  tasks$: Observable<Task[]> = this.taskService.getTasks();
  tasksList$: Observable<Task[]> = this.taskService.getTasks();

  srchList$: Observable<string>=this.searchService.GetTsk;
  searchText: string;

  constructor(
    private searchService: SearchServiceService,
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.searchService.search(this.searchText)

    //this.searchService.GetTsk.subscribe()
    // this.tasksSList$ = this.searchService.GetTsk
    // this.searchService.search()
    // console.log(this.tasksSList$.subscribe())
    // this.searchService.search()\

  }

}
