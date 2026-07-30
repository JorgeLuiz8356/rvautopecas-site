import { Plus } from 'lucide-react'
import Section from './ui/Section'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { duvidas } from '../data/site'

/**
 * Perguntas frequentes.
 *
 * Usa <details>/<summary> nativo em vez de estado no React: já abre e
 * fecha sozinho, funciona pelo teclado, e o navegador encontra o texto
 * fechado quando o visitante usa Ctrl+F. Um acordeão feito à mão perde
 * as três coisas.
 */
export default function Duvidas() {
  return (
    <Section id="duvidas" fundo="claro">
      <SectionHeading
        tag="Perguntas frequentes"
        titulo="Dúvidas que todo mundo tem"
        descricao="Se a sua não estiver aqui, é só chamar no WhatsApp."
        centralizado
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {duvidas.map((duvida, i) => (
          <Reveal key={duvida.pergunta} delay={Math.min(i, 4) * 0.05}>
            <details className="group rounded-marca border border-borda bg-white transition-colors duration-300 open:border-teal/40 hover:border-teal/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-titulo text-[1.05rem] font-semibold text-texto marker:content-none">
                {duvida.pergunta}
                <Plus
                  className="size-5 shrink-0 text-teal transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <div className="px-5 pb-5 text-[0.97rem] leading-relaxed text-texto-fraco">
                {duvida.resposta}
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
