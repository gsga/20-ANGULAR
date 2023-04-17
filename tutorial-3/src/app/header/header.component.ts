/**
 * El módulo de este componente.
 */
import { Component } from '@angular/core';

/**
 * Un modo simple de darnos cuenta a quién pertenece este
 * módulo es leer el selector.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

/**
 * Este componente lo vamos a usar en el componente raíz.
 * Por eso tenemos que exportar la clase.
 */
export class HeaderComponent {

}
