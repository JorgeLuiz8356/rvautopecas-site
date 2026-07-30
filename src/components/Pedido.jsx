import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import Section from './ui/Section'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { contato, linhasDePecas } from '../data/site'

/* Campos do pedido. `obrigatorio` é só o carro: sem ele não dá para
   identificar peça nenhuma. O resto ajuda mas não trava o envio. */
const CAMPOS = [
  {
    id: 'carro',
    rotulo: 'Carro, ano e motor',
    dica: 'Ex.: Gol 1.6 2014',
    obrigatorio: true,
    tipo: 'texto',
  },
  {
    id: 'problema',
    rotulo: 'O que está acontecendo?',
    dica: 'Ex.: barulho na frente ao passar em buraco',
    tipo: 'area',
  },
]

/**
 * Bloco "Pedir peça".
 *
 * Não é formulário de verdade: não envia nada para servidor nenhum, não
 * guarda dado e não precisa de back-end. Ele só monta o texto e abre o
 * WhatsApp já preenchido.
 *
 * A razão de existir: o atendente recebia "Olá, gostaria de um orçamento" e
 * tinha que puxar tudo na conversa. Agora chega "Gol 1.6 2014 — barulho na
 * frente ao passar em buraco — suspensão e direção".
 */
export default function Pedido() {
  const [valores, setValores] = useState({ carro: '', problema: '', linha: '' })
  const [tentouEnviar, setTentouEnviar] = useState(false)

  const carroPreenchido = valores.carro.trim().length > 0

  function montarMensagem() {
    const partes = ['Olá! Preciso de uma peça.', '']
    partes.push(`*Carro:* ${valores.carro.trim()}`)
    if (valores.linha) partes.push(`*Linha:* ${valores.linha}`)
    if (valores.problema.trim()) partes.push(`*Situação:* ${valores.problema.trim()}`)
    partes.push('', 'Podem me passar preço e disponibilidade?')
    return partes.join('\n')
  }

  const link = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(montarMensagem())}`

  function alterar(id, valor) {
    setValores((v) => ({ ...v, [id]: valor }))
  }

  return (
    <Section id="pedido" fundo="claro">
      <SectionHeading
        tag="Pedir peça"
        titulo="Diga o que está acontecendo — a gente descobre a peça"
        descricao="Você não precisa saber o nome nem o código. Preencha o que souber e a mensagem vai pronta para o nosso WhatsApp."
        centralizado
      />

      <Reveal className="mx-auto mt-12 max-w-2xl">
        <div className="rounded-marca-lg border border-borda bg-white p-7 shadow-suave sm:p-9">
          <div className="space-y-5">
            {CAMPOS.map((campo) => {
              const faltando = campo.obrigatorio && tentouEnviar && !carroPreenchido
              const Elemento = campo.tipo === 'area' ? 'textarea' : 'input'

              return (
                <div key={campo.id}>
                  <label
                    htmlFor={campo.id}
                    className="mb-2 block text-sm font-semibold text-texto"
                  >
                    {campo.rotulo}
                    {campo.obrigatorio && <span className="ml-1 text-teal">*</span>}
                  </label>

                  <Elemento
                    id={campo.id}
                    type={campo.tipo === 'area' ? undefined : 'text'}
                    rows={campo.tipo === 'area' ? 3 : undefined}
                    value={valores[campo.id]}
                    onChange={(e) => alterar(campo.id, e.target.value)}
                    placeholder={campo.dica}
                    aria-invalid={faltando || undefined}
                    aria-describedby={faltando ? `${campo.id}-erro` : undefined}
                    className={`w-full rounded-marca border bg-white px-4 py-3 text-texto placeholder:text-texto-fraco/60 focus:border-teal focus:outline-none ${
                      faltando ? 'border-red-400' : 'border-borda'
                    }`}
                  />

                  {faltando && (
                    <p id={`${campo.id}-erro`} className="mt-2 text-sm text-red-600">
                      Sem o carro a gente não consegue confirmar qual peça serve.
                    </p>
                  )}
                </div>
              )
            })}

            <div>
              <label htmlFor="linha" className="mb-2 block text-sm font-semibold text-texto">
                Que parte do carro? <span className="font-normal text-texto-fraco">(se souber)</span>
              </label>
              <select
                id="linha"
                value={valores.linha}
                onChange={(e) => alterar('linha', e.target.value)}
                className="w-full rounded-marca border border-borda bg-white px-4 py-3 text-texto focus:border-teal focus:outline-none"
              >
                <option value="">Não sei / não está na lista</option>
                {linhasDePecas.map((linha) => (
                  <option key={linha.nome} value={linha.nome}>
                    {linha.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-7">
            {carroPreenchido ? (
              <Button href={link} variante="zap" tamanho="lg" className="w-full">
                <MessageCircle className="size-5" />
                Enviar no WhatsApp
              </Button>
            ) : (
              // Enquanto falta o carro o botão não vira link: assim ele
              // avisa o que falta em vez de abrir uma conversa incompleta.
              <Button
                variante="zap"
                tamanho="lg"
                className="w-full"
                onClick={() => setTentouEnviar(true)}
              >
                <MessageCircle className="size-5" />
                Enviar no WhatsApp
              </Button>
            )}

            <p className="mt-4 text-center text-sm text-texto-fraco">
              Abre o WhatsApp com o texto pronto. Você ainda pode revisar antes de
              enviar — e anexar a foto da peça velha, que ajuda muito.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
