import { Component, OnInit } from '@angular/core';

/**
 * Hay que importar Title, que es el servicio que se quiere usar.
 * La documentación oficial está en https://angular.io/api/platform-browser/Title
 * En este contexto, title no es ninguno de los headers de nivel 1 que pueda
 * haber en el body del documento html, sino la leyenda que aparece en la solapa
 * del browser correspondiente a nuestra aplicación.
 * Es un servicio que se puede utilizar para obtener y establecer el 
 * título del documento HTML actual. Ese documento es el que está mostrado
 * en este momento en el browser, en la solapa activa, es decir donde está
 * corriendo el script de Angular.
 */
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Home';

  /**
   * Este constructor es el modo de inyectar una dependencia en esta clase.
   * https://angular.io/guide/dependency-injection#injecting-services
   * Este mecanismo es el modo en que Angular implementa el
   *  patrón de inyección de dependencias (DI pattern).
   */
  constructor(private titleService: Title) {
  }

  /*
    El constructor inyectó la dependencia. Esto significa, entre otras cosas,
    que nuestra clase AppComponent tiene ("mágicamente") entre sus atributos
    un objeto llamado titleService, que es exactamente lo que su nombre indica.
    Este servicio expone solo dos métodos. Uno de ellos es el que se
    usa acá para setear el título del documento html actual.
  */
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
