import { Component, OnInit } from '@angular/core';
import { ServicioFavoritosService } from '../servicio-favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public listaVideos: Array<any> = [];

  /**
   * La clase ServicioFavoritosService está disponible
   * para inyección de dependencias en toda la aplicación. 
   * Este constructor recibe el parámetro servicioFavoritos, que es de tipo
   * ServicioFavoritosService. De este modo se implementa el patrón de
   * inyección de dependencias. La clase FavoritosComponent, que es la clase
   * en la que estamos ahora, va a tener una propiedad llamada servicioFavoritos,
   * que será de tipo ServicioFavoritosService. Esta propiedad no la vamos a encontrar
   * declarada por nosotros, sino que es inyectada por Angular.
   */
  constructor(private servicioFavoritos: ServicioFavoritosService) { }

  /**
   * El método ngOnInit() se ocupa de inicializar esta instancia (this) de la clase
   * FavoritosComponent.
   * Como resultado de la inyección de dependencias, esta instancia tiene una propiedad
   * private, llamada servicioFavoritos, que es de tipo ServicioFavoritosService.
   * Esta última clase tiene una propiedad llamada diparadorFavoritos, que es de tipo
   * EventEmitter<any>. Esta última propiedad, a su vez, tiene dos métodos: emit() y subscribe().
   * La documentación oficial está en
   * https://angular.io/api/core/EventEmitter#subscribe
   * Acá vamos a usar subscribe(). Este método registra (suscribe) handlers para los eventos
   * emitidos por esta instancia. El handler es lo que va como argumento entre los
   * paréntesis ().
   * En este caso, el handler es una expresión funcional, arrow function.
   * https://www.ecma-international.org/publications-and-standards/standards/ecma-262/
   * ECMAScript® 2022 Language Specification, Sección 15.3, página 417
   * 
   * Una función común en Java es la que más conocemos y usamos:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
   * La sintaxis es:
   * function function_name ( formal_parameters) { function_body}
   * El nombre es obligatorio, no optativo. El compilador da un error si se omite.
   * 
   * Una expresión funcional es una expresión antecedida por la palabra function:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
   * La sintaxis es:
   * function ( formal_parameters) { function_body}
   * Una función anónima es una función que no tiene nombre, o 
   * más precisamente, cuyo nombre es un string vacío: "".
   * 
   * La palabra lambda no existe en la documentación. El nombre oficialmente correcto
   * es arrow function. 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
   * 
   */
  ngOnInit(): void {
    this.servicioFavoritos.diparadorFavoritos.subscribe(
      data => { this.listaVideos.push(data) }
    )
  }

}
