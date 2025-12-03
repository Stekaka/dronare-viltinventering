# Viltinventering med Drönare - Interaktiv Presentation

En modern, interaktiv presentation om viltinventering med drönare, byggd med Next.js, TypeScript och Framer Motion.

## Funktioner

- **Scroll-baserade animationer**: Smooth scroll med fade-in/fade-out effekter
- **Klickbaserade interaktiva moment**: Expandable cards för fördjupning av metodik
- **Interaktiva kartor**: Leaflet-baserade kartor med markers och popups
- **Data-visualiseringar**: Charts och grafer med Recharts
- **Video-spelare**: Inbyggd video-spelare för demonstrationsmaterial
- **Progress indicator**: Visuell indikator för scroll-framsteg
- **Responsiv design**: Fungerar på alla enheter

## Teknisk Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** - Animationer
- **React Player** - Video-spelare
- **React Leaflet** - Interaktiva kartor
- **Recharts** - Data-visualiseringar

## Installation

```bash
npm install
```

## Utveckling

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Bygga för produktion

```bash
npm run build
npm start
```

## Projektstruktur

```
app/
├── components/
│   ├── sections/       # Huvudsektioner
│   ├── ui/             # Återanvändbara UI-komponenter
│   └── navigation/     # Navigationskomponenter
├── lib/                # Utilities och helpers
└── page.tsx            # Huvudsida
```

## Anpassning

### Lägga till innehåll

- Redigera sektionskomponenterna i `app/components/sections/`
- Uppdatera data i `Results.tsx` för att visa dina faktiska resultat
- Lägg till bilder i `public/images/` och referera till dem i komponenterna

### Ändra färger och styling

- Tailwind CSS används för all styling
- Anpassa färger genom att ändra Tailwind-klasser i komponenterna
- Globala stilar finns i `app/globals.css`

### Lägga till video

- Placera videofiler i `public/videos/` eller använd externa URL:er
- Uppdatera `VideoPlayer` komponenten med rätt URL

## Licens

Privat projekt för Drönarkompaniet.
# Deployment ready
