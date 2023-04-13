import { Component, OnInit } from '@angular/core';

/**
 * Necesitamos importar el servicio Title, porque vamos a usar
 * el método setTitle() dentro del método ngOnInit().
 */
import { Title } from '@angular/platform-browser';

/**
 * Esto es simplemente la información de este componente:
 * el selector y la localización de los archivos.
 */
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})

/**
 * La clase del componente. 
 * La línea que está comentada la puse simplemente como una prueba
 * de que implementar la interfaz OnInit no es obligatorio, 
 * sino optativo.
 */
export class OneComponent implements OnInit {
//export class OneComponent {

  title = 'One';

  /**
   * El constructor inyecta la dependencia.
   */
  constructor(private titleService: Title) {
  }

  ngOnInit() {
    /**
     * Invoca el servicio Title para cambiar el título de la solapa
     * del browser en la que estamos mostrando la aplicación.
     * El atributo title es una de las metatags de la sección head
     * del documento html, y por lo tanto está fuera del alcance normal
     * de TypeScript, que se ocupa del body. Por eso se necesita un
     * servicio especial.
     */
    this.titleService.setTitle(this.title);
  }

}
