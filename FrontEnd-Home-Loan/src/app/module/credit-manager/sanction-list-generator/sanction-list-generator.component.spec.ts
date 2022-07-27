import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionListGeneratorComponent } from './sanction-list-generator.component';

describe('SanctionListGeneratorComponent', () => {
  let component: SanctionListGeneratorComponent;
  let fixture: ComponentFixture<SanctionListGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanctionListGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionListGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
