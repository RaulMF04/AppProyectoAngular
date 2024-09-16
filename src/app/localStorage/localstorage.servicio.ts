import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageKey = 'presupuesto';

  // Guardar ingresos y egresos en localStorage
  guardarpresupuestos(ingresos: number[], egresos: number[]): void {
    const presupuestos = { ingresos, egresos };
    console.log('Guardando datos en localStorage:', presupuestos);
    localStorage.setItem(this.storageKey, JSON.stringify(presupuestos));
  }

  // Recuperar ingresos y egresos desde localStorage
  getPresupuestos(): { ingresos: number[], egresos: number[] } {
    const storedData = localStorage.getItem(this.storageKey);
    console.log('Datos recuperados de localStorage:', storedData);
    if (storedData) {
      console.log(JSON.parse(storedData));
      return JSON.parse(storedData);
    } else {
      return { ingresos: [], egresos: [] };
    }
    
  }
}
