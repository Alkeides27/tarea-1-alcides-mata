import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/*
  Aquí defino el arreglo de rutas que actúa como el mapa de navegación
  de toda mi aplicación. Cada vez que el usuario hace clic en un ítem
  del menú lateral, el enrutador de Angular consulta este arreglo para
  decidir qué módulo de página debe cargar.

  Decidí usar carga perezosa (lazy loading) en cada ruta porque eso
  permite que el código de cada página solo se descargue cuando el
  usuario la solicita, mejorando el tiempo inicial de carga de la app.
*/

const routes: Routes = [
  {
    // Cuando la URL está vacía (la app recién abre), redirijo a 'inicio'
    // para que el usuario nunca vea una pantalla en blanco.
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    // Ruta de la página de Inicio. Cargo el módulo solo cuando se necesita.
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    // Ruta de la página de Información Personal.
    path: 'informacion-personal',
    loadChildren: () => import('./informacion-personal/informacion-personal.module').then(m => m.InformacionPersonalPageModule)
  },
  {
    // Ruta de la página de Contacto.
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
