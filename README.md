# Bast1QN Graphics Hub

Eine moderne Next.js-Website zur Verwaltung und Präsentation von Grafiken - Avatare, Banner, Thumbnails und mehr.

## Features

- 🎨 **Grafik-Galerie** mit Kategorien und Filtern
- 🔐 **Admin-Bereich** mit Login-Funktion
- 📱 **Responsive Design** mit Tailwind CSS
- 🚀 **Vercel-ready** für einfaches Deployment
- 📦 **TypeScript** für type-sichere Entwicklung
- 🎭 **29+ Avatar-Stile** aus der originalen Logos.html

## Tech Stack

- **Next.js 16.1** mit App Router
- **React 19** mit React Compiler
- **TypeScript 5**
- **Tailwind CSS 4**
- **Vercel** für Hosting

## Quick Start

### Entwicklung

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

### Build

```bash
# Production build
npm run build

# Start production server
npm start
```

## Deployment

### Vercel Deployment

1. **Repository auf GitHub pushen:**

```bash
# Repository auf GitHub erstellen
git remote add origin https://github.com/DEIN_USERNAME/bast1qn-graphics-hub.git
git push -u origin main
```

2. **Auf Vercel deployen:**

   - Gehe zu [vercel.com](https://vercel.com)
   - Klicke "Add New Project"
   - Importiere dein GitHub-Repository
   - Konfiguriere die Umgebungsvariablen:

```
ADMIN_PASSWORD_HASH=ba12sti34_plus_hash_placeholder
NEXT_PUBLIC_SITE_NAME=Bast1QN Graphics Hub
NEXT_PUBLIC_SITE_URL=https://deine-domain.vercel.app
```

   - Klicke "Deploy"

3. **Fertig!** Deine Website ist jetzt live.

### Admin-Zugang

- Login: [`/admin/login`](https://deine-domain.vercel.app/admin/login)
- Passwort: `Ba12sti34+`

## Projektstruktur

```
web-app/
├── src/
│   ├── app/
│   │   ├── (public)/          # Öffentliche Seiten
│   │   │   ├── page.tsx       # Hauptseite
│   │   │   └── gallery/[type]/ # Galerie-Seiten
│   │   ├── admin/             # Admin-Bereich
│   │   │   ├── page.tsx       # Dashboard
│   │   │   └── login/page.tsx # Login
│   │   ├── globals.css        # Globale Styles
│   │   └── layout.tsx         # Root Layout
│   ├── components/
│   │   ├── gallery/           # Galerie-Komponenten
│   │   ├── admin/             # Admin-Komponenten
│   │   └── ui/                # UI-Komponenten
│   ├── lib/
│   │   ├── assets.ts          # Asset-Bibliothek
│   │   └── utils.ts           # Utils
│   └── types/
│       └── assets.ts          # TypeScript-Typen
├── data/
│   └── assets.json            # Asset-Daten
├── public/
│   └── assets/                # Grafik-Dateien
└── package.json
```

## Assets hinzufügen

1. Grafik-Datei in `public/assets/{type}/` kopieren
2. In `data/assets.json` neuen Eintrag hinzufügen:

```json
{
  "id": "mein-neues-asset",
  "type": "avatars",
  "category": "minimal",
  "title": "Mein Asset",
  "description": "Beschreibung",
  "filename": "mein-asset.svg",
  "styleClass": "style-orb bg-indigo",
  "tags": ["tag1", "tag2"]
}
```

3. Build erneut ausführen

## Anpassung

### Farben & Styles

In `src/app/globals.css` kannst du die Farben und Avatar-Stile anpassen.

### Admin-Passwort

Ändere das Passwort in:
- `.env.local` (lokal)
- Vercel Umgebungsvariablen (Production)

## License

MIT

---

Erstellt mit ❤️ von Bast1QN
