import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

/**
 * Cartão branco com borda suave. Com `hover` ele sobe e ganha sombra —
 * é o efeito usado nos cards de serviço e de produto.
 */
export default function Card({ hover = true, className, children, ...props }) {
  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-marca-lg border border-borda bg-white',
        'shadow-suave transition-shadow duration-300',
        hover && 'hover:border-teal/40 hover:shadow-alta',
        className,
      )}
      {...(hover && {
        whileHover: { y: -6 },
        transition: { type: 'spring', stiffness: 300, damping: 24 },
      })}
      {...props}
    >
      {children}
    </motion.div>
  )
}
