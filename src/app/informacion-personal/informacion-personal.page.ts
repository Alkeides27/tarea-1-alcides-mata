import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

/*
  Página de Información Personal — Evaluación 2: Interactividad.
  Agrega chips de intereses interactivas con descripciones en toast,
  y secciones expandibles para las tarjetas de contenido.
*/

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.page.html',
  styleUrls: ['./informacion-personal.page.scss'],
  standalone: false,
})
export class InformacionPersonalPage implements OnInit {

  // Diccionario de descripciones para los intereses/chips de la página.
  // Generadas a partir de los items reales del HTML: Inteligencia Artificial,
  // Desarrollo Web, Ingeniería de Software.
  itemDescriptions: Record<string, string> = {
    'Inteligencia Artificial': 'Rama de la computación que simula inteligencia humana para resolver problemas.',
    'Desarrollo Web': 'Creación de aplicaciones y sitios web modernos, responsivos y de alto rendimiento.',
    'Ingeniería de Software': 'Disciplina que aplica principios de ingeniería al diseño y desarrollo de software.',
  };

  // PRD-AMBIGUITY: La página no tiene proyectos expandibles explícitos, pero tiene
  // tres tarjetas (Sobre mí, Datos Académicos, Intereses). Se aplica el patrón Set<number>
  // para expandir/colapsar las tarjetas al hacer click, proporcionando interactividad real.
  expandedCards = new Set<number>();

  constructor(private toastController: ToastController) {}

  ngOnInit() {
    // La primera tarjeta (Sobre mí, índice 0) empieza expandida por defecto.
    this.expandedCards.add(0);
  }

  async mostrarDescripcion(item: string) {
    const toast = await this.toastController.create({
      message: this.itemDescriptions[item] ?? 'Sin descripción disponible.',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }

  toggleCard(index: number) {
    if (this.expandedCards.has(index)) {
      this.expandedCards.delete(index);
    } else {
      this.expandedCards.add(index);
    }
  }

  isExpanded(index: number): boolean {
    return this.expandedCards.has(index);
  }
}
