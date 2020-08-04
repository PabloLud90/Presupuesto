import { Component, OnInit } from '@angular/core';
import { IngresosService } from '../services/ingresos.service';
import { EgresosService } from '../services/egresos.service';
import { Ingreso } from '../modelos/Ingreso';
import { Egreso } from '../modelos/Egreso';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ingresos: Ingreso[]= [];
  egresos: Egreso[]= [];





  constructor(private ingresosService: IngresosService, private egresosService: EgresosService) { }

  ngOnInit() {
    this.ingresos= this.ingresosService.ingresos;
    this.egresos= this.egresosService.egresos;
  }

  totalIngreso(){
    let totalPresupuesto: number=0;
    this.ingresos.forEach(ingreso =>{
        totalPresupuesto+= ingreso.valor;
    });
    return totalPresupuesto;
  }

  totalEgreso(){
    let totalPresupuesto: number=0;
    this.egresos.forEach(egreso =>{
        totalPresupuesto+= egreso.valor;
    });
    return totalPresupuesto;
  }

  presupuestoDisponible(){
    return this.totalIngreso() - this.totalEgreso();
  }

  porcentajeTotal(){
    return this.totalEgreso() / this.totalIngreso();
  }
}
