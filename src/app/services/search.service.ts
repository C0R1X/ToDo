import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private Id$ = new BehaviorSubject<number>(null);
  private Name$ = new BehaviorSubject<string>(null);
  private Desc$ = new BehaviorSubject<string>(null);
  private Opt$ = new BehaviorSubject<string>(null);


  get searchId$() {
    return this.Id$;
  }

  get searchName$() {
    return this.Name$;
  }

  get searchDesc$() {
    return this.Desc$;
  }

  get searchOption$() {
    return this.Opt$;
  }


  SearchId(id: number) {
    this.searchId$.next(id);
  }

  SearchName(name: string) {
    this.searchName$.next(name);
  }

  SearchDesc(desc: string) {
    this.searchDesc$.next(desc);
  }

  searchOpt(option: string) {
    this.searchOption$.next(option);
  }


}

