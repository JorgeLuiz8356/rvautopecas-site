import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Pecas from './components/Pecas'
import Pedido from './components/Pedido'
import Diferenciais from './components/Diferenciais'
import Duvidas from './components/Duvidas'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFlutuante from './components/WhatsAppFlutuante'

export default function App() {
  return (
    // reducedMotion="user" faz o Framer Motion respeitar quem pediu menos
    // animação no sistema — o CSS sozinho não alcança animação feita em JS.
    <MotionConfig reducedMotion="user">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-marca focus:bg-teal focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Sobre />
        <Servicos />
        <Pecas />
        <Pedido />
        <Diferenciais />
        {/* Depoimentos entram aqui quando houver comentários reais de
            clientes. Ver a lista `depoimentos` em src/data/site.js. */}
        <Duvidas />
        <CTA />
      </main>

      <Footer />
      <WhatsAppFlutuante />
    </MotionConfig>
  )
}
