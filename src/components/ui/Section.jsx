import Container from './Container'
import { cn } from '../../lib/cn'

/** Casca de seção: id da âncora, respiro vertical e fundo. */
export default function Section({ id, fundo = 'branco', className, children }) {
  const fundos = {
    branco: 'bg-white',
    claro: 'bg-claro',
    escuro: 'bg-azul-noite text-white',
  }

  return (
    <section id={id} className={cn('py-20 sm:py-28', fundos[fundo], className)}>
      <Container>{children}</Container>
    </section>
  )
}
