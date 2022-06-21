/* src\app\app.module.ts
Este archivo también es llamado the root Angular module.
*/
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

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
