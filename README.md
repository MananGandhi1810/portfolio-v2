# Portfolio Website

A modern, responsive personal portfolio website built with Next.js, showcasing projects, blog posts, and professional information.

![Portfolio Screenshot](./assets/screenshot.png)

## Features

-   **Responsive Design**: Optimized for all device sizes
-   **Dark Theme**: Compact monospace layout with a blue accent and a link to the netcat portfolio
-   **Project Showcase**: Searchable project archive with technology and category filters
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

-   Node.js 20.9+
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

## Content sources

The introduction and skills are based on [Manan’s GitHub profile](https://github.com/MananGandhi1810). Experience results, education, and skills use the owner-provided resume; Sykes & Rays dates remain May–July 2025 as confirmed by the owner. Project detail pages draw on the resume and public repositories. FormBar feature details also use indexed public LinkedIn posts.

The contact form requires `RESEND_API_KEY` and `RESEND_FROM_EMAIL`. Without these, the website still builds and the form returns an unavailable response; visitors can email `hello@manan.cloud`. GitHub contribution activity uses an external service and falls back to a profile link if it is unavailable.

The OpenQuant dashboard image comes from the [OpenQuant repository](https://github.com/NeuroTechh/OpenQuant/blob/main/assets/dashboard1.png). Other project visuals are labeled architecture sketches. See [the redesign plan](docs/portfolio-redesign-plan.md) for research and content provenance.
