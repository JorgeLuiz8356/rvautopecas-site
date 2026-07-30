/* =====================================================================
   Logos das marcas — descoberta automática
   ---------------------------------------------------------------------
   Qualquer arquivo salvo em src/assets/marcas/ é encontrado sozinho, sem
   precisar mexer em código nenhum. O nome do arquivo é que faz a ligação
   com a marca:

     src/assets/marcas/bosch.svg          -> marca "Bosch"
     src/assets/marcas/magnetimarelli.png -> marca "Magneti Marelli"
     src/assets/marcas/frasle.svg         -> marca "Fras-le"
     src/assets/marcas/sabo.svg           -> marca "Sabó"

   Sem arquivo, a marca aparece com o nome escrito. Nada quebra.
   ===================================================================== */

// O Vite lê a pasta na hora do build e já devolve a URL final de cada
// arquivo (com hash, então o navegador nunca serve versão velha do cache).
const arquivos = import.meta.glob('../assets/marcas/*.{svg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

/**
 * Reduz o nome a letras e números, para o nome da marca casar com o nome
 * do arquivo: "Magneti Marelli" e "Fras-le" viram "magnetimarelli" e
 * "frasle".
 *
 * O normalize('NFD') vem primeiro de propósito: ele separa o "ó" em "o" +
 * acento, então a letra sobrevive à limpeza seguinte. Sem ele, "Sabó"
 * perderia o "o" inteiro e viraria "sab".
 */
function apelido(texto) {
  return texto
    .normalize('NFD')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
}

// Mapa pronto: { bosch: '/assets/bosch-a1b2c3.svg', ... }
const porApelido = Object.fromEntries(
  Object.entries(arquivos).map(([caminho, url]) => {
    const nomeArquivo = caminho.split('/').pop().replace(/\.[^.]+$/, '')
    return [apelido(nomeArquivo), url]
  }),
)

/** Devolve a URL do logo da marca, ou null se ainda não tem arquivo. */
export function logoDaMarca(nome) {
  return porApelido[apelido(nome)] ?? null
}

/** Quantos logos já foram instalados — útil para conferir no console. */
export const totalDeLogos = Object.keys(porApelido).length
