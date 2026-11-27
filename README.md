# Saisign – Product Showcase Website

A modern, premium, fully responsive single-page product showcase website built with **Next.js 16**, **Tailwind CSS 4**, **Framer Motion** and **Lucide React**.

---

## Tech Stack

| Tool | Version |
|---|---|
| Next.js | 16.4.6 |
| React | 19 |
| Tailwind CSS | 4.3.3 |
| Framer Motion | latest |
| Lucide React | latest |
| TypeScript | 5 |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Single-page SPA composition
│   └── globals.css         # Design tokens, fonts, base styles
├── components/
│   ├── Navbar.tsx          # Sticky nav, active section, mobile menu
│   ├── Hero.tsx            # Hero section with animations
│   ├── Products.tsx        # Product catalogue section
│   ├── ProductCard.tsx     # Individual product card
│   ├── ProductModal.tsx    # Product detail modal
│   ├── WhyChooseUs.tsx     # Feature highlights section
│   └── Footer.tsx          # Dark footer with quick links
└── data/
    └── products.json       # Product data (add/edit products here)
```

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production build

```bash
npm run build
npm start
```

---

## Adding / Editing Products

Edit `src/data/products.json`. Each product entry follows this shape:

```json
{
  "id": 7,
  "name": "Product Name",
  "category": "Category",
  "shortDescription": "Short description for the card.",
  "image": "https://...",
  "detailedDescription": "Full description for the modal.",
  "features": ["Feature 1", "Feature 2"],
  "specifications": {
    "Key": "Value"
  }
}
```

---

## Design System

| Token | Value |
|---|---|
| Primary dark navy | `#091322` |
| Royal blue | `#2563EB` |
| Accent sky blue | `#38BDF8` |
| Light background | `#F1F5F9` |
| Secondary text | `#64748B` |
| Heading font | Poppins |
| Body font | Inter |

---

## Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npx vercel
```

Or follow the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
