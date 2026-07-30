import { Quote, Star } from 'lucide-react'
import Section from './ui/Section'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Card from './ui/Card'
import { depoimentos } from '../data/site'

/** Iniciais do cliente, para o avatar redondo. */
function iniciais(nome) {
  return nome
    .split(' ')
    .map((parte) => parte[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function Depoimentos() {
  // Sem depoimento real cadastrado, a seção simplesmente não existe. É o
  // que impede um layout vazio de ir ao ar por descuido.
  if (depoimentos.length === 0) return null

  return (
    <Section fundo="claro">
      <SectionHeading
        tag="Depoimentos"
        titulo="Quem compra aqui, volta"
        descricao="Mecânico, motorista de aplicativo e gente que só queria resolver o problema do carro sem dor de cabeça."
        centralizado
      />

      <div className="mt-14 grid gap-7 md:grid-cols-3">
        {depoimentos.map((depoimento, i) => (
          <Reveal key={depoimento.nome} delay={i * 0.1}>
            <Card className="flex h-full flex-col p-8">
              <Quote
                className="mb-5 size-9 text-teal/25"
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <div className="mb-4 flex gap-1" aria-label="Nota 5 de 5">
                {Array.from({ length: 5 }, (_, estrela) => (
                  <Star key={estrela} className="size-4 fill-verde text-verde" aria-hidden="true" />
                ))}
              </div>

              <p className="flex-1 text-[0.97rem] leading-relaxed text-texto-fraco">
                “{depoimento.texto}”
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-borda pt-6">
                <span
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-azul font-titulo text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {iniciais(depoimento.nome)}
                </span>
                <span>
                  <strong className="block text-[0.95rem] font-semibold text-texto">
                    {depoimento.nome}
                  </strong>
                  <span className="text-sm text-texto-fraco">{depoimento.papel}</span>
                </span>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

    </Section>
  )
}
