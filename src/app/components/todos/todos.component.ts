import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {TaskService} from '../../services/task.service';
import {SearchService} from '../../services/search.service';
import {Task} from '../../models/taskItem';
import {map, tap} from 'rxjs/operators';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  tasksList$ = this.taskService.getTasks();
  srchList$ = this.searchService.searchData$;
  filteredTasks$: Observable<Task[]>;

  searchText: string;

  constructor(
    private searchService: SearchService,
    private taskService: TaskService
  ) {
    this.filteredTasks$ = combineLatest([this.tasksList$, this.srchList$])
      .pipe(
        tap(x => console.log(x)),
        map(([tasks, searchText]) => {
          if (searchText == null) {
            return tasks;
          }
          return tasks.filter(x => x.name.toLowerCase().includes(searchText.toLowerCase()));
        })
      );
  }

  ngOnInit() {

  }

}
