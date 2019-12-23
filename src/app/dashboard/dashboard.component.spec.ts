import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { TodoSearchComponent } from '../todo-search/todo-search.component';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { TODOES } from '../mock-todoes';
import { TodoService } from '../todo.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let todoService;
  let getTodoesSpy;

  beforeEach(async(() => {
    todoService = jasmine.createSpyObj('TodoService', ['getTodoes']);
    getTodoesSpy = todoService.getTodoes.and.returnValue( of(TODOES) );
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        TodoSearchComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: TodoService, useValue: todoService }
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Todoes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toEqual('Top Todoes');
  });

  it('should call todoService', async(() => {
    expect(getTodoesSpy.calls.any()).toBe(true);
    }));

  it('should display 4 links', async(() => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  }));

});
