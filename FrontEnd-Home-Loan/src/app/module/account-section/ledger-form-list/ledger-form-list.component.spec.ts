import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerFormListComponent } from './ledger-form-list.component';

describe('LedgerFormListComponent', () => {
  let component: LedgerFormListComponent;
  let fixture: ComponentFixture<LedgerFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerFormListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
