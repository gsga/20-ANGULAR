/**
 * Este archivo pertenece al componente root.
 * Nos damos cuenta porque el selector es app-root.
 */
import { Component } from '@angular/core';

/**
 * Estas líneas son como la definición de una clase,
 * en el sentido de la programación orientada a 
 * objetos.
 * La propiedad selector es el identificador de este
 * componente. Cuando queramos incluir en otro componente
 * una instancia de este componente, usaremos este selector.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * Dijimos antes que cada componente es como una clase.
 * Para poder usar esta clase en otro lugar de la aplicación
 * necesitamos que sea visible fuera de esta precisa carpeta
 * donde está guardada, y donde están estos archivos.
 * Para eso la exportamos.
 */
export class AppComponent {

  /**
   * La variable titulo es una propiedad de esta clase. La vamos
   * a usar en el template de este componente, mediante el
   * mecanismo llamado interpolation binding.
   */
  titulo = 'Tutorial 3';
}
