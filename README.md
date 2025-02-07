# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and TailwindCSS.

## Features

- 🎨 Modern and clean design
- 🌓 Dark/Light mode support
- 📱 Fully responsive
- ⚡ Fast and optimized
- ♿ Accessible
- 🔍 SEO optimized

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide Icons
- Shadcn UI Components

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js 13+ app directory
├── components/          # Reusable components
│   ├── ui/             # UI components
│   ├── layout/         # Layout components
│   └── sections/       # Page sections
├── lib/                # Utilities and helpers
├── styles/             # Global styles
└── types/              # TypeScript types
```

## Customization

1. Update the site configuration in `src/config/site.ts`
2. Replace the images in the `public` directory
3. Modify the theme colors in `src/app/globals.css`
4. Update the content in the page components

## Deployment

The project is ready to be deployed to any platform that supports Next.js, such as:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
