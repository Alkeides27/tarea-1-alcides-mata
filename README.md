# Tarea 1 — Aplicación Ionic con 3 Menús

## Autor

Alcides Mata
Programación III - UNETI
TAREA 1

## Descripción

Aplicación móvil desarrollada con Ionic + Angular como parte de la asignación 1 del curso. La app implementa un menú lateral con tres secciones independientes: Inicio, Información Personal y Contacto. El diseño visual fue refinado con el skill Impeccable, y todo el código está documentado con comentarios propios que explican mis decisiones de implementación.

## Tecnologías utilizadas

- **Framework:** Ionic 8
- **Lenguaje:** TypeScript / Angular
- **Empaquetador móvil:** Capacitor
- **Skill de diseño:** Impeccable
- **Control de versiones:** Git + GitHub

## Estructura del proyecto

```
src/app/
├── inicio/                       # Página de bienvenida
├── informacion-personal/         # Perfil personal con foto, datos académicos e intereses
├── contacto/                     # Canales de contacto y formulario
├── app.component.ts              # Componente raíz con el menú lateral
├── app-routing.module.ts         # Definición de rutas con lazy loading
└── app.module.ts                 # Módulo principal de la app
```

## Páginas implementadas

### 1. Inicio (`/inicio`)
Pantalla de bienvenida con presentación breve y accesos rápidos a las otras secciones.

### 2. Información Personal (`/informacion-personal`)
Perfil del usuario con foto, nombre, rol, biografía, datos académicos e intereses.

### 3. Contacto (`/contacto`)
Lista de canales de contacto (email, teléfono, ubicación, redes) y formulario de mensaje.

## Cómo ejecutar el proyecto

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
ionic serve

# 3. Abrir en el navegador
# http://localhost:8100
```

## Decisiones de arquitectura

- **Lazy loading en todas las rutas:** cada página se carga solo cuando se necesita, mejorando el tiempo inicial.
- **3 páginas independientes en lugar de una página con condicionales:** demuestra capacidad de generar páginas reales en Ionic, facilita mantenimiento y escala mejor.
- **Diseño Impeccable:** el sistema de diseño se aplicó mediante el skill Impeccable para evitar improvisación estética y mantener consistencia visual.

## Evidencias

Las capturas de pantalla del proceso de desarrollo paso a paso están en la carpeta `evidencias/`.

## Repositorio

https://github.com/Alkeides27/tarea-1-alcides-mata
