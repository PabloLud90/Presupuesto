import { Component, OnInit } from '@angular/core';
import { IngresosService } from '../services/ingresos.service';
import { EgresosService } from '../services/egresos.service';
import { Ingreso } from '../modelos/Ingreso';
import { Egreso } from '../modelos/Egreso';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ingreso: Ingreso[]= [];
  egreso: Egreso[]= [];
  inputDescripcion: String;
  inputValor: number;
  valorSelect= "ing"

  constructor(private ingresosService: IngresosService, private egresosService: EgresosService) { }

  ngOnInit() {
  }

  crearIngreso(){
    let ingresos1= new Ingreso(this.inputDescripcion, this.inputValor);
    this.ingresosService.crearIngreso(ingresos1);
  }

  crearEgreso(){
    let egresos1= new Egreso(this.inputDescripcion, this.inputValor);
    this.egresosService.crearEgreso(egresos1);
  }

  tipoOperacion(event){
    this.valorSelect= event.target.value;
  }

  agregarValor(){
    if(this.valorSelect === "ing"){
      let ingresos1= new Ingreso(this.inputDescripcion, this.inputValor);
      this.ingresosService.crearIngreso(ingresos1);

    }else{
      let egresos1= new Egreso(this.inputDescripcion, this.inputValor);
      this.egresosService.crearEgreso(egresos1);
    }

  }

  agregar(){
    switch(this.valorSelect){
      case 'ing':
        let ingresos1= new Ingreso(this.inputDescripcion, this.inputValor);
        this.ingresosService.crearIngreso(ingresos1);
        break;
      case 'egr':
        let egresos1= new Egreso(this.inputDescripcion, this.inputValor);
        this.egresosService.crearEgreso(egresos1);
        break;
    }

  }



}
