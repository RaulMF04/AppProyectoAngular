import { Egreso } from "./egreso.model";

export class EgresoServicio {

    egresos: Egreso[] = [
       
    ];

    
    eliminar(egreso: Egreso) {
        const indice = this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1);
    }

    // Método para obtener el total de egresos
    obtenerEgresoTotal(): number {
        let totalEgreso = 0;
        this.egresos.forEach(egreso => {
            totalEgreso += egreso.valor;
        });
        return totalEgreso;
    }
}
