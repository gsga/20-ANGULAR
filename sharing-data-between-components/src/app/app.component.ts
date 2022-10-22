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
   * 
   */
  elementClicked = 'No hay una bebida seleccionada';

  // Esta propiedad está pensada para property binding.
  currentBeverage = "cofee";

  /**
   * Array de bebidas para la lista.
   */
  beverages = ['Café', 'Jugo', 'Leche', 'Mate', 'Té'];

  /**
   * Handler
   */
  addBeverage(newBeverage: string) {
    this.beverages.push(newBeverage);
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
    this.elementClicked = 'Bebida seleccionada: ' + e.target.innerHTML;
  }

}
