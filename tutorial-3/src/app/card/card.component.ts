import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  /** Las dos propiedades del componente card se
   * inyectarán en el template de este mismo componente.
   * En el caso de imagen será property bindingn.
   * En el caso de titulo será una interpolación.
   */
  public imagen: string = "";
  public caption: string ="";


  constructor() { }

  ngOnInit(): void {
  }

}
