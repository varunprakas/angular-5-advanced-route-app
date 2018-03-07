import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustDetailsComponentComponent } from './cust-details-component.component';

describe('CustDetailsComponentComponent', () => {
  let component: CustDetailsComponentComponent;
  let fixture: ComponentFixture<CustDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
