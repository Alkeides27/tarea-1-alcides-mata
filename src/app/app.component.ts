import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  /*
    En lugar de escribir cada botón del menú directamente en el HTML
    (lo cual sería repetitivo y difícil de mantener), creé este arreglo
    de objetos llamado 'appPages'. Cada objeto representa un ítem del
    menú lateral con tres propiedades:
      - title: el texto que ve el usuario
      - url: la ruta a la que navega
      - icon: el icono de Ionicons que se muestra al lado
    Así el HTML usa @for para iterar sobre este arreglo y renderizar
    los botones automáticamente.
  */

  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Información Personal', url: '/informacion-personal', icon: 'person' },
    { title: 'Contacto', url: '/contacto', icon: 'call' }
  ];

  constructor() { }
}
