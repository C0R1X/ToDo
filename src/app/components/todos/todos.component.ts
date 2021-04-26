import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {TaskService} from '../../services/task.service';
import {SearchService} from '../../services/search.service';
import {Task} from '../../models/taskItem';
import {debounceTime, map, tap} from 'rxjs/operators';
import {reflectTypeEntityToDeclaration} from '@angular/compiler-cli/src/ngtsc/reflection';


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
            console.log(tasks + 'on id')
            return tasks.filter((x)=>x.Id===searchId)
          }
          if (this.filterOnName(tasks,searchName)){
            console.log(tasks + 'on name')
            return tasks.filter(x=>x.Name.includes(searchName))
          }
          if (this.filterOnDesc(tasks,searchDesc)){
            return tasks.filter(x=>x.Desc.includes(searchDesc))
          }
          if (this.filterOnSelect(tasks,searchOption)){
              return tasks.filter(x=>x.Important===true)
           }
          return tasks;
        }),
        tap(x=>console.log(x))
      );
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


