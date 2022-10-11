import { Component, OnInit, Input } from '@angular/core';
import { ServicioFavoritosService } from '../servicio-favoritos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  /** El signo de pregunta significa que la variable image podría eventualmente
   * no estar presente. En este caso no tendríamos un error.
   * Si está presente, debe ser de tipo string.
   */
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
   * En este caso, no hay nada entre los paréntesis después de @Input, o sea que no estamos 
   * dando un nombre para el template, de modo que en el template
   * vamos a usar el mismo nombre de la variable, que en este caso es dataEntrante.
   * :any declara que la variable puede ser de cualquier tipo de datos.
   * 
   * Resumiendo todo lo anterior:
   * 
   * dataEntrante es una propiedad de esta clase, que es CardComponent.
   * Esta propiedad admite datos de cualquier (any) tipo.
   * Pero no los tiene de entrada, sino que espera recibirlos (@Input).
   * Esos datos, el componente los recibe cuando el componente principal
   * de la aplicación usa la directiva *ngFor para recorrer el array de
   * datos. Angular toma cada uno de esos componentes del array, y lo
   * pone a disposición del componente Card, inyectándolo en la variable
   * dataEntrante.
   */
  @Input() dataEntrante: any;

  constructor(private servicioFavorito: ServicioFavoritosService) { }

  ngOnInit(): void {
  }

  AgregarAFavorito() {
    this.servicioFavorito.diparadorFavoritos.emit(
      { data: this.dataEntrante }
    )
  }
}
