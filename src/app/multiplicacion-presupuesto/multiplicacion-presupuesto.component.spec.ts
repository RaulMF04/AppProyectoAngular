import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacionPresupuestoComponent } from './multiplicacion-presupuesto.component';

describe('MultiplicacionPresupuestoComponent', () => {
  let component: MultiplicacionPresupuestoComponent;
  let fixture: ComponentFixture<MultiplicacionPresupuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicacionPresupuestoComponent]
    });
    fixture = TestBed.createComponent(MultiplicacionPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
