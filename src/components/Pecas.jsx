import { ArrowRight } from 'lucide-react'
import Section from './ui/Section'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { linhasDePecas } from '../data/site'

/**
 * Linhas de peças, em texto.
 *
 * Sem foto e sem card de propósito. Isto existe para dois públicos: quem
 * chega no site querendo saber se a loja tem a peça dele, e o Google, que
 * precisa de texto para ligar a busca "pastilha de freio zona norte" a
 * esta página. Foto não resolve nem um nem outro.
 */
export default function Pecas() {
  return (
    <Section id="pecas" fundo="branco">
      <SectionHeading
        tag="Peças"
        titulo="O que você encontra na loja"
        descricao="As linhas que trabalhamos no dia a dia. Se o que você precisa não estiver aqui, pergunte assim mesmo — buscamos no fornecedor e passamos o prazo antes de você fechar."
        centralizado
      />

      <div className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
        {linhasDePecas.map((linha, i) => (
          <Reveal key={linha.nome} delay={(i % 4) * 0.06}>
            <div className="border-t-2 border-teal/30 pt-5">
              <h3 className="mb-2 text-lg text-texto">{linha.nome}</h3>
              <p className="text-[0.95rem] leading-relaxed text-texto-fraco">{linha.itens}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 text-center" delay={0.1}>
        <a
          href="#pedido"
          className="inline-flex items-center gap-2 font-semibold text-teal underline decoration-teal/30 underline-offset-4 transition-colors hover:decoration-teal"
        >
          Não achou? Diga o que está acontecendo que a gente identifica
          <ArrowRight className="size-4" />
        </a>
      </Reveal>
    </Section>
  )
}
