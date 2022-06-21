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
   */
  @Input() dataEntrante: any;
  constructor(private servicioFavorito: ServicioFavoritosService) { }

  ngOnInit(): void {

    this.image = "https://photoshop-kopona.com/uploads/posts/2019-05/1559108923_0-2.jpg";
  }

  AgregarAFavorito() {
    this.servicioFavorito.diparadorFavoritos.emit(
      { data: this.dataEntrante }
    )
  }
}
