/* =====================================================================
   Proteção contra clickjacking (site embutido em iframe de terceiro)
   ---------------------------------------------------------------------
   A defesa correta é o cabeçalho HTTP `X-Frame-Options: DENY` ou a
   diretiva CSP `frame-ancestors 'none'`. Nenhuma das duas é possível
   aqui: o GitHub Pages não envia cabeçalhos personalizados, e
   `frame-ancestors` é ignorado por especificação quando entregue via
   <meta> — só vale como cabeçalho.

   Esta é a mitigação possível, e ela tem um limite importante que foi
   verificado na prática:

   O truque clássico de "escapar do iframe" com
   `window.top.location = ...` NÃO funciona mais. O navegador bloqueia
   navegação da janela do topo vinda de um iframe de outra origem quando
   não há gesto do usuário — e o pior: bloqueia em silêncio, sem lançar
   erro. Confiar nele deixaria o site desprotegido achando que está
   protegido.

   Por isso a ordem aqui é invertida: primeiro esconde o conteúdo (o que
   sempre funciona, porque é dentro do nosso próprio documento), e só
   depois tenta escapar como bônus. Assim, mesmo com a navegação
   bloqueada, o visitante não interage com uma cópia sobreposta do site.

   A correção definitiva continua sendo migrar para uma hospedagem que
   envie cabeçalhos — deploy/_headers já está pronto para isso.
   ===================================================================== */

function montarAviso() {
  const aviso = document.createElement('div')
  aviso.setAttribute('data-antienquadramento', '')
  aviso.setAttribute(
    'style',
    'position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;' +
      'padding:2rem;text-align:center;background:#0c2140;color:#fff;' +
      'font-family:system-ui,-apple-system,sans-serif;line-height:1.6',
  )
  aviso.innerHTML =
    '<div><strong style="display:block;font-size:1.25rem;margin-bottom:.5rem">' +
    'Esta página está sendo exibida dentro de outro site</strong>' +
    '<span style="opacity:.85">Por segurança, o conteúdo foi ocultado. ' +
    'Acesse o site verdadeiro em:</span><br>' +
    '<a href="https://rvautopecas.com.br/" target="_blank" rel="noopener noreferrer" ' +
    'style="display:inline-block;margin-top:1rem;color:#00c5ae;font-weight:600">' +
    'rvautopecas.com.br</a></div>'
  return aviso
}

export function protegerContraEnquadramento() {
  // Mesma janela: não está em iframe nenhum, nada a fazer.
  if (window.top === window.self) return

  // 1) Esconde o conteúdo. Isto acontece dentro do nosso documento, então
  //    nunca é bloqueado — é a parte da defesa em que dá para confiar.
  const aplicar = () => {
    const raiz = document.getElementById('root')
    if (raiz) raiz.style.display = 'none'
    document.body.appendChild(montarAviso())
  }

  if (document.body) aplicar()
  else document.addEventListener('DOMContentLoaded', aplicar)

  // 2) Tenta sair do iframe. Costuma ser bloqueado sem gesto do usuário,
  //    e o bloqueio é silencioso — por isso é bônus, não a defesa.
  try {
    window.top.location.replace(window.self.location.href)
  } catch {
    /* esperado quando o iframe tem sandbox restritivo */
  }
}
