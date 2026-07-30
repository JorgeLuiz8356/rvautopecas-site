import { useState } from 'react'
import { ExternalLink, MapPin, Play } from 'lucide-react'
import { contato } from '../data/site'

/**
 * Mapa que só carrega quando o visitante pede.
 *
 * O iframe do Google Maps instala cookies e entrega o IP de quem visita
 * assim que a página abre — mesmo de quem nunca olhou o mapa. Aqui ele
 * começa como um cartão do próprio site: nenhuma conexão externa acontece
 * até o clique. É o padrão de "dois cliques", que atende a LGPD sem tirar
 * o mapa de quem quer ver.
 *
 * Quem só quer a rota tem o link direto, que também não carrega nada.
 */
export default function MapaSobDemanda() {
  const [carregado, setCarregado] = useState(false)
  const { endereco } = contato

  if (carregado) {
    return (
      <iframe
        src={contato.mapa}
        title={`Mapa: ${endereco.rua}`}
        loading="lazy"
        referrerPolicy="no-referrer"
        allowFullScreen
        className="h-[340px] w-full lg:h-[420px]"
      />
    )
  }

  return (
    <div className="flex h-[340px] w-full flex-col items-center justify-center gap-5 bg-white/5 p-8 text-center lg:h-[420px]">
      <span className="grid size-14 place-items-center rounded-full bg-teal/15 text-teal-claro">
        <MapPin className="size-7" />
      </span>

      <div>
        <p className="font-titulo text-lg font-bold text-white">{endereco.rua}</p>
        <p className="mt-1 text-sm text-texto-luz">
          {endereco.bairro} — {endereco.cidade}, {endereco.estado}
          <br />
          CEP {endereco.cep}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setCarregado(true)}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-claro"
        >
          <Play className="size-4" />
          Carregar o mapa
        </button>

        <a
          href={contato.rota}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-texto-luz transition-colors hover:border-teal-claro hover:text-white"
        >
          Traçar rota
          <ExternalLink className="size-4" />
        </a>
      </div>

      <p className="max-w-xs text-xs leading-relaxed text-texto-luz/60">
        O mapa é do Google e instala cookies. Por isso ele só carrega se você
        clicar.
      </p>
    </div>
  )
}
