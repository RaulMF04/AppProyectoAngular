import { Component } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';
import { PresupuestoServicio } from '../multiplicacion-presupuesto/presupuesto.servicio';
import { DivisionServicio } from '../division-presupuesto/division.servicio';
import Swal from 'sweetalert2';

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
  ) { }

  tipoOperacion(evento: any) {
    this.tipo = evento.target.value;
  }

  agregarValor() {
    // Mostrar alerta de confirmación para ingresos
    if (this.tipo === "ingresoOperacion") {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, añadirlo!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
          Swal.fire({
            title: "¡Añadido!",
            text: "Tu ingreso ha sido añadido.",
            icon: "success"
          });
        }
      });
    } else if (this.tipo === "egresoOperacion") {
      // Mostrar alerta de confirmación para egresos
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, añadirlo!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
          Swal.fire({
            title: "¡Añadido!",
            text: "Tu egreso ha sido añadido.",
            icon: "success"
          });
        }
      });


    } else if (this.tipo === "multiplicarOperacion") {
      this.presupuestoMultiplicado = this.presupuestoServicio.multiplicarPresupuestoTotal();
    } else if (this.tipo === "dividirOperacion") {
      this.presupuestoDividido = this.divisionServicio.dividirPresupuestoTotal();
    }
  }
}
