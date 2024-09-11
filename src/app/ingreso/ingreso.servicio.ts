import { Ingreso } from "./ingreso.model";

export class IngresoServicio {

    ingresos: Ingreso[] = [
       
    ];

    
    eliminar(ingreso: Ingreso) {
        const indice = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice, 1);
    }

    // Método para obtener el total de ingresos
    obtenerIngresoTotal(): number {
        let totalIngreso = 0;
        this.ingresos.forEach(ingreso => {
            totalIngreso += ingreso.valor;
        });
        return totalIngreso;
    }
}
