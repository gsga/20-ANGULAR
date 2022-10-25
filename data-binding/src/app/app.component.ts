import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * Variables pensadas para usarse en interpolación.
   */
  heading1 = 'Compartir datos entre componentes';
  heading2 = 'Este es el componente padre';
  clickearUna = 'Seleccionar una bebida de la lista';

  /**
   * Esta variable está pensada para interpolación.
   * Recibe un valor inicial, cuando arranca la aplicación.
   * Cuando el usuario selecciona una bebida de la lista,
   * pasa a tener ese valor.
   */
  bebidaSeleccionada = 'No hay una bebida seleccionada';

  // Esta propiedad está pensada para property binding.
  bebidaAnterior = "";

  /**
   * Array de bebidas para la lista.
   */
  bebidas = ['Café', 'Jugo', 'Leche', 'Mate', 'Té'];

  /**
   * Handler de eventoBebidaAgregada.
   */
  agregarBebida(bebida: string) {
    this.bebidas.push(bebida);
    this.clearInput();
  }

  clearInput() {
    let input = <HTMLInputElement>document.getElementById('beverage-input');
    input.value = '';
  }

  /**
   * Handler del evento click() de la ul que está en el template de este
   * componente.
   */
  onClick(e: any) {
    this.bebidaSeleccionada = 'Bebida seleccionada: ' + e.target.innerHTML;
  }
}
