# Modern React Stack Starter

A feature-complete starter template with the latest frontend technologies:

- ⚛️ **React 19**
- 🏎️ **Vite 6**
- 📘 **TypeScript**
- 🎨 **Tailwind CSS 4**
- 🧩 **ShadCN UI**
- 🔒 **JWT Authentication**
- 🛣️ **Protected Routes**
- 📱 **Responsive Design**

## Features

- **Modern Stack**: Uses the latest versions of React, Vite, TypeScript, and Tailwind CSS
- **Component Library**: Pre-configured ShadCN UI with custom themes
- **Authentication**: Complete JWT auth flow with protected routes
- **Performance**: Optimized bundle size with code splitting and lazy loading
- **Developer Experience**: Type safety, path aliases, and comprehensive documentation

## 🚀 Quick Start

### Prerequisites

- Node.js `22.14.0` (LTS)
- PNPM package manager

### Installation

1. **Enable PNPM**:
   ```sh
   corepack enable pnpm
   ```

2. **Install dependencies**:
   ```sh
   pnpm install
   ```

3. **Start development server**:
   ```sh
   pnpm dev
   ```

## 🧩 Project Structure

```
src/
├── api/         # API client configuration & endpoints
├── components/  # UI components (ShadCN + custom)
├── context/     # React context providers
├── hooks/       # Custom React hooks
├── lib/         # Utility functions
├── pages/       # Page components
└── router/      # React Router configuration
```

## 🛠️ Adding UI Components

### ShadCN Components

```sh
pnpm dlx shadcn@canary add component_name
```

### ShadCN Blocks & Charts

```sh
pnpm dlx shadcn@canary add block_name
```

> ⚠️ Use `--force` when prompted and **DO NOT** overwrite existing components

## 🎨 Styling Guide

This project uses Tailwind CSS 4 with custom theme configuration:

### Colors

All colors are defined in `index.css` inside the `@theme` section.
- `bg-color_name` → Background color
- `text-color_name` → Text color
- `ring-ring` → Border/outline color

### Typography

| Font Class | Usage |
|-----------|------------------------------|
| `font-display` | Main titles, largest text |
| `font-heading` | Headings & subheadings |
| `font-paragraph` | Body text, buttons, inputs |
