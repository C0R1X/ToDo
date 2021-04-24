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
            return this.filterOnSelect(x, searchId, searchName, searchDesc, searchOption);
          });

        })
      );
  }

  // Filtering tasks

  filterOnSelect(task: Task, searchId: number, searchName: string, searchDesc: string, searchOption: string) {
    switch (searchOption) {
      // case 'Not Important': {
      //   return task.name.toLowerCase().includes(searchText.toLowerCase());
      // }
      // case 'Important': {
      //   return task.desc.toLowerCase().includes(searchText.toLowerCase());
      // }
      // case 'id': {
      //   if (task.id === searchId) {
      //     return task;
      //   }
      // }
      case 'All':{
        if(searchId)
          return task;
      }
      case 'Not Important': {
        return task.important!= true,
        task.id === searchId,
          task.name.includes(searchName),
          task.desc.includes(searchDesc);
      }
      case 'Important': {
        return task.important === true,
        task.id === searchId,
          task.name.includes(searchName),
          task.desc.includes(searchDesc);
      }

      default: {
        return task;
      }
    }
  }




}


