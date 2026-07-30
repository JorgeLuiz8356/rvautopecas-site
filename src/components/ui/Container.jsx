import { cn } from '../../lib/cn'

/** Largura máxima e respiro lateral iguais em todas as seções. */
export default function Container({ as: Tag = 'div', className, children }) {
  return <Tag className={cn('mx-auto w-full max-w-[1200px] px-5 sm:px-8', className)}>{children}</Tag>
}
