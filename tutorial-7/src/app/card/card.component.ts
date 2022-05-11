import { Component, OnInit , Input} from '@angular/core';
import { ServicioFavoritosService } from '../servicio-favoritos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image?:string;
  public Titulo:string = "Curso de Angular con Interpolación";
  @Input() dataEntrante:any;
  constructor(private servicioFavorito: ServicioFavoritosService) { }

  ngOnInit(): void {

    this.image = "https://photoshop-kopona.com/uploads/posts/2019-05/1559108923_0-2.jpg";
  }

  AgregarAFavorito()
  {
    this.servicioFavorito.diparadorFavoritos.emit(
      {data: this.dataEntrante}
    )
  }
}
