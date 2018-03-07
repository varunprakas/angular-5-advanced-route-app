import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGuardComponent } from './book-guard.component';

describe('BookGuardComponent', () => {
  let component: BookGuardComponent;
  let fixture: ComponentFixture<BookGuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
