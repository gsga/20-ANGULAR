import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * Importamos las clases de todos los componentes que
 * luego vamos a usar.
 */
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
