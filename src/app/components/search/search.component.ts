import {Component, Input, OnInit} from '@angular/core';
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

  keyUp(e) {
    this.searchService.search(e.srcElement.value);
  }
}
