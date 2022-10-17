import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.scss']
})
export class BeveragesComponent implements OnInit {
  // El decorador @Input lo vamos a usar para enviar datos del hijo al padre.
  // Hay que tener en cuenta que este es solo uno de los modos en que se
  // puede usar este decorador.
  @Input() previousBeverage = "tea";
  // Acá usamos el decorador @Input para transmitir datos del padre al hijo,
  // por medio de property binding. Notar que en este componente, la propiedad
  // currentBeverage tiene asignada una cadena vacía.
  @Input() currentBeverage = "";
  @Output() newBeverageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewBeverage(value: string) {
    this.newBeverageEvent.emit(value);
  }
}
