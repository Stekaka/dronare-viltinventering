# Älginventering.se — Älginventering med Termisk Drönare

World-class Swedish marketing website for älginventering.se (moose inventory with thermal drones), operated by Drönarkompaniet Norden AB.

Premium Astro + Tailwind CSS static site with outstanding visual quality, mobile-first UX, and fast Core Web Vitals.

## 🚀 Features

- **Interactive Price Calculator** with locked specifications:
  - Kön/kalv toggle (adjusts default coverage 30% → 40%)
  - Three travel/lodging modes (Exkl., Schablon, Offert)
  - Coverage presets: 20%, 30% (rek), 40%, 50%
  - Real-time calculation with verification (17455 ha @ 40% = 5 days, 40000 kr)
  
- **Complete MVP Pages**:
  - Home with method steps and differentiators
  - `/metodik` — detailed methodology
  - `/kostnad` — cost calculator and explanation
  - `/jamfor-metoder` — method comparison
  - `/for/jaktlag`, `/for/aso`, `/for/afo`, `/for/markagare` — audience pages
  - `/guider/slu-rapport-2026` — SLU report summary
  - `/case` — case studies
  - `/kontakt` — contact with form
  - `/faq` — comprehensive FAQ

- **SEO Optimized**:
  - Meta tags, Open Graph, Twitter Cards
  - JSON-LD structured data (LocalBusiness + Service)
  - Sitemap generation
  - Robots.txt
  - `lang="sv"` throughout
  - Canonical URLs

- **Premium Scandinavian Design**:
  - Deep forest greens (#059669, emerald-700+)
  - Warm neutrals (stone palette)
  - Mobile-first responsive
  - Sticky header with dropdown nav
  - Accessible components

## 📋 Tech Stack

- **Astro 5** — Static site generator
- **Tailwind CSS 4** — Utility-first styling
- **TypeScript** — Type safety
- **@astrojs/sitemap** — Auto sitemap generation

## 🛠️ Development

### Prerequisites

- Node.js 22+ recommended
- npm 10+

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
```

Output in `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🧮 Price Calculator Specifications

The calculator on `/kostnad` and homepage follows locked specifications:

### Formulas

1. `inventerad_ha = total_ha × (coverage / 100)`
2. `days = ceil(inventerad_ha / 1500)` — **ALWAYS round UP**
3. `flight_cost = days × 8000`
4. `kr_per_ha_excl = flight_cost / total_ha`
5. `total_incl = flight_cost + travel_lodging` (if schablon mode)

### Defaults

- **Coverage default: 30%** (recommended for density only)
- **Coverage default: 40%** when Kön/kalv toggle is ON
- Coverage range: 20–50% (presets at 20, 30, 40, 50)
- **SEK/day: 8000 kr** (locked, shown as orienterande)
- **HA/day: 1500** (locked, not user-editable)
- Min area: ~500 ha (below shows "kontakta oss")

### Travel/Lodging Modes

1. **Exkl. resor** (default) — flight only, shows kr/ha excl
2. **Schablon resor/boende** — amount input (default 12000 SEK), shows both excl and incl
3. **Tillkommer i offert** — no number, text note

### Verification

Example: **17455 ha @ 40%** coverage:
- inventerad ≈ 6982 ha
- ceil(6982/1500) = **5 days**
- 5 × 8000 = **40000 kr**
- 40000 / 17455 ≈ **2.29 kr/ha** excl
- +12000 schablon = **52000 kr** total
- 52000 / 17455 ≈ **2.98 kr/ha** incl

## 🌐 Deployment & DNS

### Deployment

The site is a static Astro build. Deploy `dist/` to any static host:

- **Vercel** (recommended):
  ```bash
  npm install -g vercel
  vercel --prod
  ```

- **Netlify**:
  - Build command: `npm run build`
  - Publish directory: `dist`

- **Custom server**:
  - Upload `dist/` contents
  - Configure web server to serve `index.html` for all routes (SPA mode)

### DNS Configuration

#### Primary Domain: älginventering.se (IDN punycode: xn--lginventering-jfb.se)

Set up DNS records at your provider:

```
A     @             <server-ip>
AAAA  @             <server-ipv6>
CNAME www           älginventering.se
```

Or for Vercel/Netlify:

```
CNAME @             cname.vercel-dns.com
CNAME www           cname.vercel-dns.com
```

#### Secondary Domain: alginventering.se (301 redirect)

Configure at your host/CDN:
- `alginventering.se` → 301 redirect to `https://älginventering.se`
- `www.alginventering.se` → 301 redirect to `https://älginventering.se`

**Note on IDN (Internationalized Domain Names):**
- Browser address bar: `älginventering.se` (human-readable)
- DNS/config: `xn--lginventering-jfb.se` (punycode)
- Astro `site:` uses IDN form for proper canonical URLs

## 📝 Content Rules

### GREEN Claims (safe to make)

✅ Provyteinventering (prefer over "stickprov")  
✅ Random plots / slumpmässiga provytor  
✅ Density + confidence interval + map + image evidence  
✅ "Near 100% detection in cold cloudy winter per SLU GPS validation"  
✅ "I linje med SLU 2026" / "bygger på samma kunskap som SLU:s utvärdering 2026"  
✅ Complement to älgobs & spillningsinventering  
✅ Audiences: jaktlag, ÄSO, ÄFO, markägare, skog  

### RED Claims (NEVER)

❌ "Godkänd av SLU/Naturvårdsverket"  
❌ Replaces official methods  
❌ "AI räknar/artbestämmer älgarna"  
❌ Exact internal thresholds/algorithms  
❌ "100% säker siffra" without uncertainty  
❌ Hammering "inte godkänd"  

### Reference

Hofmeester m.fl. (2026). *Inventering av älg med drönare*. Rapport 2026.2, SLU. DOI: 10.54612/a.4mafh3bj8a

## 📞 Contact Info

- **Operator**: Drönarkompaniet Norden AB
- **Phone**: [0709-780 908](tel:+46709780908)
- **Email**: [info@dronarkompaniet.se](mailto:info@dronarkompaniet.se)
- **Website**: [dronarkompaniet.se](https://dronarkompaniet.se)

## 📄 License

Proprietary — Drönarkompaniet Norden AB. All rights reserved.

---

**Built with precision for Swedish wildlife management.**
