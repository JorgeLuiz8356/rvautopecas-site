import { ArrowUpRight } from 'lucide-react'
import Section from './ui/Section'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Card from './ui/Card'
import { servicos } from '../data/site'

export default function Servicos() {
  return (
    <Section id="servicos" fundo="claro">
      <SectionHeading
        tag="Serviços"
        titulo="Comprar peça não precisa ser complicado"
        descricao="Você não precisa saber o código nem descobrir sozinho qual peça serve. Diz o que está acontecendo que a gente resolve o resto."
        centralizado
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {servicos.map((servico, i) => {
          const Icone = servico.icone
          return (
            <Reveal key={servico.titulo} delay={(i % 3) * 0.08}>
              <Card className="h-full p-8">
                {/* Brilho que segue o card no hover */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-fraco/0 via-teal-fraco/0 to-teal-fraco/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="mb-6 grid size-14 place-items-center rounded-marca bg-azul text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-teal group-hover:rotate-3">
                    <Icone className="size-7" />
                  </div>

                  <h3 className="mb-3 flex items-start justify-between gap-3 text-xl text-texto">
                    {servico.titulo}
                    <ArrowUpRight
                      className="mt-1 size-5 shrink-0 text-teal opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </h3>

                  <p className="text-[0.97rem] text-texto-fraco">{servico.texto}</p>
                </div>
              </Card>
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-12 text-center" delay={0.15}>
        <p className="text-texto-fraco">
          Não achou o que precisa?{' '}
          <a
            href="#pedido"
            className="font-semibold text-teal underline decoration-teal/30 underline-offset-4 transition-colors hover:decoration-teal"
          >
            Diga o que está acontecendo que a gente identifica
          </a>
          .
        </p>
      </Reveal>
    </Section>
  )
}
