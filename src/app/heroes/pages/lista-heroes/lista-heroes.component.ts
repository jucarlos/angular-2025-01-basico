import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-heroes',
  standalone: false,
  templateUrl: './lista-heroes.component.html',
  styleUrl: './lista-heroes.component.css'
})
export class ListaHeroesComponent {

  public heroes: string[] =
  ['Capitán América', 'SuperMan', 'Wonder Woman', 'Iron Man', 'Batman'];

  public heroeBorrado: string = '';


  borrarUltimoHeroe(): void {

    this.heroes.pop() ;
    


  }
  

}
