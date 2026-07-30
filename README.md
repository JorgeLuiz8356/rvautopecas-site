# Site institucional — RV Auto Peças

Site de uma página só, feito em **React + Vite + Tailwind CSS**, com animações
em **Framer Motion** e ícones **Lucide**.

## Como rodar

```bash
cd site
npm install
npm run dev
```

O terminal mostra o endereço (normalmente `http://localhost:5173`).

Para gerar a versão final, que é o que vai pro ar:

```bash
npm run build
```

Os arquivos prontos aparecem em `site/dist`.

## Onde mexer no conteúdo

Quase tudo o que é texto, telefone, endereço, produto ou depoimento está em
um arquivo só:

**`src/data/site.js`**

Os componentes não têm texto escrito dentro deles — todos leem daqui. Mudou
o telefone ali, muda no site inteiro.

O que já está preenchido com dado real da loja:

| O que | Valor |
| --- | --- |
| Endereço | Av. Engenheiro Caetano Álvares, 5202 — Imirim, São Paulo/SP |
| Telefone | (11) 4210-4600 |
| WhatsApp | (11) 91938-0470 |
| Horário | Seg a sex 8h–18h · Sáb 8h–13h · Dom fechado |
| CNPJ | 27.499.963/0001-38 |

Ainda falta preencher (está com valor de exemplo):

- **E-mail** — em `contato.email`
- **Instagram e Facebook** — em `redesSociais`, os links estão na página inicial das redes
- **Depoimentos** — em `depoimentos`, são exemplos até você colocar os reais

## Segurança e privacidade

O site não faz **nenhuma** conexão externa sozinho. Verificado no navegador.

- **Fontes servidas daqui.** Poppins e Inter estão em `src/assets/fonts/`, não
  vêm do Google. Ou seja, o IP de quem visita não sai do site. Para atualizar,
  veja `src/fontes.css`.
- **Mapa só com clique.** O iframe do Google Maps instala cookies, então ele
  começa como um cartão comum e só carrega se o visitante pedir
  (`src/components/MapaSobDemanda.jsx`).
- **Content-Security-Policy** no `index.html`: o navegador recusa carregar
  qualquer coisa que não venha deste site, com exceção do mapa depois do
  clique.
- **`public/_headers`** traz os cabeçalhos de segurança. Netlify e Cloudflare
  Pages leem esse arquivo sozinhos; **GitHub Pages não suporta** cabeçalhos
  personalizados — lá vale só o CSP do `index.html`.

### Ao publicar

1. Suba **apenas o conteúdo de `dist/`**. Nunca exponha o `npm run dev` na
   internet: o servidor de desenvolvimento não é feito para isso e já teve
   falhas que permitem ler arquivos fora da pasta do projeto. Na rede da loja,
   tudo bem.
2. Ligue o HTTPS. No GitHub Pages é a caixa "Enforce HTTPS" nas configurações
   do repositório.
3. Rode `npm audit` de vez em quando — dependência envelhece.

## Onde mexer nas cores

**`src/index.css`**, no bloco `@theme` lá em cima. O Tailwind cria as classes
sozinho a partir dele: `--color-azul` vira `bg-azul`, `text-azul`, e por aí vai.

## Estrutura

```
src/
├── App.jsx                 monta a página na ordem das seções
├── index.css               cores, fontes e sombras da marca
├── data/site.js            todo o conteúdo do site
├── lib/cn.js               juntar classes CSS
└── components/
    ├── ui/                 peças reutilizáveis
    │   ├── Button.jsx      botão (vira link quando recebe href)
    │   ├── Card.jsx        cartão branco com hover
    │   ├── Container.jsx   largura máxima e margem lateral
    │   ├── Reveal.jsx      anima o conteúdo ao entrar na tela
    │   ├── Section.jsx     casca de seção (id, fundo, respiro)
    │   └── SectionHeading.jsx  etiqueta + título + descrição
    ├── Header.jsx
    ├── Hero.jsx
    ├── Sobre.jsx
    ├── Servicos.jsx
    ├── Diferenciais.jsx
    ├── Depoimentos.jsx
    ├── CTA.jsx
    ├── Footer.jsx
    └── WhatsAppFlutuante.jsx
```

## Observação

O site antigo, em HTML puro, continua em `docs/` e não foi tocado. Este aqui
é uma versão nova, separada. Quando quiser trocar, é só publicar o conteúdo
de `site/dist`.
