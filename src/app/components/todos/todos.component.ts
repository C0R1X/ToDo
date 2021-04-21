import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Task} from '../../models/taskItem';
import {TaskService} from '../../services/task.service';
import {TASKS} from '../../mock-tasks';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  tasks$: Observable<Task[]> = this.taskService.getTasks();
  tasksList$: Observable<Task[]>;
 // tasksSList$: Observable<Task[]> = this.searchService.GetTsk;


  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    // this.tasksSList$ = this.searchService.GetTsk
    // this.searchService.search()
    // console.log(this.tasksSList$.subscribe())
    // this.searchService.search()
  }

}
