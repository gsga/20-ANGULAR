import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.scss']
})
export class BeveragesComponent implements OnInit {
  /**
   * Para empezar, previousBeverage es simplemente una propiedad de este 
   * componente, que es inicializada con el valor "tea". Con esto es
   * suficiente para usarla en template de este mismo componente.
   * El decorador @Input lo vamos a usar para enviar datos del padre al hijo.
   * @Input() previousBeverage = "tea";
   * 
   */

  previousBeverage = "tea";
  /**
   * currentBeverage es otra propiedad de este componente. Inicialmente le
   * asignamos una strin vacía. 
   * Pero a esta propiedad le agregamos el decorador @Input().
   * Acá usamos el decorador @Input() para transmitir datos del padre al hijo,
   * por medio de property binding. Notar que en este componente, la propiedad
   * currentBeverage tiene asignada una cadena vacía.
   */
  @Input() currentBeverage = "";

  /**
   * https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component
   * El decorador @Output() permite que los datos fluyan del componente hijo
   * al componente padre.
   * La variable newBeverageEvent está pensada para communicar datos
   * al componente padre. Lo hace emitiendo un evento.
   * Por eso es de tipo EventEmitter.
   * Cuando la variable tenga información que transmitir, emitirá un
   * evento. Ese evento se incorporará a la cola de eventos del sistema.
   * Recibirá el aviso de que este evento ha ocurrido aquel objeto que
   * se haya suscripto a este evento. Bueno, ese objeto es el componente
   * padre, <app-root>
   */
  @Output() newBeverageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Esta función es llamada por evento click() del botón que está en el template de
   * este componente. Cuando clickeamos el botón Add, se lee el valor que hayamos
   * ingresado en el <input>, que es un string, y se le pasa como argumento en el 
   * llamado a esta función, y así nos llega la bebida que ingresó el usuario.
   * 
   * En el cuerpo de este método, invocamos el método emit() de la variable
   * newBeverageEvent, que es tipo EventEmitter<string>. A este método
   * le pasamos como argumento el string recibido. De modo que este nuevo
   * evento que estamos emitiendo, lleva como contenido la nueva bebida que
   * el usuario ingresó.
   * 
   * El evento emitido es incorporado a una cola de eventos. 
   * Esa cola es la misma para todo el sistema, y tiene todos los eventos. 
   * Pero los eventos que están en la cola son invisibles por default.
   * Es decir, si un objeto quiere enterarse de que ocurrió un determinado 
   * evento, necesita anotarse para que le avisen. Esto se llama suscribirse. 
   * Si me suscribo a un evento, la cola me avisa cuando llega. 
   * Si no me suscribo, simplemente no me voy a enterar, por muchos que lleguen.
   * 
   * Esta función, además, actualiza la variable previousBeverage con
   * el valor recibido, de modo que además de agregarse a la lista
   * aparece también en este componente hijo.
   * 
   */
  addNewBeverage(value: string) {
    this.previousBeverage = value;
    this.newBeverageEvent.emit(value);
  }
}
