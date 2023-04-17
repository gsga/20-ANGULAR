/**
 * Módulo de la aplicación. Notar que no es el módulo
 * del componente raíz. Nos damos cuenta porque no
 * declara ningún selector. Solo los usa. No son propios,
 * son ajenos.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * Importamos cada uno de los otros componentes que vamos a
 * usar en este componente.
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({

  /**
   * Las declaraciones son para hacer que las directivas 
   * (incluidos los componentes y las tuberías) del módulo actual 
   * estén disponibles para otras directivas en el módulo actual.
   * Los selectores de directivas, componentes o conductos solo 
   * se comparan con el HTML si se declaran o importan.
   */
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
