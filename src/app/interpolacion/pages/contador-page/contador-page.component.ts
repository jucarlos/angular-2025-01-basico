import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-page',
  standalone: false,
  templateUrl: './contador-page.component.html',
  styleUrl: './contador-page.component.css'
})
export class ContadorPageComponent {

  public titulo: string  = 'Mi contador - dentro del componente';
  public valor: number  = 25;

  
  incrementar(num: number): void  {

    this.valor = this.valor + num;
    

  }

  reset(): void {
    this.valor = 25;
  }


}
