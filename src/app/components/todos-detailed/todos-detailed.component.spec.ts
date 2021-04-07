import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDetailedComponent } from './todos-detailed.component';

describe('TodosDetailedComponent', () => {
  let component: TodosDetailedComponent;
  let fixture: ComponentFixture<TodosDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
