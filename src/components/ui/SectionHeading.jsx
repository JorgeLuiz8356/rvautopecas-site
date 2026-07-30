import { cn } from '../../lib/cn'
import Reveal from './Reveal'

/** Etiqueta pequena com o pontinho verde que pulsa. */
export function Tag({ children, claro = false }) {
  return (
    <p
      className={cn(
        'mb-4 inline-flex items-center gap-2 text-[0.76rem] font-bold uppercase tracking-[0.14em]',
        claro ? 'text-verde' : 'text-teal',
      )}
    >
      <span className="size-2 rounded-full bg-verde animate-pulso-marca" aria-hidden="true" />
      {children}
    </p>
  )
}

/** Topo padrão de seção: etiqueta + título + linha de apoio. */
export default function SectionHeading({
  tag,
  titulo,
  descricao,
  centralizado = false,
  claro = false,
  className,
}) {
  return (
    <Reveal className={cn('max-w-2xl', centralizado && 'mx-auto text-center', className)}>
      {tag && <Tag claro={claro}>{tag}</Tag>}
      <h2
        className={cn(
          'text-[clamp(1.9rem,3.8vw,2.8rem)]',
          claro ? 'text-white' : 'text-texto',
        )}
      >
        {titulo}
      </h2>
      {descricao && (
        <p className={cn('mt-4 text-lg', claro ? 'text-texto-luz' : 'text-texto-fraco')}>
          {descricao}
        </p>
      )}
    </Reveal>
  )
}
