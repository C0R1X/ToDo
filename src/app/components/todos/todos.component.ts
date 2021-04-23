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
  srchList$ = this.searchService.searchData$;

  filteredTasks$: Observable<Task[]>;

  searchText: string;
  searchOption: string;

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

    if (this.searchText === '') {
      this.filteredTasks$ = this.tasksList$;
    } else {
      this.filteredTasks$ = combineLatest([this.tasksList$, this.srchList$[0],this.srchList$[1]])
        .pipe(
          debounceTime(1100),
          tap(x => console.log(x)),
          map(([tasks, searchText,searchOption]) => {
            return tasks.filter(x => {
              switch (searchOption) {
                case 'name': {
                  x.name.toLowerCase().includes(searchText.toLowerCase());
                }
                case 'id': {
                  if (parseInt(searchText)) {
                    x.id === parseInt(searchText[0]);
                  }
                }
                case 'desc': {
                  x.desc.toLowerCase().includes(searchText.toLowerCase());
                }
              }
            });

          })
        );
    }


  }

}


