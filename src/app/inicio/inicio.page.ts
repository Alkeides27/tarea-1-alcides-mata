import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/*
  Este componente controla la página de Inicio de mi aplicación.
  Es la primera vista que el usuario ve cuando abre la app, así que
  decidí mantenerla simple y centrada en presentar quién soy.
  La lógica aquí es mínima porque el contenido es estático; solo
  manejo la navegación a las otras páginas mediante el Router.
*/

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {

  // Aquí inyecto el Router de Angular para poder programar la navegación
  // desde los botones de la vista hacia las otras páginas.
  constructor(private router: Router) { }

  ngOnInit() {
  }

  /*
    Este método centraliza la navegación. En lugar de usar routerLink en el HTML,
    decidí hacerlo mediante un método en el controlador para tener más control
    sobre posibles lógicas futuras antes de navegar.
  */
  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }

}
