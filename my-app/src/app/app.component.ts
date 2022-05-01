import { Component, OnInit } from '@angular/core';

interface Card {
  titulo: string;
  subtitulo: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  public cardArray: Card[] = [];

  ngOnInit(): void {
    this.cardArray = [
      { titulo: "Mickey Mouse", subtitulo: "Ratón locuaz", image: "../assets/img/cards/mickeymouse.jpg" },
      { titulo: "Road Runner", subtitulo: "Lewis Hamilton", image: "../assets/img/cards/roadrunner.png" },
      { titulo: "Yogi Bear", subtitulo: "Oso libidinoso", image: "../assets/img/cards/yogibear.jpg" },
      { titulo: "Bugs Bunny", subtitulo: "Conejo sabandija", image: "../assets/img/cards/bugsbunny.jpg" }
    ];
  }
}
