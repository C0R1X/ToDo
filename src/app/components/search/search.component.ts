import {Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import {TaskService} from '../../services/task.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  searchText: string;
  searchOption: string;

  constructor(
    private taskService:TaskService)
  { }

  ngOnInit(): void {
<<<<<<< Scratch
  }

  OnChange(){
    this.taskService.getTasksByString(this.searchText);
    console.log("OK sA", this.searchText)
=======
    this.todos.tasksList$=this.taskService.getTasks();
  }


  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...

    if (this.searchText === '') {

      this.todos.tasksList$.pipe(
        //map(tasks=> { this.taskService.getTasksByString(this.searchText) } ),
        switchMap((x)=> {
          console.log(x)
          return this.taskService.getTasks()

          //return this.taskService.getTasksByString(this.searchText)
        })).subscribe(value => {
            console.log(value)
      })

    } else{

      this.todos.tasksList$.pipe(
        //map(tasks=> { this.taskService.getTasksByString(this.searchText) } ),
        switchMap((x)=> {
          console.log(x)
          return this.taskService.getTasksByString(this.searchText)
        })

      ).subscribe(value => {
            console.log(value)
        })

    }
>>>>>>> local
  }

}
