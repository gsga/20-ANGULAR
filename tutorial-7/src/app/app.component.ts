import { Component, OnInit } from '@angular/core';

interface Tarjeta {
  /**
   * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
   * En TypeScript, el nombre del tipo string se escribe con minúsculas.
  */
  titulo: string;
  subtitulo: string;
  /**
   * https://www.typescriptlang.org/docs/handbook/2/objects.html
   * Una propiedad de un objeto, que podría estar o no presente
   * se indica con un signo de pregunta (?) inmediatamente después
   * del nombre. En este caso, la propiedad image podría estar o
   * no. Si está presente, deberá ser de tipo (:) string.
   * La variable image va a tener asignada una URL, por lo cual
   * corresponde declarar el tipo string.
 */
  image?: string;
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
  title = 'Mi primera app Angular';
  public arregloTarjetas: Tarjeta[] = [];

  ngOnInit(): void {

    this.arregloTarjetas = [
      {
        titulo: 'Video 1', subtitulo: 'Subtítulo Video 1',
        image: "https://i.ytimg.com/vi/PSD5pFi6bx4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRXrJxTLALTsBas1djapMjtW0lQg"
      },
      {
        titulo: 'Video 2', subtitulo: 'Subtítulo Video 2',
        image: "https://i.ytimg.com/vi/rOsd3OI9dOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdMDLcELCLzlSzVoELr-QZ41mL8g"
      },
      {
        titulo: 'Video 3', subtitulo: 'Subtítulo Video 3',
        image: "https://i.ytimg.com/vi/lasGrvRYBWg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgh8fipV-k2f4xjEEPpvvtiWHwjA"
      },
      {
        titulo: 'Video 1', subtitulo: 'Subtítulo Video 1',
        image: "https://i.ytimg.com/vi/PSD5pFi6bx4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRXrJxTLALTsBas1djapMjtW0lQg"
      },
      {
        titulo: 'Video 2', subtitulo: 'Subtítulo Video 2',
        image: "https://i.ytimg.com/vi/rOsd3OI9dOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdMDLcELCLzlSzVoELr-QZ41mL8g"
      },
      {
        titulo: 'Video 3', subtitulo: 'Subtítulo Video 3',
        image: "https://i.ytimg.com/vi/lasGrvRYBWg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgh8fipV-k2f4xjEEPpvvtiWHwjA"
      },
      {
        titulo: 'Video 1', subtitulo: 'Subtítulo Video 1',
        image: "https://i.ytimg.com/vi/PSD5pFi6bx4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRXrJxTLALTsBas1djapMjtW0lQg"
      },
      {
        titulo: 'Video 2', subtitulo: 'Subtítulo Video 2',
        image: "https://i.ytimg.com/vi/rOsd3OI9dOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdMDLcELCLzlSzVoELr-QZ41mL8g"
      },
      {
        titulo: 'Video 3', subtitulo: 'Subtítulo Video 3',
        image: "https://i.ytimg.com/vi/lasGrvRYBWg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgh8fipV-k2f4xjEEPpvvtiWHwjA"
      },
    ]
  }
}
