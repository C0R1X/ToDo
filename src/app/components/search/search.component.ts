import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  options = ['All', 'Important', 'Not Important'];


  constructor(
    private searchService: SearchService,
    private FormBuilder: FormBuilder) {

    this.searchForm = FormBuilder.group({
        searchId: ['', Validators.required],
        searchOption: ['', Validators.required],
        searchName: ['', Validators.required],
        searchDesc: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
    this.searchForm.controls['searchId'].valueChanges.subscribe(this.searchService.searchId$);
    this.searchForm.controls['searchName'].valueChanges.subscribe(this.searchService.searchName$);
    this.searchForm.controls['searchOption'].valueChanges.subscribe(this.searchService.searchOption$);
    this.searchForm.controls['searchDesc'].valueChanges.subscribe(this.searchService.searchDesc$);
  }


}
