import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycalcComponent } from './mycalc.component';

describe('MycalcComponent', () => {
  let component: MycalcComponent;
  let fixture: ComponentFixture<MycalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MycalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
