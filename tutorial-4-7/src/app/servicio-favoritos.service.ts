/**
 * Esto es parte de la implementación del patrón event binding
 * y se usa para la inyección de dependencias.
 */
import { Injectable, Output, EventEmitter } from '@angular/core';

/**
 * El decorador @Injectable marca a esta clase como disponible para
 * ser provista e inyectada como dependencia.
 * Indica que esta clase es un proveedor de dependencia, es decir
 * que una instancia de esta clase puede ser inyectada en otra
 * clase, que es el consumidor de dependencia.
 * 
 * La documentación oficial está en https://angular.io/api/core/Injectable
 * 
 * Esta sintaxis en particular indica que la dependencia inyectable será
 * provista a nivel de aplicación.
 */
@Injectable({
  providedIn: 'root'
})

export class ServicioFavoritosService {

  /**
   * Documentación en
   * https://desarrolloweb.com/articulos/emision-eventos-output-angular.html
   * https://docs.angular.lat/guide/inputs-outputs
   * https://angular.io/guide/inputs-outputs
   * 
   * El decorador @Output() en un componente hijo (contenido en el componente padre)
   * permite que los datos fluyan desde el hijo al padre.
   * En este caso, la propiedad marcada es diparadorFavoritos, y es como una
   * especie de portal, o puerto (doorway) a través del cual pasan los datos
   * del hijo al padre.
   * El componente hijo usa esta propiedad para disparar un evento. Ese evento
   * le notifica al componente padre que ocurrió un cambio, es decir que hay
   * en el hijo datos que le tienen que llegar al padre.
   * 
   * https://angular.io/api/core/EventEmitter
   * EventEmitter es una clase que se usa para emitir eventos custom sincrónica
   * o asincrónicamente.
   * Notar que en la declaración del tipo de la variable diparadorFavoritos se
   * ha usado la notación genérica EventEmitter<any>.
   * Por el contratio, el constructor EventEmitter() no lleva el
   * operador diamante <>.
   */
  @Output() diparadorFavoritos: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
