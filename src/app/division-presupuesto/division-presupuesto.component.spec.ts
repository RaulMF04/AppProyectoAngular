import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionPresupuestoComponent } from './division-presupuesto.component';

describe('DivisionPresupuestoComponent', () => {
  let component: DivisionPresupuestoComponent;
  let fixture: ComponentFixture<DivisionPresupuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivisionPresupuestoComponent]
    });
    fixture = TestBed.createComponent(DivisionPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
