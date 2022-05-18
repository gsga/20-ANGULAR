import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre = 'Tutorial 8';
  modificado: boolean = false;
  refreshIntervalId;
  constructor() {
    // El constructor de una clase se ejecuta cada vez que se crea una
    // nueva (new) instancia de esa clase. En este caso, la clase es la aplicación.
    // Más precisamente, es la clase del componente raíz de la aplicación.
    // Se ejecuta al crearse la instancia de la aplicación. En nuestros ejemplos,
    // eso lo hacemos con el comando ng serve.

    // CUIDADO: en algunas entradas de los foros dicen que hay acá
    // un comportamiento controversial: la documentación dice una cosa
    // y el código hace otra.
    // Una solución (work around) que funciona es usar una arrow function
    // y que el cuerpo de esa arrow function sea el que llame a la función
    // que queremos llamar.
    // Yo intenté poner el nombre directamente, y no lo pude hacer funcionar.
    this.refreshIntervalId = setInterval(() => this.modificar(), 3000);
  }

  // Esta es una función. En TypeScript no se pone la palabra function.
  modificar() {
    if (!this.modificado) {
      this.modificado = true;
      this.nombre = this.nombre + " modificado";
    }
    else {
      clearInterval(this.refreshIntervalId);
    }
  }

  suma(a: number, b: number) {
    return a + b;
  }
}
