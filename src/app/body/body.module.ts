import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { CardComponent } from '../card/card.component';


@NgModule({
  declarations: [BodyComponent, CardComponent], // Asegúrate de incluir CardComponent aquí
  imports: [CommonModule],
  exports: [BodyComponent]
})
export class BodyModule { }
