# React E-commerce CRUD (Create React App)

This project is a single-page e-commerce CRUD application built with React and React Router.

Features
- Fetches product data from the Fake Store API (no hard-coded products).
- Read, Create, Update, Delete operations in client-side state.
- Responsive layout using Bootstrap.
- Client-side form validation.

Getting started

1. Install dependencies

```powershell
npm install
```

2. Start the dev server

```powershell
npm start
```

Notes
- The Fake Store API is used for initial data. New products are stored in client state only.
- Routes:
  - `/` — Home / product list
  - `/product/:id` — Product details (with Edit/Delete)
  - `/add` — Add new product

  ## Color Palette

  Below is the project's dark color palette (name, hex code, usage, and the rationale):

  | Color Name | Hex Code | Usage | Rationale |
  |---|---:|---|---|
  | Dark Background | `#121212` | The primary page background. | Soft Dark: A true black can cause eye strain; this deep gray provides relief. |
  | Surface / Card | `#1E1E1E` | Product card background, form areas, modals, headers. | Elevation: Slightly lighter than the background, creating a subtle 3D lift for containers. |
  | Primary Text | `#FFFFFF` or `#EAEAEA` | Main text (titles, descriptions, prices). | High Contrast: Bright text against a dark background ensures maximum readability. |
  | Secondary Text | `#B0B0B0` | Subtitles, helper text, timestamps, less important details. | Hierarchy: Lower contrast to guide the eye to the primary information. |
  | Accent (Neon Blue/Cyan) | `#00BCD4` or `#00FFFF` | Primary buttons (e.g., "Add to Cart"), active states, sales badges, focus rings. | Pop & Modern: A vibrant color that truly pops against the dark surfaces, creating urgency and clear calls-to-action. |
  | Success / Positive | `#4CAF50` | Form success messages, stock indicators. | Standard, non-distracting green. |
  | Danger / Delete | `#FF5252` | "Delete" buttons, error messages. | Standard, urgent red. |
