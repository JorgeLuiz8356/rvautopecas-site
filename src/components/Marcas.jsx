import { useState } from 'react'
import Marquee from './ui/Marquee'
import Reveal from './ui/Reveal'
import { marcas } from '../data/site'
import { logoDaMarca } from '../lib/logosMarcas'

/**
 * Uma marca na faixa. Se existe arquivo de logo em src/assets/marcas/,
 * mostra a imagem; se não, mostra o nome escrito — que é conteúdo de
 * verdade, não espaço reservado. Se o arquivo estiver corrompido, volta
 * sozinho para o nome.
 *
 * O <li> quem põe é o Marquee, para ele cuidar das chaves das duas cópias.
 */
function ItemMarca({ nome }) {
  const [falhou, setFalhou] = useState(false)
  const logo = logoDaMarca(nome)

  if (logo && !falhou) {
    return (
      <img
        src={logo}
        alt={nome}
        loading="lazy"
        onError={() => setFalhou(true)}
        className="h-8 w-auto opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
      />
    )
  }

  return (
    <span className="whitespace-nowrap font-titulo text-xl font-bold text-texto-fraco/50 transition-colors duration-300 hover:text-azul">
      {nome}
    </span>
  )
}

export default function Marcas() {
  return (
    <Reveal className="mt-20 border-t border-borda pt-12">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-texto-fraco">
        Trabalhamos com quem o mecânico confia
      </p>

      <Marquee
        className="mt-8"
        duracao={45}
        fundo="from-white"
        itens={marcas}
        renderItem={(nome) => <ItemMarca nome={nome} />}
      />
    </Reveal>
  )
}
