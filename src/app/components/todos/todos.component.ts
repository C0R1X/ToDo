import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {TaskService} from '../../services/task.service';
import {SearchService} from '../../services/search.service';
import {Task} from '../../models/taskItem';
import {debounceTime, map, tap} from 'rxjs/operators';
import {TaskActions} from '../../redux/todo.actions';
import {selectTaskList} from '../../redux/todo.select';
import {GetTodos} from '../../redux/todo.actions';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../redux/app.state';
import {Router} from '@angular/router';


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
    private _store: Store<IAppState>,
    private _router: Router,
    private searchService: SearchService,
    private taskService: TaskService,
    // private taskActions: TaskActions
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

    //this.todoActions.LoadTasks();

    this.filteredTasks$ = combineLatest([this.tasksList$, this.srchId$, this.srchName$, this.srchDesc$, this.srchOpt$])
      .pipe(
        debounceTime(1100),
        tap(x => console.log(x)),
        map(([tasks, searchId, searchName, searchDesc, searchOption])=> {

          tasks = this.taskService.getTasks().getValue()
          if (searchId!=null)
            tasks=tasks.filter(x=>x.Id==searchId)
          if (searchName!=null ){
            tasks=tasks.filter(x=>x.Name.includes(searchName))
          }
          if (searchDesc!=null ){
            tasks=tasks.filter(x=>x.Desc.includes(searchDesc))
          }
          if (searchOption=="Important" ){
            tasks=tasks.filter(x=>x.Important==true)
           }
          return tasks

        }),
      //select(selectTaskList))
        tap(x=>console.log(x))
      );


  }

  navigateToTask(id: number){
    this._router.navigate(['user',id])
  }

  // Filtering tasks

  filterOnId(tasks: Task[], searchId: number) {
    if (searchId !== null) {
      return true;
    }
    return  false
  }

  filterOnName(tasks: Task[], searchName) {
    if (searchName !== "") {
      return true;
    }
    return  false
  }

  filterOnDesc(tasks: Task[], searchDesc) {
    if (searchDesc !== "") {
      return true;
    }
    return  false

  }

  filterOnSelect(tasks: Task[], searchOption: string) {
    switch (searchOption) {
      case 'Important': {
        return true
      }
      default: {
        return false;
      }
    }
  }


}


