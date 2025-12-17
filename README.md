# Zamuner Family Website

A modern family website built to document, visualize, and preserve family history in a clear, accessible, and interactive way.

The project is developed with **Next.js** and **React**, focusing on performance, scalability, and a clean user experience.  
Internationalization, analytics, and smooth navigation are core features.

---

## Tech Stack

This project is built using the following technologies:

### Frontend

- **Next.js 16** – React framework for production-grade applications
- **React 19** – UI library
- **TypeScript** – Static typing for better maintainability
- **CSS Modules** – Scoped and maintainable styles

### Internationalization

- **i18next**
- **react-i18next**

### UX & Interaction

- **react-zoom-pan-pinch** – Zoom and pan interactions (useful for large family trees)

### Performance & Analytics

- **@vercel/analytics**
- **@vercel/speed-insights**

### Backend / Services

- **Resend** – Email delivery service

---

## Requirements

Before running the project, make sure you have:

- **Node.js ≥ 20**
- **npm** (or compatible package manager)

---

## Installation

Install dependencies:

```bash
npm install
```

If you need a clean installation (recommended when things start behaving strangely):

```bash
npm run clean-install
```

Yes, this deletes node_modules. No, you won’t miss them.

## Development

Start the development server:

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

Hot reload included. Errors included too, but at least they’re honest.

## Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Linting

Run ESLint:

```bash
npm run lint
```

Because clean code is cheaper than therapy.

## Project Goals

- Preserve family history and relationships
- Provide a navigable and scalable family tree
- Support multiple languages
- Ensure long-term maintainability

## Deployment

The project is optimized for deployment on Vercel, but can run on any Node.js-compatible hosting.

## License

Private project.
Family business. Literally.

## Author

Developed by Nahuel Zamuner.
