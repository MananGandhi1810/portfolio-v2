# Portfolio v2

A modern, responsive personal portfolio website built with Next.js, showcasing projects, blog posts, and professional information.

![Portfolio Screenshot](./assets/screenshot.png)

## Features

-   **Responsive Design**: Optimized for all device sizes
-   **Dark Theme**: Clean, modern dark UI with subtle animations
-   **Project Showcase**: Highlighted projects with descriptions and links
-   **Blog Section**: Space for sharing thoughts and technical articles
-   **About Page**: Personal introduction and social links
-   **Easter Egg**: Hidden interactive feature for fun
-   **Analytics**: Integrated Vercel Analytics and Speed Insights
-   **Performance Optimized**: Built with Next.js 16 for optimal loading speeds and Server Side Rendering (SSR)

## Tech Stack

-   **Framework**: Next.js 16.0.1
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS v4
-   **UI Components**: Custom components with Lucide React icons
-   **Utilities**: clsx, class-variance-authority, tailwind-merge
-   **Linting**: ESLint with Next.js configuration
-   **Analytics**: Vercel Analytics & Speed Insights
-   **Deployment**: Vercel

## Prerequisites

-   Node.js 18+
-   pnpm (recommended) or npm/yarn

## Local Development

1. **Clone the repository**

    ```bash
    git clone https://github.com/MananGandhi1810/portfolio-v2.git
    cd portfolio-v2
    ```

2. **Install dependencies**

    ```bash
    pnpm install
    # or
    npm install
    ```

3. **Start the development server**

    ```bash
    pnpm dev
    # or
    npm run dev
    ```

4. **Open your browser**

    Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## Customization

### Adding Projects

Edit `data/projects.ts` to add new projects:

```typescript
export const projects = [
    {
        title: "Your Project",
        description: "Project description",
        tech: ["Tech1", "Tech2"],
        github: "https://github.com/...",
        demo: "https://...",
        featured: true,
    },
    // ... more projects
];
```

### Styling

The project uses Tailwind CSS v4 with custom utilities. Main styles are in:

-   `app/globals.css` - Global styles and Tailwind imports
-   `postcss.config.mjs` - PostCSS configuration
-   `tailwind.config.js` - Tailwind configuration (if exists)

### Environment Variables

Create a `.env.local` file for environment variables:

```env
EASTER_EGG_CODE="RandomSecretCode123"
SECRET_LINK="https://www.example.com/secret"
```

## Deployment

The built application can be deployed to any static hosting service:

```bash
pnpm build
pnpm start
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
