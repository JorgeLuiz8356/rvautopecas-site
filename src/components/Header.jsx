import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Container from './ui/Container'
import Button from './ui/Button'
import { cn } from '../lib/cn'
import { empresa, navegacao } from '../data/site'

export default function Header() {
  const [rolou, setRolou] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  // Transparente em cima da capa; ao rolar vira barra azul da marca.
  // O fundo nunca fica claro porque a logo é branca — em branco ela sumiria.
  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 40)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  // Menu aberto no celular trava a rolagem do fundo.
  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuAberto])

  const solido = rolou || menuAberto

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solido ? 'bg-azul/95 shadow-alta backdrop-blur-lg' : 'bg-transparent',
      )}
    >
      <Container className="flex h-[76px] items-center justify-between gap-4">
        {/* A logo já traz o nome "RV Autopeças" desenhado dentro dela,
            por isso não vai texto nenhum ao lado. */}
        <a href="#inicio" aria-label={`${empresa.nome} — início`} className="shrink-0">
          <img src="./img/logo.png" alt="" className="h-11 w-auto sm:h-[52px]" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[0.95rem] font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.rotulo}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Leva ao bloco de pedido, não direto ao WhatsApp: lá a pessoa
              informa o carro e a conversa já começa com o essencial. */}
          <Button href="#pedido" variante="zap" className="hidden sm:inline-flex">
            Pedir peça
          </Button>

          <button
            type="button"
            onClick={() => setMenuAberto((v) => !v)}
            aria-expanded={menuAberto}
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            className="grid size-11 place-items-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {menuAberto ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuAberto && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-azul-esc lg:hidden"
            aria-label="Principal (celular)"
          >
            <Container className="flex flex-col gap-1 py-5">
              {navegacao.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuAberto(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="rounded-marca px-4 py-3 font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.rotulo}
                </motion.a>
              ))}
              <Button href="#pedido" variante="zap" className="mt-3 w-full sm:hidden">
                Pedir peça
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
