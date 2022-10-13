import { Injectable, Output, EventEmitter } from '@angular/core';

/**
 * Indica que esta clase es un proveedor de dependencia, es decir
 * que una instancia de esta clase puede ser inyectada en otra
 * clase, que es el consumidor de dependencia.
 */
@Injectable({
  providedIn: 'root'
})

export class ServicioFavoritosService {

  @Output() diparadorFavoritos: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
