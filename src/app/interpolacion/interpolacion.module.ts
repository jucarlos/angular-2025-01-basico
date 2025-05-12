import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorPageComponent } from './pages/contador-page/contador-page.component';

@NgModule({
  declarations: [
    ContadorPageComponent,
  ],
  exports: [ ContadorPageComponent ],
  imports: [
    CommonModule
  ]
})
export class InterpolacionModule { }
