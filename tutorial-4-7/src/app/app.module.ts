import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * Importamos las clases de todos los componentes que
 * luego vamos a usar.
 */
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

/**
 * https://angular.io/api/core/NgModule
 * Decorador que marca una clase como NgModule y proporciona 
 * metadatos de configuración.
 */
@NgModule({
  /**
   * declarations? El conjunto de componentes, directivas 
   * y conductos (declarables) que pertenecen a este módulo.
   */
  declarations: [
    AppComponent,
    CardComponent,
    FavoritosComponent
  ],
  /**
   * imports? El conjunto de NgModules cuyos declarables 
   * exportados están disponibles para las plantillas en este módulo.
   */
  imports: [
    BrowserModule
  ],
  /**
   * providers? El conjunto de objetos inyectables que están disponibles 
   * en el inyector de este módulo.
   */
  providers: [],
  /**
   * bootstrap? El conjunto de componentes que se arrancan cuando se arranca este módulo.
   */
  bootstrap: [AppComponent]
})

export class AppModule { }
