import { Component, OnInit } from '@angular/core';
import { ServicioFavoritosService } from '../servicio-favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public listaVideos: Array<any> = [];
  constructor(private servicioFavoritos: ServicioFavoritosService) { }

  ngOnInit(): void {
    this.servicioFavoritos.diparadorFavoritos.subscribe(
      data => { this.listaVideos.push(data) }
    )
  }

}
