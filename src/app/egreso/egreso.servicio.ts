import Swal from "sweetalert2";
import { Egreso } from "./egreso.model";

export class EgresoServicio {

    egresos: Egreso[] = [

    ];


    eliminar(egreso: Egreso) {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'No podrás revertir esta acción!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const indice = this.egresos.indexOf(egreso);
                if (indice !== -1) {
                    this.egresos.splice(indice, 1);
                    Swal.fire(
                        'Eliminado!',
                        'El egreso ha sido eliminado.',
                        'success'
                    );
                }
            }
        });
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
