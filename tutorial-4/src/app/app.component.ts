import { Component, OnInit } from '@angular/core';

interface Tarjeta {
  /**
   * Propiedades opcionales
   * https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties
   * Una propiedad de un objeto, que podría estar o no presente
   * se indica con un signo de pregunta (?) inmediatamente después
   * del nombre. En este caso, la propiedad image podría estar o
   * no. Si está presente, deberá ser de tipo (:) string.
   * La variable image va a tener asignada una URL, por lo cual
   * corresponde declarar el tipo string.
 */
  image?: string;
  /**
   * En TypeScript, el nombre del tipo string se escribe con minúsculas.
  */
  titulo: string;
  subtitulo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * https://www.tutorialsteacher.com/typescript/data-modifiers
   * Las variables son public por defecto. Una variable public
   * está disponible y puede ser accedida desde cualquier parte.
   * Una variable private solo puede ser accedida desde dentro
   * de la misma clase, en sentido estricto. En particular,
   * el template del mismo componente no es la misma clase,
   * y las variables private de la clase del componente no
   * están accesibles en el template del componente.
   */
  public titulo = 'Tutorial 4';
  public tarjetas: Tarjeta[] = [];

  ngOnInit(): void {

    this.tarjetas = [
      {
        titulo: 'Patoruzú',
        subtitulo: 'El hijo del cacique',
        image: "../assets/img/personajes/patoruzu.jpg"
      },
      {
        titulo: 'Chacha',
        subtitulo: 'La madre de Patoruzú',
        image: "../assets/img/personajes/chacha.gif"
      },
      {
        titulo: 'Ñancul',
        subtitulo: 'Amigo de la familia',
        image: "../assets/img/personajes/nancul.jpg"
      }
    ]

  }
}
