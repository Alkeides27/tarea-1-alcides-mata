import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/*
  Aquí defino el arreglo de rutas ('Routes'). Esto es fundamental porque actúa como el 
  "mapa" de mi aplicación. Cada vez que el usuario hace clic en el menú, el enrutador de 
  Angular busca aquí a qué componente o módulo debe redirigir la vista.
 */

const routes: Routes = [
  {
    // Cuando la URL está vacía (es decir, cuando el usuario recién abre la app),
    // fuerzo una redirección a la ruta 'inicio' para que no vea una pantalla en blanco.
    path: '',
    redirectTo: 'folder/Inicio',
    pathMatch: 'full'
  },
  {
    // Configuro la carga perezosa (lazy loading) para la página de Inicio.
    // Esto lo hago para optimizar el rendimiento: el código de 'inicio' solo se cargará
    // en la memoria del dispositivo cuando el usuario realmente solicite ver esta página.
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
