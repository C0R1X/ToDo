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
  srchId$ = this.searchService.searchId$;
  srchName$ = this.searchService.searchName$;
  srchOpt$ = this.searchService.searchOption$;
  srchDesc$ = this.searchService.searchDesc$;

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
    this.filteredTasks$ = combineLatest([this.tasksList$, this.srchId$, this.srchName$, this.srchDesc$, this.srchOpt$])
      .pipe(
        debounceTime(1100),
        tap(x => console.log(x)),
        map(([tasks, searchId, searchName, searchDesc, searchOption]) => {
          return tasks.filter(x => {
            return x;
          });

        })
      );
  }

  // Filtering tasks

  filterOnId(task: Task, searchId: number) {
    if (searchId !== null || searchId !== undefined || task.Id !== searchId) {
      return task;
    }
  }

  filterOnName(task: Task, searchName) {
    if (searchName !== '' || searchName !== undefined || task.Name !== searchName) {
      return task;
    }
  }

  filterOnDesc(task: Task, searchDesc) {
    if (searchDesc !== '' || searchDesc !== undefined || task.Desc !== searchDesc) {
      return task;
    }
  }

  filterOnSelect(task: Task, searchOption: string) {
    switch (searchOption) {
      case 'All': {
        return task;
      }
      case 'Not Important': {
        return task.Important !== true;
      }
      case 'Important': {
        return task.Important !== true;
      }

      default: {
        return task;
      }
    }
  }


}


