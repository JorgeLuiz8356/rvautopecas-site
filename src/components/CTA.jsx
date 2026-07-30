import { MessageCircle, Phone } from 'lucide-react'
import Container from './ui/Container'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import { contato, linkWhatsApp, pagamento } from '../data/site'

export default function CTA() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-marca-lg bg-gradient-to-br from-azul-esc via-azul to-teal px-8 py-14 text-center shadow-alta sm:px-16 sm:py-20">
            {/* Textura discreta de bolinhas */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] text-white">
                Precisa de uma peça hoje?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
                Manda o modelo do carro e o que está acontecendo. A gente confirma a peça, passa o
                preço e entrega em até 1 hora.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button
                  href={linkWhatsApp('Olá, gostaria de solicitar um orçamento')}
                  variante="zap"
                  tamanho="lg"
                >
                  <MessageCircle className="size-5" />
                  Solicitar Orçamento
                </Button>
                <Button href={`tel:${contato.telefone}`} variante="vidro" tamanho="lg">
                  <Phone className="size-5" />
                  {contato.telefoneVisivel}
                </Button>
              </div>

              <p className="mt-8 text-sm text-white/70">
                Segunda a sexta das 8h às 18h · Sábado das 8h às 13h
              </p>
              <p className="mt-2 text-sm text-white/70">
                {pagamento.resumo} · {contato.estacionamento}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
