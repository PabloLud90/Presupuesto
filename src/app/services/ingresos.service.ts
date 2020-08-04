import { Injectable } from '@angular/core';
import { Ingreso } from '../modelos/Ingreso';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  ingresos: Ingreso[]= [new Ingreso("Venta vehiculo", 5000), new Ingreso("Salario", 2000)];
  // inputDescripcion: String;
  // inputaValor: number;

  constructor() { }

  crearIngreso(ingreso: Ingreso){
    this.ingresos.push(ingreso);
  }

  eliminarIngreso(ingreso: Ingreso){
    const indice: number= this.ingresos.indexOf(ingreso, 1);
    this.ingresos.splice(indice);
  }
}
