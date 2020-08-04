import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { IngresosService } from './services/ingresos.service';
import { EgresosService } from './services/egresos.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { EgresosComponent } from './egresos/egresos.component';
import { IngresosComponent } from './ingresos/ingresos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    EgresosComponent,
    IngresosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    IngresosService,
    EgresosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
