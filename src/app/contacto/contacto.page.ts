import { Component, OnInit } from '@angular/core';

/*
  Este componente corresponde a la vista de Contacto.
  Su principal función es presentar las vías de comunicación de
  forma clara y amigable, utilizando una estructura de lista para
  los métodos de contacto directos, y un formulario simple para
  los mensajes. Toda la lógica del formulario es puramente de UI
  para cumplir con la asignación.
*/

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: false,
})
export class ContactoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
