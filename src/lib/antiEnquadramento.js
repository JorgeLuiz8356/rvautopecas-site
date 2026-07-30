/* =====================================================================
   Proteção contra clickjacking (site embutido em iframe de terceiro)
   ---------------------------------------------------------------------
   A defesa correta é o cabeçalho HTTP `X-Frame-Options: DENY` ou a
   diretiva CSP `frame-ancestors 'none'`. Nenhuma das duas é possível
   aqui: o GitHub Pages não envia cabeçalhos personalizados, e
   `frame-ancestors` é ignorado por especificação quando entregue via
   <meta> — só vale como cabeçalho.

   Então isto é a mitigação possível, não a ideal. Ela cobre o caso comum
   (página maliciosa embute o site e sobrepõe elementos para roubar
   cliques), mas pode ser neutralizada por um iframe com
   `sandbox="allow-scripts"` sem `allow-top-navigation`, que impede o
   próprio script de escapar.

   Ou seja: isto reduz o risco, não o elimina. A correção definitiva é
   migrar para uma hospedagem que envie os cabeçalhos — o arquivo
   deploy/_headers do repositório já está pronto para isso.
   ===================================================================== */

export function protegerContraEnquadramento() {
  // Mesma janela: não está em iframe nenhum, nada a fazer.
  if (window.top === window.self) return

  try {
    // Navegar a janela do topo é permitido mesmo entre origens
    // diferentes (ler o endereço dela é que não é). Se o iframe estiver
    // com sandbox restritivo, esta linha lança e caímos no catch.
    window.top.location.replace(window.self.location.href)
  } catch {
    // Não conseguimos escapar. Então escondemos o conteúdo, para o
    // visitante não interagir com uma cópia sobreposta do site, e
    // deixamos um aviso com o endereço verdadeiro.
    const aviso = document.createElement('div')
    aviso.setAttribute(
      'style',
      'position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;' +
        'padding:2rem;text-align:center;background:#0c2140;color:#fff;' +
        "font-family:system-ui,sans-serif;line-height:1.6",
    )
    aviso.innerHTML =
      '<div><strong style="display:block;font-size:1.25rem;margin-bottom:.5rem">' +
      'Esta página está sendo exibida dentro de outro site</strong>' +
      '<span style="opacity:.85">Por segurança, o conteúdo foi ocultado. ' +
      'Acesse diretamente:</span><br>' +
      '<a href="https://rvautopecas.com.br/" target="_top" ' +
      'style="display:inline-block;margin-top:1rem;color:#00c5ae;font-weight:600">' +
      'rvautopecas.com.br</a></div>'

    // Espera o body existir — o script roda antes do React desenhar.
    if (document.body) document.body.appendChild(aviso)
    else document.addEventListener('DOMContentLoaded', () => document.body.appendChild(aviso))
  }
}
