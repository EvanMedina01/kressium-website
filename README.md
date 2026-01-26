# Kressium Website

Sitio web corporativo de Kressium - Intermediación comercial confiable.

## 🚀 Tecnologías

- **Astro** - Framework web estático moderno
- **TailwindCSS** - Framework CSS utility-first
- **TypeScript** - Type safety

## 📁 Estructura del Proyecto

```
/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── layouts/         # Layouts de página
│   ├── pages/           # Páginas (rutas automáticas)
│   └── styles/          # Estilos globales
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Comandos

```bash
npm install          # Instalar dependencias
npm run dev          # Servidor desarrollo (localhost:4321)
npm run build        # Build producción
npm run preview      # Previsualizar build
```

## 📄 Páginas Incluidas

- **/** - Home con hero, servicios, equipo
- **/nosotros** - Historia, misión, visión, equipo
- **/servicios** - Servicios detallados
- **/compradores** - Página para compradores con formulario
- **/proveedores** - Página para proveedores con formulario
- **/contacto** - Información de contacto y formulario
- **/privacidad** - Aviso de privacidad
- **/terminos** - Términos de uso

## 🎨 Paleta de Colores

- **Navy**: `#0A2540` (Primario)
- **Steel**: `#4A5568` (Secundario)
- Neutros: Blanco, grises

## 🚀 Deployment

### Cloudflare Pages (Recomendado)
- Build command: `npm run build`
- Output directory: `dist`

### Netlify / Vercel
- Auto-detecta configuración de Astro

## ⚙️ Configuración Importante

### 1. Actualizar dominio
En `astro.config.mjs`:
```js
site: 'https://kressium.com'  // Cambiar al dominio real
```

### 2. Implementar formularios
Opciones: Netlify Forms, Formspree, o API serverless

### 3. Agregar logo
Colocar en `/public/logo.svg` y actualizar Header.astro

### 4. Analytics (opcional)
Agregar Google Analytics en BaseLayout.astro

## ⚠️ Importante - Legal

**Los documentos legales son plantillas base.**
Un abogado debe revisar y adaptar:
- Aviso de Privacidad
- Términos de Uso

Según la legislación mexicana aplicable.

## 📞 Contacto

- Email: contacto@kressium.com
- Tel: (221) 254-7254 / (222) 661-1039

## 📚 Documentación

- [Astro Docs](https://docs.astro.build)
- [Tailwind Docs](https://tailwindcss.com/docs)
