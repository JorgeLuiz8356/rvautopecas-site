import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MessageCircle, MoveDown } from 'lucide-react'
import Container from './ui/Container'
import Button from './ui/Button'
import { Tag } from './ui/SectionHeading'
import { contato, empresa, numeros } from '../data/site'

export default function Hero() {
  const secaoRef = useRef(null)
  const menosMovimento = useReducedMotion()

  // A foto de fundo anda mais devagar que o texto ao rolar (parallax).
  const { scrollYProgress } = useScroll({
    target: secaoRef,
    offset: ['start start', 'end start'],
  })
  const fundoY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textoY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const textoOpacidade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section id="inicio" ref={secaoRef} className="relative isolate overflow-hidden bg-azul-noite">
      {/* Foto da fachada + véu escuro para o texto ficar legível */}
      <motion.div
        style={menosMovimento ? undefined : { y: fundoY }}
        className="absolute inset-0 -z-10 scale-110"
        aria-hidden="true"
      >
        <img
          src="./img/fachada.jpg"
          alt=""
          width="1920"
          height="535"
          className="size-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-azul-noite/95 via-azul-esc/85 to-azul/70"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />

      <Container className="flex min-h-[100svh] flex-col justify-center pb-16 pt-32 sm:pb-24">
        <motion.div
          style={menosMovimento ? undefined : { y: textoY, opacity: textoOpacidade }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Tag claro>
              {contato.endereco.bairro} · Zona Norte de SP · desde {empresa.desde}
            </Tag>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.7rem,6.5vw,4.6rem)] tracking-[-0.035em] text-white"
          >
            Muito mais que{' '}
            <span className="bg-gradient-to-r from-teal-claro to-verde bg-clip-text italic text-transparent">
              autopeças.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-xl text-lg text-texto-luz sm:text-xl"
          >
            A peça certa para o seu carro, com a marca que o mecânico confia. Você manda o que
            precisa pelo WhatsApp, a gente confirma a aplicação e entrega em até 1 hora.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#pedido" variante="zap" tamanho="lg">
              <MessageCircle className="size-5" />
              Pedir minha peça
            </Button>
            <Button href="#pecas" variante="vidro" tamanho="lg">
              Ver as peças
              <ArrowRight className="size-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Números da loja */}
        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 sm:mt-20 lg:grid-cols-4"
        >
          {numeros.map((n) => (
            /* O número vem antes na tela, mas o rótulo vem antes no HTML —
               é o que faz o leitor de tela ler "anos de loja: 9". */
            <div key={n.rotulo} className="flex flex-col-reverse">
              <dt className="mt-1 text-sm text-texto-luz">{n.rotulo}</dt>
              <dd className="font-titulo text-4xl font-extrabold text-white sm:text-5xl">
                {n.valor}
                <span className="text-teal-claro">{n.sufixo}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>

      <motion.a
        href="#empresa"
        aria-label="Ir para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-7 left-1/2 hidden size-11 -translate-x-1/2 place-items-center rounded-full border border-white/25 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white lg:grid"
      >
        <motion.span
          animate={menosMovimento ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <MoveDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
