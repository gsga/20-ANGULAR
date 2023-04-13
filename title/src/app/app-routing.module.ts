/**
 * Este es el módulo que se encarga del routing.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * Hay que importar cada uno de los componentes que vamos a listar
 * luego como endpoints. Lo que va entre las llaves {}
 * es el nombre de la clase del componente, y el string
 * que va después de from es el path relativo y el esquema de
 * nombres de los archivos, sin las extensiones.
 * Los nombres de las clases que importamos acá son los mismos
 * que después se van a usar en el array routes.
 */
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';

/**
 * Esta variable es un array en donde estarán guardadas
 * las rutas. Una ruta es una correspondencia entre
 * la URL y un componente.
 * Poner los detalles que usa el módulo de routing.
 * De lo contrario, va a dar un error. 
 * El formato mostrado en este ejemplo no es el único posible.
 */
const routes: Routes = [
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent }
];

/**
 * https://angular.io/api/router/RouterModule#forroot
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/**
 * Esta clase la vamos a usar desde otras
 * partes de la aplicación. Para que esta clase sea
 * visible desde esas otras partes, la exportamos.
 */
export class AppRoutingModule { }
