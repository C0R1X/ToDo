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
          if (this.filterOnId(tasks,searchId)){
            tasks.filter(x=>x.Id===searchId)
          }
          if (this.filterOnName(tasks,searchName)){
            tasks.filter(x=>x.Name===searchName)
          }
          if (this.filterOnDesc(tasks,searchDesc)){
            tasks.filter(x=>x.Desc===searchDesc)
          }
          // if (this.filterOnSelect(tasks,searchOption)){
          //   tasks.filter(x=>x.Important===true)
          // }
          return tasks;
        })
      );
  }

  // Filtering tasks

  filterOnId(tasks: Task[], searchId: number) {
    if (searchId !== null) {
      return true;
    }
  }

  filterOnName(tasks: Task[], searchName) {
    if (searchName !== "") {
      return true;
    }
  }

  filterOnDesc(tasks: Task[], searchDesc) {
    if (searchDesc !== "") {
      return true;
    }
  }

  // filterOnSelect(tasks: Task[], searchOption: string) {
  //   switch (searchOption) {
  //     case 'All': {
  //       return tasks;
  //     }
  //     case 'Not Important': {
  //       return tasks.Important !== true;
  //     }
  //     case 'Important': {
  //       return tasks.Important !== true;
  //     }
  //
  //     default: {
  //       return tasks;
  //     }
  //   }
  // }


}


