import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BodyModule } from './body/body.module'; // Asegúrate de tener la ruta correcta aquí

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BodyModule
  ],
  providers: [],
  bootstrap: [] 
})
export class AppModule { }
