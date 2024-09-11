import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { EgresoServicio } from './egreso/egreso.servicio';
import { FormsModule } from '@angular/forms';
import { MultiplicacionPresupuestoComponent } from './multiplicacion-presupuesto/multiplicacion-presupuesto.component';
import { DivisionPresupuestoComponent } from './division-presupuesto/division-presupuesto.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    IngresoComponent,
    EgresoComponent,
    FormularioComponent,
    MultiplicacionPresupuestoComponent,
    DivisionPresupuestoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoServicio, 
              EgresoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
