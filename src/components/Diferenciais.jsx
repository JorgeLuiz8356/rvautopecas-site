import { motion } from 'framer-motion'
import Section from './ui/Section'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { diferenciais } from '../data/site'

export default function Diferenciais() {
  return (
    <Section fundo="escuro" className="relative overflow-hidden">
      {/* Luzes suaves de fundo, só enfeite */}
      <div
        className="pointer-events-none absolute -left-40 top-0 size-[30rem] rounded-full bg-teal/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 size-[30rem] rounded-full bg-azul/40 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative">
        <SectionHeading
          tag="Diferenciais"
          titulo="Por que a oficina do bairro compra aqui"
          descricao="São mais de 200 oficinas e um monte de motorista que voltam. Estes são os quatro motivos que a gente mais ouve."
          centralizado
          claro
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((item, i) => {
            const Icone = item.icone
            return (
              <Reveal key={item.titulo} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="group h-full rounded-marca-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-teal-claro/40 hover:bg-white/10"
                >
                  <div className="mb-6 grid size-14 place-items-center rounded-marca bg-gradient-to-br from-teal to-verde text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icone className="size-7" />
                  </div>
                  <h3 className="mb-3 text-lg text-white">{item.titulo}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-texto-luz">{item.texto}</p>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
