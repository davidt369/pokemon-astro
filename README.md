# Curso Astro

Este es un proyecto de Astro que incluye Tailwind CSS, Solid.js y otros componentes útiles para desarrollo web moderno.

## 🚀 Estructura del Proyecto

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── icons/
│   ├── interfaces/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Tecnologías Utilizadas

- [Astro](https://astro.build/) - Framework web
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Solid.js](https://www.solidjs.com/) - Biblioteca UI
- [Astro Icon](https://github.com/natemoo-re/astro-icon) - Manejo de iconos

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`           | Instala las dependencias                         |
| `pnpm run dev`           | Inicia servidor de desarrollo en `localhost:4321`|
| `pnpm run build`         | Construye el sitio para producción en `./dist/`  |
| `pnpm run preview`       | Vista previa de la construcción localmente       |
| `pnpm run astro ...`     | Ejecuta comandos CLI como `astro add`, `astro check` |

## 📦 Dependencias Principales

```json
{
  "@astrojs/solid-js": "^5.0.1",
  "@astrojs/tailwind": "^5.1.4",
  "astro": "^5.1.1",
  "astro-icon": "^1.1.4",
  "solid-js": "^1.9.3",
  "tailwindcss": "^3.4.17"
}
```

## 👀 ¿Quieres saber más?

- [Documentación de Astro](https://docs.astro.build)
- [Discord de Astro](https://astro.build/chat)
