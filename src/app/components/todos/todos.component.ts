import { Component, Input, IterableDiffers, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { Task } from '../../models/taskItem';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  tasks$:Observable<Task[]>;
  selectedId:number;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
    ) { 
  }

  ngOnInit(): void{
    this.tasks$=this.route.paramMap.pipe(
      switchMap(params=>{
        this.selectedId= +params.get('id');
        return this.taskService.getTasks();
      })
    );
  }

  
}