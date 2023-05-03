import { Component, OnInit } from '@angular/core';
/**
 * Esta interfaz la usamos más abajo, cuando declaramos
 * la variable tarjetas, que es una propiedad de la clase
 * de este componente.
 */
interface Tarjeta {
  /**
   * Propiedades opcionales
   * https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties
   * Una propiedad de un objeto, que podría estar o no presente
   * se indica con un signo de pregunta (?) inmediatamente después
   * del nombre. En este caso, la propiedad image podría estar o
   * no. Si está presente, deberá ser de tipo (:) string.
   * 
   * La variable image va a tener asignada una URL, por lo cual
   * corresponde declarar el tipo string.
   * En TypeScript, el nombre del tipo string se escribe con minúsculas.
  */
  image?: string;
  /**
   * Notar que la propiedad titulo que estamos declarando en esta línea
   * es de la interfaz Tarjeta. No confundir con la propiedad del
   * mismo nombre, pero del componente raíz.
   * 
   * Notar que estas dos propiedades de los objetos que implementan
   * la interfaz Terjeta aparecen renderizados con distinto formato.
   * El título está en bold, y el subtítulo no, además de tener un tamaño
   * de fuente más chico. En la hoja de estilo
   * de este componente no hay ninguna clase que se les aplique. Por
   * lo tanto, esas clases tienen que estar en el siguiente lugar más lógico,
   * que es la hoja de estilo del componente Card.
   * 
   * Notar también que esta interfaz tiene propiedades con los mismos
   * nombres y tipos de el componente Card. Pero son cosas distintas,
   * son objetos de distinto tipo, y cumplen funciones diferentes en la
   * aplicación.
  */
  titulo: string;
  subtitulo: string;
}

/**
 * https://angular.io/api/core/Component
 * El decorador @Component marca una clase como un componente Angular 
 * y proporciona metadatos de configuración que determinan cómo se 
 * debe procesar, crear instancias y usar el componente en 
 * tiempo de ejecución.
 */
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
   * 
   * Notar que la propiedad titulo que estamos declarando en esta línea
   * es del componente raíz. No confundir con la propiedad del
   * mismo nombre, pero de la interfaz Tarjeta.
   * Esta propiedad será renderizada en el template del componente,
   * porque está incluida en una interpolación.
  */
  public titulo = 'Tutorial 4';

  /**
   * La propiedad tarjetas está declarada como un array de tipo Tarjeta.
   * Tarjeta es la interfaz que declaramos algunas líneas más arriba.
   * Sabemos que se trata de un array porque están los corchetes [].
   */
  public tarjetas: Tarjeta[] = [];

  /**
   * La clase de este componente implementa la interfaz OnInit.
   * Por lo tanto, necesita implementar el método ngOnInit().
   * Este método se ejecuta después de que el constructor de esta clase
   * ha terminado de instanciar el componente. Este es el lugar
   * en el que se realizan aquellas acciones de inicialización que
   * requieren que el componente ya esté instanciado.
   */
  ngOnInit(): void {

    /**
     * Esta es la colección que luego recorreremos con la directiva
     * *ngFor, para ir creando compoentes cards, a los cuales les
     * vamos a asignar los datos que iremos tomando de los ítems
     * de esta colección. Por eso aquí y ahora le estamos cargando
     * a la colección los valores correspondientes, para que luego
     * los encontremos cuando recorramos la colección.
     * 
     * Notar que los ítems de esta colección tienen las mismas propiedades
     * que la interfaz Tarjeta, pero son dos objetos independientes y
     * diferentes, cumplen funciones distintas en la aplicación.
     * En particular, esta colección lo único que hace es tener
     * almacenados los datos que vamos a necesitar luego, a la hora
     * de crear los componentes Card.
     */
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
