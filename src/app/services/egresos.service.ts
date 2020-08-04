import { Injectable } from '@angular/core';
import { Egreso } from '../modelos/Egreso';

@Injectable({
  providedIn: 'root'
})
export class EgresosService {
  egresos: Egreso[]= [new Egreso("Renta departamento", 450), new Egreso("Transporte", 100)];

  constructor() { }

  crearEgreso(egreso: Egreso){
    this.egresos.push(egreso)

  }

  eliminarEgreso(egreso: Egreso){
    const indice: number= this.egresos.indexOf(egreso, 1);
    this.egresos.splice(indice);

  }
}
