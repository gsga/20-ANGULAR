import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent implements OnInit {
  /**
   * 'bebidaAnterior' es una propiedad de este componente.
   * Es inicializada con el valor "". 
   * Se usa en interpolación en el template de este mismo componente.
   * Pero su valor lo recibe desde otro componente, y por eso es
   * necesario el decorador @Input().
   */
  @Input() bebidaAnterior = "";

  /**
   * 'bebidaAgregada' es una propiedad de este componente.
   * Es inicializada con el valor "". 
   * Recibe su valor de otra variable de este mismo componente.
   * Por eso no necesita el decorador @Input().
   */
  bebidaAgregada = "";

  /**
   * https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component
   * El decorador @Output() permite que los datos fluyan del componente hijo
   * al componente padre.
   * La variable eventoBebidaIngresada está pensada para communicar datos
   * al componente padre. Lo hace emitiendo un evento.
   * Por eso es de tipo EventEmitter.
   * Cuando la variable tenga información que transmitir, emitirá un
   * evento. Ese evento se incorporará a la cola de eventos del sistema.
   * Recibirá el aviso de que este evento ha ocurrido aquel objeto que
   * se haya suscripto a este evento. Bueno, ese objeto es el componente
   * padre, <app-root>
   * 
   * https://angular.io/api/core/EventEmitter
   * Úselo en componentes con la directiva @Output para emitir eventos personalizados 
   * de forma síncrona o asíncrona, y registre handlers para esos eventos 
   * suscribiéndose a una instancia.
   */
  @Output() eventoBebidaAgregada = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Esta función es llamada por evento click() del botón que está en el template de
   * este componente. Cuando clickeamos el botón 'Agregar', se lee el valor que hayamos
   * ingresado en el <input>, que es un string, y se le pasa como argumento en el 
   * llamado a esta función, y así nos llega la bebida que ingresó el usuario.
   * 
   * En el cuerpo de este método, invocamos el método emit() de la variable
   * 'eventoBebidaIngresada', que es tipo EventEmitter<string>. A este método
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
   * Esta función, además, actualiza la variable bebidaAnterior con
   * el valor recibido, de modo que además de agregarse a la lista
   * aparece también en este componente hijo.
   * 
   */
  agregarBebida(value: string) {
    // Recibe su valor de otro componente.
    this.bebidaAnterior = this.bebidaAgregada;
    // Recibe su valor de este mismo componente.
    this.bebidaAgregada = value;
    this.eventoBebidaAgregada.emit(value);
  }
}
