import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustEditComponentComponent } from './cust-edit-component.component';

describe('CustEditComponentComponent', () => {
  let component: CustEditComponentComponent;
  let fixture: ComponentFixture<CustEditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustEditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
