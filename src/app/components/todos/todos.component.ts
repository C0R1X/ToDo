import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {TaskService} from '../../services/task.service';
import {SearchService} from '../../services/search.service';
import {Task} from '../../models/taskItem';
import {debounceTime, map, tap} from 'rxjs/operators';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  tasksList$ = this.taskService.getTasks();
  srchText$ = this.searchService.searchText$;
  srchOpt$ = this.searchService.searchOption$;

  filteredTasks$: Observable<Task[]>;

  constructor(
    private searchService: SearchService,
    private taskService: TaskService
  ) {
    // this.filteredTasks$ = combineLatest([this.tasksList$, this.srchList$])
    //   .pipe(
    //     tap(x => console.log(x)),
    //     map(([tasks, searchText]) => {
    //       if (searchText == null) {
    //         return tasks;
    //       }
    //       return tasks.filter(x => x.name.toLowerCase().includes(searchText.toLowerCase()));
    //     })
    //   );
  }

  ngOnInit() {
    this.filteredTasks$ = combineLatest([this.tasksList$, this.srchText$, this.srchOpt$])
      .pipe(
        debounceTime(1100),
        tap(x => console.log(x)),
        map(([tasks, searchText, searchOption]) => {
          return tasks.filter(x => {
            return this.filterOnSelect(x, searchText, searchOption);
          });

        })
      );
  }

  // Filtering tasks

  filterOnSelect(task: Task, searchText: string, searchOption: string) {
    switch (searchOption) {
      case 'name': {
        return task.name.toLowerCase().includes(searchText.toLowerCase());
      }
      case 'id': {
        if (task.id === parseInt(searchText[0])) {
          return task;
        }
      }
      case 'desc': {
        return task.desc.toLowerCase().includes(searchText.toLowerCase());
      }
      default: {
        return task;
      }
    }
  }

}


