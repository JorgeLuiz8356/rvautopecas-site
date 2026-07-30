import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { cn } from '../../lib/cn'

/**
 * Abas no estilo da Vercel: um realce que acompanha o mouse e uma barrinha
 * que desliza para o item selecionado.
 *
 * Funciona dos dois jeitos:
 * - solto: não passe `activeTab` e ele guarda a seleção por conta própria.
 * - controlado: passe `activeTab` e reaja no `onTabChange`.
 *
 * Cada aba é { id, label }. Se você mostrar conteúdo abaixo das abas,
 * passe também `painelId` apontando para o id do bloco — é o que liga a
 * aba ao painel para o leitor de tela.
 */
export default function Tabs({ tabs, activeTab, onTabChange, className, ...props }) {
  const refs = useRef([])
  const linhaRef = useRef(null)

  const controlado = activeTab != null
  const [interno, setInterno] = useState(tabs[0]?.id)
  const idAtivo = controlado ? activeTab : interno

  // Se o id não existir na lista, cai na primeira aba em vez de sumir a barra.
  const achado = tabs.findIndex((t) => t.id === idAtivo)
  const indiceAtivo = achado === -1 ? 0 : achado

  const [sobreVoo, setSobreVoo] = useState(null)
  const [barra, setBarra] = useState(null)
  const [realce, setRealce] = useState(null)

  const medir = useCallback((indice) => {
    const el = refs.current[indice]
    if (!el) return null
    return { left: el.offsetLeft, width: el.offsetWidth }
  }, [])

  // useLayoutEffect e não useEffect: mede e posiciona antes de pintar na
  // tela, senão a barra aparece um quadro no lugar errado.
  useLayoutEffect(() => {
    setBarra(medir(indiceAtivo))
  }, [indiceAtivo, medir, tabs])

  // Largura muda por vários motivos além de rolar a tela: girar o celular,
  // a fonte do Google terminar de carregar, o texto da aba mudar. O
  // ResizeObserver cobre todos de uma vez.
  useEffect(() => {
    const alvo = linhaRef.current
    if (!alvo) return
    const observador = new ResizeObserver(() => setBarra(medir(indiceAtivo)))
    observador.observe(alvo)
    return () => observador.disconnect()
  }, [indiceAtivo, medir])

  useLayoutEffect(() => {
    if (sobreVoo === null) return
    setRealce(medir(sobreVoo))
  }, [sobreVoo, medir])

  function selecionar(indice) {
    const aba = tabs[indice]
    if (!aba) return
    if (!controlado) setInterno(aba.id)
    onTabChange?.(aba.id)
  }

  // Seta troca de aba, Home e End vão para as pontas — é o que se espera
  // de uma lista de abas quando se navega pelo teclado.
  function aoTeclar(evento) {
    const ultimo = tabs.length - 1
    let destino = null

    if (evento.key === 'ArrowRight') destino = indiceAtivo === ultimo ? 0 : indiceAtivo + 1
    else if (evento.key === 'ArrowLeft') destino = indiceAtivo === 0 ? ultimo : indiceAtivo - 1
    else if (evento.key === 'Home') destino = 0
    else if (evento.key === 'End') destino = ultimo

    if (destino === null) return
    evento.preventDefault()
    selecionar(destino)
    refs.current[destino]?.focus()
  }

  return (
    <div className={cn('relative', className)} {...props}>
      <div ref={linhaRef} className="relative flex items-center gap-1.5" role="tablist" onKeyDown={aoTeclar}>
        {/* Realce que segue o mouse */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 rounded-lg bg-azul/10 transition-all duration-300 ease-out"
          style={{
            left: realce ? `${realce.left}px` : 0,
            width: realce ? `${realce.width}px` : 0,
            opacity: sobreVoo !== null && realce ? 1 : 0,
          }}
        />

        {/* Barrinha da aba selecionada */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-1.5 h-0.5 rounded-full bg-teal transition-all duration-300 ease-out"
          style={{
            left: barra ? `${barra.left}px` : 0,
            width: barra ? `${barra.width}px` : 0,
            opacity: barra ? 1 : 0,
          }}
        />

        {tabs.map((aba, indice) => {
          const ativa = indice === indiceAtivo
          return (
            <button
              key={aba.id}
              type="button"
              role="tab"
              aria-selected={ativa}
              aria-controls={aba.painelId}
              // Só a aba ativa entra na ordem do Tab; as outras se alcançam
              // pelas setas. É o padrão de lista de abas.
              tabIndex={ativa ? 0 : -1}
              ref={(el) => {
                // Corpo com chaves de propósito: no React 19 um ref que
                // devolve valor é tratado como função de limpeza e dá erro.
                refs.current[indice] = el
              }}
              onMouseEnter={() => setSobreVoo(indice)}
              onMouseLeave={() => setSobreVoo(null)}
              onFocus={() => setSobreVoo(indice)}
              onBlur={() => setSobreVoo(null)}
              onClick={() => selecionar(indice)}
              className={cn(
                'relative cursor-pointer whitespace-nowrap rounded-lg px-4 py-2.5',
                'text-sm font-medium leading-5 transition-colors duration-300',
                ativa ? 'text-azul-esc' : 'text-texto-fraco hover:text-azul',
              )}
            >
              {aba.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
