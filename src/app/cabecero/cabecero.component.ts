import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnChanges {
  @Input() presupuestoTotal!: number;
  @Input() ingresoTotal!: number;
  @Input() egresoTotal!: number;  
  @Input() porcentajeTotal!: number;
  @Input() presupuestoMultiplicado?: number;
  @Input() presupuestodividido?: number;

  ngOnChanges(changes: SimpleChanges) {
    // Cargar los valores desde el LocalStorage solo si no hay valores entrantes (primer inicio)
    if (!changes['presupuestoTotal']?.currentValue) {
      this.presupuestoTotal = +localStorage.getItem('presupuestoTotal')! || 0;
      this.ingresoTotal = +localStorage.getItem('ingresoTotal')! || 0;
      this.egresoTotal = +localStorage.getItem('egresoTotal')! || 0;
      this.porcentajeTotal = +localStorage.getItem('porcentajeTotal')! || 0;
      this.presupuestoMultiplicado = +localStorage.getItem('presupuestoMultiplicado')! || 0;
      this.presupuestodividido = +localStorage.getItem('presupuestodividido')! || 0;
      console.log('Cargado desde LocalStorage:', {
        presupuestoTotal: this.presupuestoTotal,
        ingresoTotal: this.ingresoTotal,
        egresoTotal: this.egresoTotal,
        porcentajeTotal: this.porcentajeTotal,
        presupuestoMultiplicado: this.presupuestoMultiplicado,
        presupuestodividido: this.presupuestodividido
      });
    }

    // Actualizar LocalStorage cuando cambien los valores
    if (changes['presupuestoTotal'] || changes['ingresoTotal'] || changes['egresoTotal'] || changes['porcentajeTotal'] || changes['presupuestoMultiplicado'] || changes['presupuestodividido']) {
      this.actualizarValores();
    }
  }

  actualizarValores() {
    // Guardar los valores actualizados en LocalStorage
    localStorage.setItem('presupuestoTotal', this.presupuestoTotal.toString());
    localStorage.setItem('ingresoTotal', this.ingresoTotal.toString());
    localStorage.setItem('egresoTotal', this.egresoTotal.toString());
    localStorage.setItem('porcentajeTotal', this.porcentajeTotal.toString());
    if (this.presupuestoMultiplicado !== undefined) {
      localStorage.setItem('presupuestoMultiplicado', this.presupuestoMultiplicado.toString());
    }
    if (this.presupuestodividido !== undefined) {
      localStorage.setItem('presupuestodividido', this.presupuestodividido.toString());
    }
    console.log('Valores guardados en LocalStorage:', {
      presupuestoTotal: this.presupuestoTotal,
      ingresoTotal: this.ingresoTotal,
      egresoTotal: this.egresoTotal,
      porcentajeTotal: this.porcentajeTotal,
      presupuestoMultiplicado: this.presupuestoMultiplicado,
      presupuestodividido: this.presupuestodividido
    });
  }
}
