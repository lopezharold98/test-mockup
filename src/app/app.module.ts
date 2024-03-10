import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BodyModule } from './body/body.module'; // Asegúrate de tener la ruta correcta aquí

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BodyModule // Importa el módulo que contiene BodyComponent
  ],
  providers: [],
  bootstrap: [] // Elimina AppComponent del array bootstrap
})
export class AppModule { }
