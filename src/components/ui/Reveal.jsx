import { motion } from 'framer-motion'

/**
 * Faz o conteúdo aparecer subindo quando entra na tela.
 * Anima só uma vez — rolar de volta não repete a animação.
 */
export default function Reveal({ children, className, delay = 0, y = 24, as = 'div' }) {
  const Motion = motion[as] ?? motion.div

  return (
    <Motion
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion>
  )
}
