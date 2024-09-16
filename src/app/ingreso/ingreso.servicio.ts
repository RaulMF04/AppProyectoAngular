import Swal from "sweetalert2";
import { Ingreso } from "./ingreso.model";

export class IngresoServicio {

    ingresos: Ingreso[] = [
       
    ];

    
    eliminar(ingreso: Ingreso) {
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
            const indice = this.ingresos.indexOf(ingreso);
            if (indice !== -1) {
              this.ingresos.splice(indice, 1);
              Swal.fire(
                'Eliminado!',
                'El ingreso ha sido eliminado.',
                'success'
              );
            }
          }
        });
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
