/**
 * Este es el servicio que usan todos los interesados para comunicarse
 * entre sí. Hay un componente que emite un evento. Hay otro componente
 * que está suscripto a ese evento. Pero acá no nos metemos con eso.
 * Solo hablamos del servicio, y nada más que del servicio. No nos
 * interesa quién lo va a usar, ni para qué.
 * 
 * Esto es parte de la implementación del patrón event binding
 * y se usa para la inyección de dependencias.
 * 
 * -  Inyectable es un decorador que marca una clase como inyectable 
 * y permite inyectarla como dependencia en otros componentes, servicios o módulos.
 * No declara ni propiedades ni métodos. No es una interfaz.
 * 
 * -  Output es un decorador que permite que un componente o directiva emita eventos, 
 * que pueden ser escuchados y manejados por otros componentes. 
 * 
 * -  EventEmitter es una clase que se puede usar para crear una instancia 
 * de emisor de eventos para un tipo específico de evento. Proporciona un 
 * método emit() para emitir un evento y un método subscribe() para escuchar 
 * los eventos emitidos. 
 * 
 * Juntos, estos símbolos se usan comúnmente para crear servicios o componentes 
 * que pueden emitir eventos y ser inyectados como dependencias en otras partes 
 * de una aplicación Angular. Por ejemplo, podría usar estos símbolos para crear 
 * un servicio que emita eventos cuando se produzcan ciertas acciones en su 
 * aplicación, o un componente que emita eventos cuando un usuario interactúe con él.
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
/**
 * Esta es la clase que se va a inyectar.
 */
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
   * en el hijo datos que le tienen que llegar al padre. Para generar el evento
   * el componente hijo usa EventEmitter.
   * 
   * https://angular.io/api/core/EventEmitter
   * EventEmitter es una clase que se usa para emitir eventos custom sincrónica
   * o asincrónicamente.
   * Notar que en la declaración del tipo de la variable diparadorFavoritos se
   * ha usado la notación genérica EventEmitter<any>.
   * Por el contrario, el constructor EventEmitter() no lleva el
   * operador diamante <>.
   */
  @Output() diparadorFavoritos: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
