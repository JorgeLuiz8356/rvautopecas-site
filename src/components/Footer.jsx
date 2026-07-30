import { MessageCircle, Navigation, Phone } from 'lucide-react'
import Container from './ui/Container'
import Reveal from './ui/Reveal'
import MapaSobDemanda from './MapaSobDemanda'
import {
  contato,
  empresa,
  infoContato,
  linkWhatsApp,
  navegacao,
  redesSociais,
} from '../data/site'

const linksAtendimento = [
  { rotulo: 'Pedir peça', href: '#pedido' },
  { rotulo: 'Linhas de peças', href: '#pecas' },
  { rotulo: 'Dúvidas frequentes', href: '#duvidas' },
  { rotulo: 'Como chegar', href: contato.rota },
  { rotulo: 'Ligar para a loja', href: `tel:${contato.telefone}` },
]

/** Um cartão de contato do topo do rodapé. */
function CartaoContato({ icone: Icone, titulo, linhas, href, destaque = false, className = '' }) {
  const conteudo = (
    <>
      <span
        className={`grid size-11 shrink-0 place-items-center rounded-marca ${
          destaque ? 'bg-zap text-white' : 'bg-white/10 text-teal-claro'
        }`}
      >
        <Icone className="size-5" />
      </span>
      <span className="min-w-0">
        <strong className="block text-[0.95rem] font-semibold text-white">{titulo}</strong>
        {/* break-words é essencial aqui: o e-mail é uma palavra só, sem
            espaço, e sem ponto de quebra o navegador desenha o texto para
            fora do cartão em vez de passar para a linha de baixo. */}
        {linhas.map((linha) => (
          <span key={linha} className="block break-words text-sm text-texto-luz">
            {linha}
          </span>
        ))}
      </span>
    </>
  )

  const classe = `flex items-start gap-4 rounded-marca-lg border border-white/10 bg-white/5 p-5 transition-colors duration-300 ${className}`

  if (href) {
    const externo = href.startsWith('http')
    return (
      <a
        href={href}
        className={`${classe} hover:border-teal-claro/40 hover:bg-white/10`}
        {...(externo && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {conteudo}
      </a>
    )
  }

  return <div className={classe}>{conteudo}</div>
}

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer id="contato" className="bg-azul-noite text-white">
      <Container className="py-20">
        {/* Contatos */}
        <Reveal>
          <p className="mb-3 inline-flex items-center gap-2 text-[0.76rem] font-bold uppercase tracking-[0.14em] text-verde">
            <span className="size-2 rounded-full bg-verde animate-pulso-marca" aria-hidden="true" />
            Fale com a gente
          </p>
          <h2 className="mb-10 text-[clamp(1.7rem,3.4vw,2.4rem)] text-white">Onde estamos</h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <Reveal className="grid gap-4 sm:grid-cols-2">
            <CartaoContato
              icone={MessageCircle}
              titulo="WhatsApp"
              linhas={[contato.whatsappVisivel]}
              href={linkWhatsApp()}
              destaque
            />
            <CartaoContato
              icone={Phone}
              titulo="Telefone"
              linhas={[contato.telefoneVisivel]}
              href={`tel:${contato.telefone}`}
            />
            {infoContato.map((info) => (
              <CartaoContato
                key={info.titulo}
                icone={info.icone}
                titulo={info.titulo}
                linhas={info.linhas}
                href={info.href}
              />
            ))}
            {/* Ocupa as duas colunas: são 9 cartões numa grade de 2, e sem
                isto o último sobraria sozinho deixando um buraco à direita.
                Como é o cartão de ação, ganhar a linha inteira cai bem. */}
            <CartaoContato
              icone={Navigation}
              titulo="Como chegar"
              linhas={['Traçar rota no Google Maps']}
              href={contato.rota}
              className="sm:col-span-2"
            />
          </Reveal>

          <Reveal delay={0.1} className="overflow-hidden rounded-marca-lg border border-white/10">
            <MapaSobDemanda />
          </Reveal>
        </div>

        {/* Navegação, redes e marca */}
        <div className="mt-20 grid gap-10 border-t border-white/10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="flex items-center gap-3">
              <img src="./img/logo.png" alt="" className="h-11 w-auto" />
              <span className="flex flex-col leading-none">
                <span className="font-titulo text-xl font-extrabold text-white">RV</span>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-texto-luz">
                  Autopeças
                </span>
              </span>
            </span>
            <p className="mt-5 text-sm text-texto-luz">
              {empresa.slogan}. Loja de autopeças no {contato.endereco.bairro}, Zona Norte de São
              Paulo, desde {empresa.desde}.
            </p>
          </div>

          <nav aria-label="Navegar">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navegar
            </h3>
            <ul className="space-y-2.5">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-texto-luz transition-colors hover:text-teal-claro"
                  >
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Atendimento">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Atendimento
            </h3>
            <ul className="space-y-2.5">
              {linksAtendimento.map((item) => (
                <li key={item.rotulo}>
                  <a
                    href={item.href}
                    {...(item.href.startsWith('http') && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                    className="text-sm text-texto-luz transition-colors hover:text-teal-claro"
                  >
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Siga a loja
            </h3>
            <div className="flex gap-3">
              {redesSociais.map((rede) => {
                const Icone = rede.icone
                return (
                  <a
                    key={rede.nome}
                    href={rede.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={rede.nome}
                    className="grid size-11 place-items-center rounded-full border border-white/15 text-texto-luz transition-colors duration-300 hover:border-teal-claro hover:bg-teal hover:text-white"
                  >
                    <Icone className="size-5" />
                  </a>
                )
              })}
            </div>
            <p className="mt-6 text-sm text-texto-luz">
              {contato.endereco.rua}
              <br />
              {contato.endereco.bairro} — {contato.endereco.cidade}, {contato.endereco.estado}
              <br />
              Seg a sex 8h–18h · Sáb 8h–13h
            </p>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-sm text-texto-luz sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} {empresa.nome} · CNPJ {empresa.cnpj}
          </p>
          <p>Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  )
}
