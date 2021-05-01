import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable, of} from 'rxjs';
import {SearchService} from '../../services/search.service';
import {Task} from '../../models/taskItem';
import {debounceTime, map, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../redux/states/app.state';
import {Router} from '@angular/router';
import {getTasks} from '../../redux/selectors/todo.select';
import {DeleteTodo, GetTodos, GetTodosSuccess, GetTodoSucces, MakeTodoImportant} from '../../redux/actions/todo.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  tasksList$ = this.store.select(getTasks);
  srchId$ = this.searchService.searchId$;
  srchName$ = this.searchService.searchName$;
  srchOpt$ = this.searchService.searchOption$;
  srchDesc$ = this.searchService.searchDesc$;

  filteredTasks$: Observable<Task[]>;

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private searchService: SearchService,
  ) {

  }

  ngOnInit() {
    this.filteredTasks$ = combineLatest([this.tasksList$, this.srchId$, this.srchName$, this.srchDesc$, this.srchOpt$])
      .pipe(
        debounceTime(1100),
        tap(x => console.log(x)),
        map(([tasks, searchId, searchName, searchDesc, searchOption]) => {
          if (searchId != null) {
            tasks = tasks.filter(x => x.Id == searchId);
          }
          if (searchName != null) {
            tasks = tasks.filter(x => x.Name.includes(searchName));
          }
          if (searchDesc != null) {
            tasks = tasks.filter(x => x.Desc.includes(searchDesc));
          }
          if (searchOption == 'Important') {
            tasks = tasks.filter(x => x.Important == true);
          }
          return tasks;

        })
        //tap(x => console.log(x))
      );


  }


  makeTaskImportant(task: Task) {
    this.store.dispatch(new MakeTodoImportant(task));
  }

  removeTask(task: Task): void {
    this.store.dispatch(new DeleteTodo(task));
  }

  // Filtering tasks

  filterOnId(tasks: Task[], searchId: number) {
    if (searchId !== null) {
      return true;
    }
    return false;
  }

  filterOnName(tasks: Task[], searchName) {
    if (searchName !== '') {
      return true;
    }
    return false;
  }

  filterOnDesc(tasks: Task[], searchDesc) {
    if (searchDesc !== '') {
      return true;
    }
    return false;

  }

  filterOnSelect(tasks: Task[], searchOption: string) {
    switch (searchOption) {
      case 'Important': {
        return true;
      }
      default: {
        return false;
      }
    }
  }


}


