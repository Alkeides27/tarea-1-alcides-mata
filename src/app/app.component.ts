import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  /*  En lugar de crear los botones directamente en el HTML uno por uno (lo cual sería código estático
      y difícil de mantener), prefiero crear una variable global llamada 'appPages'. 
      Esta variable es un arreglo de objetos. Cada objeto representa un botón del menú y contiene 
      las propiedades exactas que necesito: el título que leerá el usuario, la ruta a la que debe 
      navegar y el icono de Ionicons que hará la interfaz más amigable.
  */

  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Información personal', url: '/folder/Información personal', icon: 'person' },
    { title: 'Contacto', url: '/folder/Contacto', icon: 'call' }
  ];
  constructor() { }
}
