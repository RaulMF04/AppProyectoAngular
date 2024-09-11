import { Component } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';
import { PresupuestoServicio } from '../multiplicacion-presupuesto/presupuesto.servicio';
import { DivisionServicio } from '../division-presupuesto/division.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  tipo: string = "ingresoOperacion";
  descripcionInput!: string;
  valorInput!: number;
  presupuestoMultiplicado!: number;
  presupuestoDividido!: number;

  constructor(
    private ingresoServicio: IngresoServicio,
    private egresoServicio: EgresoServicio,
    private presupuestoServicio: PresupuestoServicio,
    private divisionServicio: DivisionServicio
  ) {}

  tipoOperacion(evento: any) {
    this.tipo = evento.target.value;
  }

  agregarValor() {
    // Aquí emite el valor actualizado al componente Cabecero o actualizarlo directamente si es el mismo componente.
    if (this.tipo === "ingresoOperacion") {
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    } else if (this.tipo === "egresoOperacion") {
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    } else if (this.tipo === "multiplicarOperacion") {
      this.presupuestoMultiplicado = this.presupuestoServicio.multiplicarPresupuestoTotal();
    }else if (this.tipo === "dividirOperacion") {
      this.presupuestoDividido = this.divisionServicio.dividirPresupuestoTotal();
    }
  }
}
