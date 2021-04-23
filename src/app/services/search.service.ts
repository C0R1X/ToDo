import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private search$ = new BehaviorSubject<string>(null);
  private searchOpt$ = new BehaviorSubject<string>(null);
  private searchC$ = combineLatest([this.search$,this.searchOpt$])

  get searchData$() {
    return this.searchC$;
  }

  search(task: string) {
    this.searchC$[0].next(task);

  }
  searchOpt(option: string){
    this.searchC$[1].next(option);
  }

}

