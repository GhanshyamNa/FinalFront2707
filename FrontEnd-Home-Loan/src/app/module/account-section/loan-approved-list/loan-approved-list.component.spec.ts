import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApprovedListComponent } from './loan-approved-list.component';

describe('LoanApprovedListComponent', () => {
  let component: LoanApprovedListComponent;
  let fixture: ComponentFixture<LoanApprovedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanApprovedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApprovedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
