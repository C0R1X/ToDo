import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private search$ = new BehaviorSubject<string>(null);

  get searchData$() {
    return this.search$;
  }

  search(task: string) {
    this.search$.next(task);
  }
}

