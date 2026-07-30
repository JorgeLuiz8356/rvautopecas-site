import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base` fica relativo para o site funcionar em qualquer pasta
// (inclusive publicado no GitHub Pages dentro de /docs).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],

  // host: true faz o servidor aceitar conexão de outros aparelhos da mesma
  // rede (celular, outro computador da loja), e não só deste computador.
  // Ao subir, o terminal mostra o endereço em "Network".
  //
  // strictPort: true é o que garante que o endereço nunca muda. Sem ele, se
  // a 5173 estiver ocupada o Vite sobe na 5174 caladinho e o link que você
  // compartilhou para de funcionar. Com ele, o servidor recusa a subir e
  // avisa — melhor errar alto do que trocar a porta por baixo.
  server: {
    host: true,
    port: 5173,
    strictPort: true,

    // Libera o acesso pelo NOME do computador, além do IP. O nome não muda
    // quando o roteador troca o IP, então é o endereço mais estável.
    // Sem isto o Vite responde 403 ("host not allowed") — ele só aceita
    // localhost e IPs por padrão, como proteção contra DNS rebinding.
    // As duas grafias entram porque o navegador manda o host em minúsculas.
    allowedHosts: ['TDA407', 'tda407', 'TDA407.local', 'tda407.local'],
  },

  // Mesma coisa para o `npm run preview`, que serve a versão final.
  preview: {
    host: true,
    port: 4173,
    strictPort: true,
    allowedHosts: ['TDA407', 'tda407', 'TDA407.local', 'tda407.local'],
  },

  build: {
    outDir: 'dist',
  },
})
