# Analytics & Tracking

Denna presentation använder Vercel Analytics och Speed Insights för att spåra användning och prestanda.

## Spårade Events

### Automatiska Events

1. **Page Views** - Spåras automatiskt av Vercel Analytics
2. **Slide Views** - Spåras när användare navigerar mellan slides
   - Event: `slide_view`
   - Properties:
     - `slide_number`: Nummer på slide (1-9)
     - `slide_name`: Namn på slide (Hero, About, Thermal, etc.)

3. **Fullscreen** - Spåras när användare aktiverar/avaktiverar fullscreen
   - Event: `fullscreen`
   - Properties:
     - `action`: "enter" eller "exit"

4. **Gallery Image Changes** - Spåras när användare byter bild i gallerier
   - Event: `gallery_image_change`
   - Properties:
     - `gallery_name`: Namn på galleri
     - `image_index`: Index på bilden (0-baserat)
     - `total_images`: Totalt antal bilder

5. **Methodology Steps** - Spåras när användare navigerar mellan metodik-steg
   - Event: `methodology_step`
   - Properties:
     - `step_number`: Nummer på steg (1-6)
     - `step_name`: Namn på steg

## Vart hittar jag data?

1. **Vercel Dashboard**: Gå till ditt projekt → Analytics
   - Se page views, unique visitors, top pages
   - Se custom events och deras properties

2. **Vercel Logs**: Gå till ditt projekt → Logs
   - Se real-time logs från deployment

3. **Speed Insights**: Gå till ditt projekt → Speed Insights
   - Se Core Web Vitals och prestandamått

## Tekniska Detaljer

- **Vercel Analytics**: Automatisk tracking av page views
- **Custom Events**: Använder `track()` från `@vercel/analytics`
- **Speed Insights**: Automatisk tracking av prestanda

Alla events spåras i realtid och syns i Vercel Dashboard.

