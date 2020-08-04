import { Component, OnInit } from '@angular/core';
import { Egreso } from '../modelos/Egreso';
import { EgresosService } from '../services/egresos.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos: Egreso[]= [];

  constructor(private egresosSevice: EgresosService) { }

  ngOnInit() {
    this.egresos= this.egresosSevice.egresos;
  }

  eliminarEgreso(egreso: Egreso){
    this.egresosSevice.eliminarEgreso(egreso); 

  }



}
