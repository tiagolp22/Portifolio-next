'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Mail, Github, Linkedin } from 'lucide-react'
import { useI18n } from '@/contexts/I18nContext'

const contactMethods = {
  email: {
    icon: <Mail className="w-6 h-6" />,
    value: 'tiagobarroscavalcanti@gmail.com',
    href: 'mailto:tiagobarroscavalcanti@gmail.com',
    primary: true
  },
  linkedin: {
    icon: <Linkedin className="w-6 h-6" />,
    value: 'linkedin.com/in/tiago-barros-cav',
    href: 'https://www.linkedin.com/in/tiago-barros-cav',
    primary: false
  },
  github: {
    icon: <Github className="w-6 h-6" />,
    value: 'github.com/tiagolp22',
    href: 'https://github.com/tiagolp22',
    primary: false
  }
}

export const Contact = () => {
  const { t } = useI18n()

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('sections.contact.title')}
          </h2>
          <p className="text-[rgb(var(--muted))] max-w-2xl mx-auto">
            {t('sections.contact.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <div className="grid gap-6">
            {Object.entries(contactMethods).map(([key, method]) => (
              <motion.a
                key={key}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={`
                  bg-[rgb(var(--card-background))] border border-[rgb(var(--card-border))]
                  p-6 rounded-lg flex items-center gap-4 transition-all 
                  hover:scale-[1.02]
                  ${method.primary ? 'border-[rgb(var(--highlight))] border-2' : ''}
                `}>
                  <div className="text-[rgb(var(--highlight))]">{method.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1 text-[rgb(var(--foreground))]">
                      {t(`contact.${key}.name`)}
                    </h3>
                    <p className="text-[rgb(var(--muted))]">{method.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-[rgb(var(--muted))] mb-6">
              {t('sections.contact.availability')}
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                onClick={() => window.open('mailto:tiagobarroscavalcanti@gmail.com')}
                className="bg-[rgb(var(--highlight))] hover:opacity-90"
              >
                {t('contact.sendEmail')}
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('/cv-tiago-barros.pdf')}
                className="border-[rgb(var(--highlight))] text-[rgb(var(--highlight))] hover:bg-[rgb(var(--highlight))] hover:text-white"
              >
                {t('contact.downloadCV')}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
