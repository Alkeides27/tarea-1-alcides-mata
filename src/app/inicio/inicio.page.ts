import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/*
  Página de Inicio — Evaluación 2: Interactividad.
  Agrega saludo dinámico según hora del día, contador de visitas con
  localStorage y navegación rápida a las otras secciones.
*/

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {
  saludo: string = '';
  visitas: number = 0;

  // Aquí inyecto el Router de Angular para poder programar la navegación
  // desde los botones de la vista hacia las otras páginas.
  constructor(private router: Router) {}

  ngOnInit() {
    this.calcularSaludo();
    this.actualizarVisitas();
  }

  private calcularSaludo() {
    const hora = new Date().getHours();
    if (hora >= 5 && hora < 12) this.saludo = 'Buenos días';
    else if (hora >= 12 && hora < 19) this.saludo = 'Buenas tardes';
    else this.saludo = 'Buenas noches';
  }

  private actualizarVisitas() {
    // PRD-AMBIGUITY: Se usan las iniciales 'am' (Alcides Mata) para la clave
    // de localStorage, evitando colisiones con otras instancias del proyecto.
    const previas = parseInt(localStorage.getItem('am_visitas') ?? '0', 10);
    this.visitas = previas + 1;
    localStorage.setItem('am_visitas', this.visitas.toString());
  }

  /*
    Este método centraliza la navegación. En lugar de usar routerLink en el HTML,
    decidí hacerlo mediante un método en el controlador para tener más control
    sobre posibles lógicas futuras antes de navegar.
  */
  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }

  irAPerfil() {
    this.router.navigate(['/informacion-personal']);
  }

  irAContacto() {
    this.router.navigate(['/contacto']);
  }
}
