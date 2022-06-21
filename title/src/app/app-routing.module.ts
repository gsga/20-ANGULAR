/**
 * app-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * Hay que importar cada uno de los componentes que vamos a listar
 * luego como endpoints. Lo que va entre las llaves {}
 * es el nombre de la clase del componente, y el string
 * que va después de from es el path relativo y el esquema de
 * nombres de los archicos, sin las extensiones.
 */
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';

/**
 * Poner los detalles que usa el módulo de routing.
 * De lo contrario, va a dar un error. 
 * El formato mostrado en este ejemplo no es el único posible.
 */
const routes: Routes = [
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
