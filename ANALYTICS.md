# Page View Tracking - Snabb Guide

## Hur det fungerar

Presentationen spårar automatiskt page views via en enkel Vercel Serverless Function.

## API Endpoint

**Fil:** `api/track.js`

Denna function loggar alla page views direkt i Vercel Function Logs.

## Frontend Tracking

**Komponent:** `app/components/PageViewTracker.tsx`

Denna komponent anropar automatiskt `/api/track` när sidan laddas.

## Vart hittar jag logs?

1. **Vercel Dashboard** → Ditt projekt
2. **Functions** → `track` → **Logs**
3. Se alla page views där med:
   - Timestamp
   - IP-adress
   - User Agent
   - Referer
   - URL/Path

## Spårad Data

Varje page view loggas med:
- `timestamp`: När sidan besöktes
- `ip`: Besökarens IP-adress
- `userAgent`: Webbläsare och enhet
- `referer`: Var besökaren kom ifrån
- `url`: Hela URL:en
- `path`: Bara path-delen

Alla logs syns i realtid i Vercel Function Logs.

## Klart! 🎉

Ingen registrering eller API-nycklar behövs. Allt loggas automatiskt i Vercel Function Logs.
