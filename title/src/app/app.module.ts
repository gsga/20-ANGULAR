/**
 * Este archivo también es llamado the Angular module
 */
import { NgModule } from '@angular/core';

/**
 * Importamos el servicio Title. Notar que es parte del
 * paquete platform-browser. Esto es así porque la
 * metatag title se aplica a la página HTML en el browser.
 */
import { BrowserModule, Title } from '@angular/platform-browser';

/**
 * Importamos la clase contenida en app-routing.module.
 * Si vamos al archivo app-routing.module.ts, veremos que exporta una clase.
 * Esa clase es la que importamos acá.
 */
import { AppRoutingModule } from './app-routing.module';

/**
 * Importamos cada uno de los otros componentes que vamos a
 * usar en este componente.
 */
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

/**
 * Las declaraciones son para hacer que las directivas 
 * (incluidos los componentes y las tuberías) del módulo actual 
 * estén disponibles para otras directivas en el módulo actual.
 * Los selectores de directivas, componentes o conductos solo 
 * se comparan con el HTML si se declaran o importan.
 */
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  /**
   * Los proveedores son para dar a conocer los servicios y valores 
   * a DI (inyección de dependencia). Se añaden al ámbito raíz y 
   * se inyectan a otros servicios o directivas que los tengan 
   * como dependencia.
   */
  providers: [
    // Register the service
    // Recordar que Title es un servicio, es decir un service provider.
    // Nuestra app es un consumidor de ese servicio.
    // Por eso lo tenemos que registrar.
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
