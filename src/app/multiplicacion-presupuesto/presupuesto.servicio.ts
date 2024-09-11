import { Injectable } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { EgresoServicio } from '../egreso/egreso.servicio';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoServicio {
  constructor(
    private ingresoServicio: IngresoServicio,
    private egresoServicio: EgresoServicio
  ) {}

  // Método para calcular el presupuesto total
  calcularPresupuestoTotal(): number {
    const totalIngresos = this.ingresoServicio.ingresos.reduce((total, ingreso) => total + ingreso.valor, 0);
    const totalEgresos = this.egresoServicio.egresos.reduce((total, egreso) => total + egreso.valor, 0);
    return totalIngresos - totalEgresos;
  }

  // Método para multiplicar el presupuesto total por 2
  multiplicarPresupuestoTotal(): number {
    const presupuestoTotal = this.calcularPresupuestoTotal();
    return presupuestoTotal * 2;
  }
}

