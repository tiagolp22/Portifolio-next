import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BackToTop } from '@/components/ui/BackToTop'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { I18nProvider } from '@/contexts/I18nContext'
import { SkipToContent } from '@/components/a11y/SkipToContent'
import { generatePersonSchema, generateWebsiteSchema } from '@/utils/seo/schema'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params }: { params: { locale?: string } }) {
  const locale = params.locale || 'fr'

  return {
    metadataBase: new URL('https://tiagobarros.dev'),
    title: {
      template: '%s | Tiago Barros',
      default: 'Tiago Barros | Portfolio',
    },
    description:
      locale === 'fr'
        ? 'Portfolio de Tiago Barros - Développeur Full Stack spécialisé en React, Node.js et TypeScript'
        : 'Portfolio of Tiago Barros - Full Stack Developer specialized in React, Node.js and TypeScript',
    keywords: ['developer', 'full stack', 'react', 'node.js', 'typescript'],
    authors: [{ name: 'Tiago Barros' }],
    icons: {
      icon: '/TiagoDEV.png',
      shortcut: '/TiagoDEV.png',
      apple: '/TiagoDEV.png',
    },
    openGraph: {
      title: 'Tiago Barros | Portfolio',
      description:
        locale === 'fr'
          ? 'Portfolio de Tiago Barros - Développeur Full Stack'
          : 'Tiago Barros Portfolio - Full Stack Developer',
      url: 'https://tiagobarros.dev',
      siteName: 'Tiago Barros Portfolio',
      locale: locale,
      type: 'website',
      images: [
        {
          url: '/TiagoDEV.png',
          width: 800,
          height: 600,
          alt: 'Tiago Barros Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tiago Barros | Portfolio',
      description:
        locale === 'fr'
          ? 'Portfolio de Tiago Barros - Développeur Full Stack'
          : 'Tiago Barros Portfolio - Full Stack Developer',
      images: ['/TiagoDEV.png'],
    },
    alternates: {
      canonical: 'https://tiagobarros.dev',
      languages: {
        fr: 'https://tiagobarros.dev/fr',
        en: 'https://tiagobarros.dev/en',
        pt: 'https://tiagobarros.dev/pt',
        es: 'https://tiagobarros.dev/es',
      },
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              generatePersonSchema('fr'),
              generateWebsiteSchema('fr'),
            ]),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <I18nProvider>
            <SkipToContent />
            <Header />
            <main id="main-content" className="pt-20" tabIndex={-1}>
              {children}
            </main>
            <Footer />
            <BackToTop />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}