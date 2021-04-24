import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {map, multicast, tap} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  options = ['Important','Not Important']



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
    this.searchForm.valueChanges.pipe(
      tap(x=>{console.log(x)})
    ).subscribe();

  }
}
