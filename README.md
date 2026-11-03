# Cacau Cafè · Cafetería en Blanes

Web de **Cacau Cafè**, cafetería especialista en café y productos artesanales en Blanes (Carrer de Tapioles, 21).

Toda la web es **un único recorrido cinematográfico ligado al scroll** (inspirado en el Reel de referencia):
las fotografías y los vídeos son los protagonistas y el texto se reduce a una palabra por capítulo, una frase y los datos útiles.
Dirección creativa, diseño y desarrollo: **DURDUC**.

- Web publicada: https://durducco-source.github.io/cacau-cafe-blanes-web/
- Código: https://github.com/durducco-source/cacau-cafe-blanes-web
- Versión anterior conservada en la etiqueta git `v1-antes-recorrido`.

## El recorrido

| Escena | Movimiento de cámara |
|---|---|
| Inicio | Vídeo de la caja de bollería con avance; «CACAU CAFÈ» se abre; fundido a la terraza, «La hora Cacau» |
| 01 Café | Vídeos verticales (latte art, caramel latte, iced latte) en un marco que crece |
| 02 Obrador | Retroceso desde el croissant de pistacho; deriva a los argentinos de chocolate |
| 03 Brunch | Puerta corredera y travelling por bowls y el Vegetal XL |
| 04 Carta | Favoritos por grupos sobre el vídeo de un desayuno compartido |
| 05 Para llevar | Capas de profundidad sobre el vídeo de la bolsa para llevar |
| 06 Visítanos | La cámara se aleja; cómo llegar, llamar e Instagram |

## Tecnologías

Next.js 16 (App Router, exportación estática) · React 19 · TypeScript · Tailwind CSS 4 · Motion (Framer Motion).

## Ejecutar en local

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # web estática en out/
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run deploy     # compila y publica en GitHub Pages (rama gh-pages)
```

## Cómo editar

Todo el guion está en `src/content/site.ts`: cada escena tiene un `kind` (movimiento de cámara), sus imágenes/vídeos y textos.
Tipos disponibles: `arrival` (llegada), `dive` (picado), `door` (puerta corredera + travelling), `pullback` (retroceso),
`depth` (capas de profundidad), `tilt` (panorámica vertical), `reel` (vídeos verticales), `list` (carta), `strip` (tira con visor) y `finale`.
Colores en `src/app/globals.css` y tipografías en `src/app/layout.tsx`.

```
src/
├── app/              → layout (SEO, fuentes, JSON-LD), página y tema
├── components/
│   ├── cinema.tsx    → primitivas: Scene, Shot (imagen/vídeo con cámara), ChapterWord, Caption, useRange
│   ├── scenes.tsx    → los 10 tipos de escena y el pie
│   ├── Header.tsx    → barra fina, menú a pantalla completa y barra de acción móvil
│   └── Hud.tsx       → capítulo actual y progreso
├── content/          → site.ts (guion y contenido) y types.ts (modelo)
└── lib/              → utilidades (fullRange para animaciones de scroll) y capítulos
```

## Fuentes del contenido

- Instagram @cacau_cafe_blanes: bio («Abrimos todos los días», «Especialistas en café», «Productos artesanales»), textos, fotos y vídeos.
- Fichas públicas: dirección, teléfono y valoración (4,9 · 191 reseñas). La carta va sin precios porque no están publicados.
- El horario detallado sólo está en un destacado de Instagram: conviene añadirlo en `site.ts`.
