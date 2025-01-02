export const generatePersonSchema = (locale: string) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tiago Barros",
  jobTitle: locale === 'fr' ? "Développeur Full Stack" : "Full Stack Developer",
  url: "https://tiagobarros.dev",
  sameAs: [
    "https://github.com/tiagolp22",
    "https://www.linkedin.com/in/tiago-barros-cav"
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Node.js",
    "Full Stack Development",
    "Web Development"
  ]
})

export const generateWebsiteSchema = (locale: string) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tiago Barros Portfolio",
  description: locale === 'fr'
    ? "Portfolio de Tiago Barros - Développeur Full Stack"
    : "Tiago Barros Portfolio - Full Stack Developer",
  url: "https://tiagobarros.dev",
  inLanguage: locale
})
