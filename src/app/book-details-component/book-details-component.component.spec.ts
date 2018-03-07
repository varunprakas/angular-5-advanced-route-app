import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsComponentComponent } from './book-details-component.component';

describe('BookDetailsComponentComponent', () => {
  let component: BookDetailsComponentComponent;
  let fixture: ComponentFixture<BookDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
