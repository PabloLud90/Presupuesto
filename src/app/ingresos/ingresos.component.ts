import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../modelos/Ingreso';
import { IngresosService } from '../services/ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingresos: Ingreso[]= [];

  constructor(private ingresosService: IngresosService) { }

  ngOnInit() {
   this.ingresos= this.ingresosService.ingresos;
  }

  eliminarIngreso(ingreso: Ingreso){
    this.ingresosService.eliminarIngreso(ingreso);

  }

}
