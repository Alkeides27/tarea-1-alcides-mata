import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController, AlertController } from '@ionic/angular';

/*
  Página de Contacto — Evaluación 2: Interactividad.
  Migrada de Template-driven a Reactive Forms con validaciones reales,
  contador de caracteres, submit funcional via mailto y canales interactivos.
*/

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: false,
})
export class ContactoPage implements OnInit {
  contactForm!: FormGroup;

  // Regex de email más estricta que Validators.email nativo.
  // La nativa de Angular acepta "a@b" (sin TLD) por cumplir una versión laxa
  // del RFC 5322, pero en práctica no sirve para un formulario de contacto real.
  private emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor(
    private fb: FormBuilder,
    private toastController: ToastController,
    private alertController: AlertController,
  ) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      asunto: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      mensaje: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(500)]],
    });
  }

  // Getters para el contador de caracteres del mensaje.
  // Usamos getters en lugar de suscribirnos a valueChanges porque para un
  // contador visual, el ciclo de detección de cambios de Angular ya lo
  // recalcula automáticamente en cada keystroke sin necesidad de RxJS extra.
  get mensajeLength(): number {
    return this.contactForm?.get('mensaje')?.value?.length ?? 0;
  }

  get contadorClass(): string {
    if (this.mensajeLength >= 500) return 'danger';
    if (this.mensajeLength > 450) return 'warning';
    return 'neutral';
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      // Marco todos los campos como touched para que el usuario vea de un solo
      // golpe todos los errores pendientes, en lugar de descubrirlos uno por uno.
      this.contactForm.markAllAsTouched();
      return;
    }

    const { nombre, email, asunto, mensaje } = this.contactForm.value;

    const cuerpo = `Hola Alcides, soy ${nombre}.%0D%0A%0D%0A${mensaje}%0D%0A%0D%0A` +
                   `Mi correo de contacto: ${email}`;

    const mailto = `mailto:alkeidesantonio@gmail.com?subject=${encodeURIComponent(asunto)}&body=${cuerpo}`;

    const toast = await this.toastController.create({
      message: 'Mensaje preparado correctamente. Se abrirá tu cliente de correo.',
      duration: 2500,
      color: 'success',
      position: 'bottom',
    });
    await toast.present();

    window.location.href = mailto;

    setTimeout(() => this.contactForm.reset(), 500);
  }

  async onLimpiar() {
    const alert = await this.alertController.create({
      header: 'Confirmar acción',
      message: '¿Seguro que querés limpiar el formulario? Se perderán los datos ingresados.',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Limpiar', handler: () => this.contactForm.reset() },
      ],
    });
    await alert.present();
  }

  // Handlers para los canales de contacto.
  abrirEmail() {
    window.location.href = 'mailto:alkeidesantonio@gmail.com';
  }

  llamarTelefono() {
    window.location.href = 'tel:+584121110098';
  }

  abrirUbicacion() {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Maturín,Monagas,Venezuela',
      '_blank',
      'noopener'
    );
  }

  abrirLinkedIn() {
    window.open('https://linkedin.com/in/alcides-mata', '_blank', 'noopener');
  }

  abrirGitHub() {
    window.open('https://github.com/Alkeides27', '_blank', 'noopener');
  }
}
