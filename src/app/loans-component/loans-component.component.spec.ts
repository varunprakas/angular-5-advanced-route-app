import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansComponentComponent } from './loans-component.component';

describe('LoansComponentComponent', () => {
  let component: LoansComponentComponent;
  let fixture: ComponentFixture<LoansComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
