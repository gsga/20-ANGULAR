import { Component, OnInit } from '@angular/core';

interface Tarjeta {
  caption: string;
  imagen: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  titulo = 'Tutorial 4';
  public tarjetas: Tarjeta[] = [];

  ngOnInit(): void {

    this.tarjetas = [
      { caption: "Patoruzú", imagen: "assets/img/personajes/patoruzu.jpg" },
      { caption: "Chacha", imagen: "assets/img/personajes/chacha.gif" },
      { caption: "Ñancul", imagen: "assets/img/personajes/nancul.jpg" }
    ];
  }
}
