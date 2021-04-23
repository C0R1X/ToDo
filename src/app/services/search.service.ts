import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private search$ = new BehaviorSubject<string>(null);
  private searchOpt$ = new BehaviorSubject<string>(null);


  get searchText$() {
    return this.search$;
  }

  get searchOption$(){
    return this.searchOpt$;
  }


  search(task: string) {
    this.search$.next(task);

  }
  searchOpt(option: string){
    this.searchOpt$.next(option);
  }

}

