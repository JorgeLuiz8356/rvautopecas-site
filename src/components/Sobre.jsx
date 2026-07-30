import { Quote } from 'lucide-react'
import Section from './ui/Section'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Card from './ui/Card'
import Marcas from './Marcas'
import { contato, empresa, sobre } from '../data/site'

export default function Sobre() {
  return (
    <Section id="empresa" fundo="branco">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* História */}
        <div>
          <SectionHeading
            tag="A empresa"
            titulo="Uma loja que você reconhece de longe"
            className="max-w-none"
          />
          <div className="mt-6 space-y-5 text-lg text-texto-fraco">
            {sobre.historia.map((paragrafo) => (
              <p key={paragrafo.slice(0, 30)}>{paragrafo}</p>
            ))}
            <p>
              A RV é loja de peças — não fazemos serviço nem instalação. O que a gente faz bem é
              achar a peça certa, com a marca certa, pelo preço que cabe no seu bolso.
            </p>
          </div>
        </div>

        {/* Foto da fachada */}
        <Reveal delay={0.1} className="relative">
          {/* 3:2 é a proporção de foto de celular deitado — é o que você vai
              tirar. O 4:3 anterior cortava quase dois terços da largura da
              fachada. width/height evitam o "pulo" do layout ao carregar. */}
          <div className="overflow-hidden rounded-marca-lg shadow-alta">
            <img
              src="./img/fachada.jpg"
              alt={`Fachada da ${empresa.nome} na ${contato.endereco.rua}`}
              loading="lazy"
              width="1200"
              height="800"
              className="aspect-3/2 w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-marca bg-azul px-6 py-4 text-white shadow-alta sm:-left-8">
            <span className="block font-titulo text-3xl font-extrabold leading-none">
              {empresa.anos} anos
            </span>
            <span className="text-sm text-texto-luz">na Zona Norte de São Paulo</span>
          </div>
        </Reveal>
      </div>

      {/* Missão */}
      <Reveal className="mt-24">
        <div className="relative overflow-hidden rounded-marca-lg bg-claro p-8 sm:p-12">
          <Quote
            className="absolute -right-4 -top-4 size-32 text-teal/10"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <p className="mb-3 text-[0.76rem] font-bold uppercase tracking-[0.14em] text-teal">
            Nossa missão
          </p>
          <p className="max-w-3xl font-titulo text-2xl font-semibold leading-snug text-azul-esc sm:text-3xl">
            {sobre.missao}
          </p>
        </div>
      </Reveal>

      {/* Valores */}
      <div className="mt-24">
        <SectionHeading
          tag="Nossos valores"
          titulo="O que não muda, mesmo com a loja crescendo"
          centralizado
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sobre.valores.map((valor, i) => {
            const Icone = valor.icone
            return (
              <Reveal key={valor.titulo} delay={i * 0.08}>
                <Card className="h-full p-7">
                  <div className="mb-5 grid size-12 place-items-center rounded-marca bg-teal-fraco text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                    <Icone className="size-6" />
                  </div>
                  <h3 className="mb-2 text-lg text-texto">{valor.titulo}</h3>
                  <p className="text-[0.95rem] text-texto-fraco">{valor.texto}</p>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>

      {/* Faixa com as marcas, rolando sem parar */}
      <Marcas />
    </Section>
  )
}
