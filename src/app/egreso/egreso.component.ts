import { Component, Input } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent {

  egresos:Egreso[]=[];
  @Input() ingresoTotal!:number;

  constructor(private egresosServicio:EgresoServicio){}

  ngOnInit(){
    this.egresos=this.egresosServicio.egresos;
  }

  eliminarEgreso(egreso:Egreso){
      this.egresosServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.valor / this.ingresoTotal;
  }
}
