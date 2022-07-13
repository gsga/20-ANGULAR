import { Component, OnInit, Input } from '@angular/core';
import { ServicioFavoritosService } from '../servicio-favoritos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  public image?: string;
  public Titulo: string = "Curso de Angular con Interpolación";
  /**
   * https://angular.io/api/core/Input
   * Los decoradores @Input() y @Output() son mecanismos para intercambiar datos entre componentes.
   * @Input() se usa para recibir datos. Es decir, el componente tiene la capacidad de recibir
   * los datos, tiene una variable destinada a guardarlos, pero no tiene de entrada el contenido,
   * el valor de la variable. Ese valor es lo que tiene que recibir como input. Ese dato
   * puede venir de una acción del usuario, o bien como resultado de un método que se ejecutó,
   * quizá gatillado por un evento. En todo caso, es algo que el componente espera, que no lo tiene,
   * y que lo recibe desde afuera.
   * La sintaxis más general es:
   * @Input(nombre_optativo_para_usar_en_el_template) nombre_de_la_variable:tipo_de_la_variable
   * En este caso, no estamos dando un nombre para el template, de modo que en el template
   * vamos a usar el mismo nombre de la variable, que en este caso es dataEntrante.
   * :any declara que la variable puede ser de cualquier tipo de datos.
   * En este caso, 
   */
  @Input() dataEntrante: any;

  /**
   * El parámetro servicioFavorito que se pasa al constructor
   * es el modo en que se implementa el patrón de inyección de dependencias.
   * Concretamente, estamos inyectando en la clase CardComponent la dependencia de la
   * clase ServicioFavoritosService. Esa dependencia está disponible para ser inyectada
   * en toda la aplicación.
   * 
   */
  constructor(private servicioFavorito: ServicioFavoritosService) { }

  ngOnInit(): void {

    this.image = "https://photoshop-kopona.com/uploads/posts/2019-05/1559108923_0-2.jpg";
  }

  /**
   * Este método es invocado al clickear el botón de un componente card.
   * Se ha usado event binding e inyección de dependencias.
   * Esta instancia (this) de la clase CardComponent tiene una propiedad
   * servicioFavorito. Esa propiedad no está declarada, como las otras propiedades,
   * sino que ha sido inyectada por medio de la inyección de dependencias, en el
   * constructor. Esta propiedad servicioFavorito es de tipo ServicioFavoritosService,
   * como está dicho en el constructor. Por lo tanto, tiene una propiedad diparadorFavoritos.
   * Esa propiedad es de tipo EventEmitter<any>. Por ser de ese tipo, tiene los métodos de
   * esa clase, que son emit() y subscribe(). En este caso, invocamos emit().
   * El parámetro que toma emit() como argumento es el valor a emitir. En este caso,
   * es un objeto de JavaScript.
   * https://www.w3schools.com/js/js_objects.asp
   * Tiene una propiedad llamada data, y el valor de esa propiedad es this.dataEntrante, que
   * está marcada con el decorador @Input. 
   * 
   */
  agregarAFavoritos() {
    this.servicioFavorito.diparadorFavoritos.emit(
      { data: this.dataEntrante }
    )
  }
}
