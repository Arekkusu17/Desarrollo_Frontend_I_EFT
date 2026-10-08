# PlayVerse Store

Evaluacion Final Transversal de Desarrollo Frontend I. El proyecto implementa una tienda online de videojuegos con React, Bootstrap 5, filtrado por categoria, administracion del catalogo y persistencia con localStorage.

## Descripcion

PlayVerse Store presenta un catalogo de videojuegos organizado en tarjetas con imagen, nombre, categoria, precio y descripcion. La interfaz permite filtrar por categoria, agregar nuevos videojuegos, eliminar registros existentes y mantener los cambios despues de recargar la pagina gracias a localStorage.

## Tecnologias utilizadas

- React
- Vite
- Bootstrap 5
- CSS3
- JavaScript
- localStorage
- GitHub Pages

## Funcionalidades principales

- Componentes funcionales separados por responsabilidad.
- Catalogo inicial de videojuegos cargado desde un modulo local.
- Filtro por categoria mediante estado de React.
- Tarjetas dinamicas para mostrar videojuegos.
- Formulario para agregar videojuegos al catalogo.
- Eliminacion de videojuegos desde cada tarjeta.
- Persistencia de cambios con localStorage.
- Restauracion del catalogo inicial.
- Formulario de contacto con validacion de nombre, email y mensaje.
- Diseno responsivo con Bootstrap 5 y CSS personalizado.
- Rutas de assets compatibles con despliegue en GitHub Pages.

## Estructura del proyecto

```text
Desarrollo_Frontend_I_EFT/
├── public/
│   └── assets/
│       └── games/
├── screenshots/
├── src/
│   ├── components/
│   ├── data/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Como ejecutar el proyecto

Instala dependencias:

```bash
npm install
```

Ejecuta el servidor local:

```bash
npm run dev
```

Genera una version de produccion:

```bash
npm run build
```

## Flujo de ramas

- `main`: version estable del proyecto.
- `develop`: integracion de funcionalidades.
- `feature/...`: ramas por implementacion.

## Publicacion

El proyecto esta preparado para GitHub Pages con:

- `base: '/Desarrollo_Frontend_I_EFT/'` en `vite.config.js`
- script `deploy` con `gh-pages -d dist`

Para publicar:

```bash
npm run build
npm run deploy
```

Repositorio GitHub:

```text
https://github.com/Arekkusu17/Desarrollo_Frontend_I_EFT
```

Sitio publicado:

```text
https://arekkusu17.github.io/Desarrollo_Frontend_I_EFT/
```
