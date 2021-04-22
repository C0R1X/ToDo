import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {TodosComponent} from '../todos/todos.component';
import {SearchService} from '../../services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() searchText: string;
  searchOption: string;


  constructor(
    private searchService: SearchService) {
  }

  ngOnInit(): void {

  }


  onChanges(e) {
      this.searchService.search(e.srcElement.value);
  }

}
