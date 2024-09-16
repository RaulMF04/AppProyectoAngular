import { Component, Input, OnInit, Output } from '@angular/core';
import { StorageService } from '../localStorage/localstorage.servicio';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  @Input() presupuestoTotal!: number;
  @Input() ingresoTotal!: number;
  @Input() egresoTotal!: number;
  @Input() porcentajeTotal!: number;
  @Input() presupuestoMultiplicado?: number;
  @Input() presupuestodividido?: number;


  // Propiedades para manejar ingresos y egresos
  ingresos: number[] = [];
  egresos: number[] = [];
  strue: boolean = true;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.cargarPresupuestos();
  }

  cargarPresupuestos(): void {
    const { ingresos, egresos } = this.storageService.getPresupuestos();
    this.ingresos = ingresos;
    this.egresos = egresos;
    console.log('Datos cargados:', ingresos, egresos);
  }

  guardarPresupuestos(): void {
    console.log('Guardando ingresos:', this.ingresos);
    console.log('Guardando egresos:', this.egresos);
    this.storageService.guardarpresupuestos(this.ingresos, this.egresos);
    alert('Datos guardados con éxito');
  }

  checkStoredData(): void {
    const storedData = this.storageService.getPresupuestos();
    console.log('Datos guardados:', storedData);
    alert('Datos guardados: \n' + JSON.stringify(storedData, null, 2));
  }
}
