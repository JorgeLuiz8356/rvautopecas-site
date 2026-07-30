import { cn } from '../../lib/cn'

/**
 * Faixa que rola sem parar, em laço contínuo.
 *
 * A lista entra duas vezes lado a lado: a primeira é a de verdade, a
 * segunda é cópia escondida do leitor de tela. A animação desloca metade
 * da largura, então quando termina a segunda cópia já ocupou o lugar da
 * primeira e não aparece emenda.
 *
 * Recebe os dados (`itens`) e uma função que diz como desenhar cada um
 * (`renderItem`) em vez de receber os elementos prontos. Isso é de
 * propósito: as duas cópias precisam gerar as próprias chaves do React,
 * e reaproveitar os mesmos elementos em dois pais gera aviso de chave
 * duplicada.
 *
 * - `duracao`  segundos de uma volta inteira. Mais alto, mais devagar.
 * - `fundo`    cor do fade das pontas; tem que bater com o fundo da seção.
 *
 * Para quem pediu menos animação no sistema, a regra de
 * prefers-reduced-motion no index.css deixa a faixa parada.
 */
export default function Marquee({
  itens,
  renderItem,
  duracao = 40,
  fundo = 'from-white',
  className,
}) {
  // O pr-* repete o espaçamento do gap para o vão entre a última marca de
  // uma cópia e a primeira da seguinte ficar igual aos outros.
  const trilha = 'flex shrink-0 items-center gap-x-14 pr-14'

  const copia = (escondida) => (
    <ul className={trilha} aria-hidden={escondida || undefined}>
      {itens.map((item, i) => (
        <li key={`${escondida ? 'copia' : 'real'}-${i}`} className="flex shrink-0 items-center">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  )

  return (
    <div className={cn('group relative overflow-hidden', className)}>
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{ '--marquee-duracao': `${duracao}s` }}
      >
        {copia(false)}
        {copia(true)}
      </div>

      {/* Fade nas pontas: a faixa parece sumir na borda em vez de ser cortada */}
      <div
        className={cn(
          'pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r to-transparent',
          fundo,
        )}
        aria-hidden="true"
      />
      <div
        className={cn(
          'pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l to-transparent',
          fundo,
        )}
        aria-hidden="true"
      />
    </div>
  )
}
