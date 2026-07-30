import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

const VARIANTES = {
  zap: 'bg-zap text-white shadow-suave hover:bg-[#1fbe5a]',
  azul: 'bg-azul text-white shadow-suave hover:bg-azul-esc',
  teal: 'bg-teal text-white shadow-suave hover:bg-[#00806f]',
  contorno: 'border-2 border-borda bg-white text-azul hover:border-teal hover:text-teal',
  vidro: 'border-2 border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20',
}

const TAMANHOS = {
  md: 'px-6 py-3 text-[0.97rem]',
  lg: 'px-8 py-4 text-base',
}

/**
 * Botão único do site. Vira <a> quando recebe href e <button> quando não recebe.
 * Links externos ganham target/rel sozinhos.
 */
export default function Button({
  href,
  variante = 'azul',
  tamanho = 'md',
  className,
  children,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2.5 rounded-full font-semibold',
    'transition-colors duration-200 cursor-pointer',
    VARIANTES[variante],
    TAMANHOS[tamanho],
    className,
  )

  const animacao = {
    whileHover: { y: -2 },
    whileTap: { y: 0, scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  }

  if (href) {
    const externo = href.startsWith('http')
    return (
      <motion.a
        href={href}
        className={classes}
        {...(externo && { target: '_blank', rel: 'noopener noreferrer' })}
        {...animacao}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" className={classes} {...animacao} {...props}>
      {children}
    </motion.button>
  )
}
