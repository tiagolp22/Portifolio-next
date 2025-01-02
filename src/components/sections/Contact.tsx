'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Mail, Github, Linkedin } from 'lucide-react'

const contactMethods = [
  {
    name: 'Email',
    value: 'tiagobarroscavalcanti@gmail.com',
    icon: <Mail className="w-6 h-6" />,
    href: 'mailto:tiagobarroscavalcanti@gmail.com',
    primary: true
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/tiago-barros-cav',
    icon: <Linkedin className="w-6 h-6" />,
    href: 'https://www.linkedin.com/in/tiago-barros-cav',
    primary: false
  },
  {
    name: 'GitHub',
    value: 'github.com/tiagolp22',
    icon: <Github className="w-6 h-6" />,
    href: 'https://github.com/tiagolp22',
    primary: false
  }
]

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Título e descrição */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Je suis toujours interesse par de nouveaux projets et opportunites.
            N&apos;hesitez pas a me contacter pour discuter de vos idees.
          </p>
        </motion.div>

        {/* Lista de contatos */}
        <div className="max-w-xl mx-auto">
          <div className="grid gap-6">
            {contactMethods.map((method) => (
              <motion.a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={`
                  bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg 
                  flex items-center gap-4 transition-all 
                  hover:transform hover:scale-105
                  ${method.primary ? 'border-2 border-blue-500' : ''}
                `}>
                  <div className="text-blue-500">{method.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{method.name}</h3>
                    <p className="text-gray-400">{method.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Seção de botões */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-6">
              Disponible pour des opportunites freelance et temps plein
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                onClick={() => window.open('mailto:tiagobarroscavalcanti@gmail.com')}
              >
                Envoyez un email
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('/cv-tiago-barros.pdf')}
              >
                Telecharger CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}