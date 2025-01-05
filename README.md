# Portfolio Website Project

[![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features multiple themes, internationalization, and a rich set of UI components.

![Portfolio Preview](public/preview.png)

## 🌟 Features

- **Multi-theme Support**
  - Light/Dark/System theme modes
  - Smooth theme transitions
  - Persistent theme preferences

- **Internationalization**
  - Support for 4 languages (EN, FR, PT, ES)
  - Auto-detection of browser language
  - Persistent language preferences

- **Modern UI Components**
  - Responsive design
  - Interactive animations
  - Loading states and skeletons
  - Modal dialogs
  - Custom form elements

- **Performance Optimized**
  - Static site generation
  - Image optimization
  - Code splitting
  - Lazy loading
  - Bundle optimization

- **SEO Ready**
  - Meta tags management
  - Schema.org markup
  - Sitemap generation
  - Open Graph support

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
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

3. Create a `.env.local` file:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons
- [clsx](https://github.com/lukeed/clsx) - Class utilities

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # Reusable components
│   ├── constants/        # Constants and configurations
│   ├── contexts/         # React contexts
│   ├── hooks/           # Custom hooks
│   ├── locales/         # Translation files
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
├── public/              # Static assets
└── ...config files
```

## 🔧 Configuration

### Theme Configuration

Edit `src/utils/themeUtils.ts` to customize theme variables and behavior.

### Internationalization

Add or modify translations in `src/locales/` directory.

### Tailwind Configuration

Customize the design system in `tailwind.config.js`.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs)

## 📧 Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)

---
⭐️ If you like this project, please give it a star!