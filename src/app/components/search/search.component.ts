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
  }

  OnChange(){
    this.taskService.getTasksByString(this.searchText);
    console.log("OK sA", this.searchText)
  }

}
