import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosAddingComponent } from './todos-adding.component';

describe('TodosAddingComponent', () => {
  let component: TodosAddingComponent;
  let fixture: ComponentFixture<TodosAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosAddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
