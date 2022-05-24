import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sharing-data-between-components';
  // Esta propiedad está pensada para property binding.
  currentBeverage = "cofee";
  beverages = ['milk', 'tea', 'cofee', 'juice'];

  addBeverage(newBeverage: string) {
    this.beverages.push(newBeverage);
    this.clearInput();
  }

  clearInput() {
    let input = <HTMLInputElement>document.getElementById('beverage-input');
    input.value = '';
  }
}
