import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})

export class OneComponent implements OnInit {

  title = 'One';

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
