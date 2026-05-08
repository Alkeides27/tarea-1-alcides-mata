import { Component, OnInit } from '@angular/core';

/*
  Este componente maneja la página de Información Personal.
  Decidí estructurarlo de manera que presente mis datos como un
  perfil profesional, claro y ordenado. La lógica de TypeScript
  está lista por si en el futuro los datos provienen de una API,
  aunque por ahora el contenido está renderizado en el template.
*/

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.page.html',
  styleUrls: ['./informacion-personal.page.scss'],
  standalone: false,
})
export class InformacionPersonalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
