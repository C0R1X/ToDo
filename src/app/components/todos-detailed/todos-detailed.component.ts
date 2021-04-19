import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Task} from '../../models/taskItem';
import {TaskService} from '../../services/task.service';


@Component({
  selector: 'app-todos-detailed',
  templateUrl: './todos-detailed.component.html',
  styleUrls: ['./todos-detailed.component.css']
})
export class TodosDetailedComponent implements OnInit {
  task$: Observable<Task>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
  ) {
  }

  ngOnInit(): void {
    this.task$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.taskService.getTask(params.get('id')))
    );
  }
}
