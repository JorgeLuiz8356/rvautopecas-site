import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { linkWhatsApp } from '../data/site'

/** Botão redondo do WhatsApp que aparece depois que a capa sai da tela. */
export default function WhatsAppFlutuante() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > window.innerHeight * 0.6)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <AnimatePresence>
      {visivel && (
        <motion.a
          href={linkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
          className="fixed bottom-6 right-6 z-40 grid size-14 place-items-center rounded-full bg-zap text-white shadow-alta"
        >
          <MessageCircle className="size-7" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
