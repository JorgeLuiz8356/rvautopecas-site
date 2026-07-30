/* =====================================================================
   Conteúdo do site em um lugar só.
   ---------------------------------------------------------------------
   Os componentes não têm texto fixo dentro: todos leem daqui. Para mudar
   telefone, endereço, serviço ou produto, mexa só neste arquivo.
   ===================================================================== */

import {
  Award,
  BadgeCheck,
  CircleParking,
  Clock,
  CreditCard,
  Store,
  Mail,
  Headphones,
  Instagram,
  MapPin,
  Package,
  Search,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
} from 'lucide-react'

export const empresa = {
  nome: 'RV Auto Peças',
  slogan: 'Muito mais que autopeças',
  desde: 2017,
  anos: new Date().getFullYear() - 2017,
  cnpj: '27.499.963/0001-38',
}

export const contato = {
  // O número do WhatsApp vai sem espaço e com o 55 na frente — é o formato
  // que o link wa.me exige.
  whatsapp: '5511950952081',
  whatsappVisivel: '(11) 95095-2081',
  telefone: '+551142104600',
  telefoneVisivel: '(11) 4210-4600',
  email: 'rvautopecas@rvautopecas.com.br',
  endereco: {
    rua: 'Av. Engenheiro Caetano Álvares, 5202',
    bairro: 'Imirim',
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '02431-010',
  },
  horario: [
    { dia: 'Segunda a sexta', hora: '8h às 18h' },
    { dia: 'Sábado', hora: '8h às 13h' },
    { dia: 'Domingo', hora: 'Fechado' },
  ],
  mapa: 'https://www.google.com/maps?q=Av.+Engenheiro+Caetano+%C3%81lvares%2C+5202+-+S%C3%A3o+Paulo+-+SP&output=embed',
  rota: 'https://www.google.com/maps/dir/?api=1&destination=Av.+Engenheiro+Caetano+%C3%81lvares%2C+5202+-+S%C3%A3o+Paulo+-+SP',
  estacionamento: 'Estacionamento na porta da loja',
}

export const pagamento = {
  formas: ['Pix', 'Cartão', 'Dinheiro'],
  parcelamento: 'Parcelamos em até 6x sem juros',
  resumo: 'Pix, cartão ou dinheiro — em até 6x sem juros',
}

/* A loja não tem Facebook — só Instagram. O link vai sem o "?igsh=...",
   que é só um código de rastreio de compartilhamento e não é preciso. */
export const redesSociais = [
  { nome: 'Instagram', icone: Instagram, url: 'https://www.instagram.com/rvautopecas' },
]

/** Monta o link do WhatsApp já com a mensagem escrita pro cliente. */
export function linkWhatsApp(mensagem = 'Olá, preciso de uma peça') {
  return `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`
}

export const navegacao = [
  { rotulo: 'Início', href: '#inicio' },
  { rotulo: 'Empresa', href: '#empresa' },
  { rotulo: 'Serviços', href: '#servicos' },
  { rotulo: 'Peças', href: '#pecas' },
  { rotulo: 'Pedir peça', href: '#pedido' },
  { rotulo: 'Dúvidas', href: '#duvidas' },
  { rotulo: 'Contato', href: '#contato' },
]

/* Linhas de peças que a loja atende.
   ---------------------------------------------------------------------
   É texto puro de propósito: é o que o Google lê para alguém que procura
   "pastilha de freio zona norte" cair aqui. Também alimenta a lista de
   escolha do bloco "Pedir peça". */
export const linhasDePecas = [
  {
    nome: 'Suspensão e direção',
    itens: 'Amortecedor, mola, batente, coxim, bandeja, pivô, terminal, caixa de direção, bieleta',
  },
  {
    nome: 'Freios',
    itens: 'Pastilha, disco, lona, tambor, cilindro, flexível, cabo de freio de mão, fluido',
  },
  {
    nome: 'Motor',
    itens: 'Correia dentada, tensor, bomba d’água, junta, retentor, kit de distribuição, coxim do motor',
  },
  {
    nome: 'Elétrica',
    itens: 'Bateria, alternador, motor de partida, vela, cabo de vela, sensor, lâmpada, chicote, relé',
  },
  {
    nome: 'Arrefecimento',
    itens: 'Radiador, eletroventilador, válvula termostática, mangueira, reservatório, aditivo',
  },
  {
    nome: 'Filtros e lubrificantes',
    itens: 'Filtro de óleo, de ar, de combustível e de cabine, óleo de motor, de câmbio e de direção',
  },
  {
    nome: 'Transmissão e embreagem',
    itens: 'Kit de embreagem, atuador, rolamento, homocinética, coifa, cabo de embreagem',
  },
  {
    nome: 'Escapamento e acessórios',
    itens: 'Silencioso, catalisador, coxim de escapamento, palheta, buzina, tapete, calota',
  },
]

export const numeros = [
  { valor: empresa.anos, sufixo: '', rotulo: 'anos de loja' },
  { valor: 200, sufixo: '+', rotulo: 'oficinas atendidas' },
  { valor: 1, sufixo: 'h', rotulo: 'para entregar a peça' },
  { valor: 100, sufixo: '+', rotulo: 'marcas de peças' },
]

export const sobre = {
  historia: [
    'A RV nasceu em 2017 na Zona Norte de São Paulo com uma ideia simples: comprar peça não precisa ser complicado. Você não precisa saber o código, nem descobrir sozinho qual serve no seu carro.',
    `São ${empresa.anos} anos atendendo mecânico por mecânico e motorista por motorista, conhecendo os carros que rodam por aqui. A loja cresceu, mas o atendimento continuou o mesmo: de quem chama o cliente pelo nome.`,
  ],
  missao:
    'Entregar a peça certa, da marca certa, no tempo em que o carro precisa voltar a rodar — com quem entende de carro do outro lado do balcão.',
  valores: [
    {
      icone: BadgeCheck,
      titulo: 'Honestidade no balcão',
      texto: 'A gente explica a diferença entre original e paralela antes de você decidir. Sem empurrar peça.',
    },
    {
      icone: Search,
      titulo: 'Peça certa, sempre',
      texto: 'Confirmamos a aplicação pelo modelo, ano ou chassi antes de vender. Você não paga por peça que não encaixa.',
    },
    {
      icone: Clock,
      titulo: 'Respeito ao seu tempo',
      texto: 'Carro parado é prejuízo. Separamos antes de você sair de casa e entregamos em até 1 hora.',
    },
    {
      icone: Award,
      titulo: 'Só marca conhecida',
      texto: 'Trabalhamos com os fabricantes que o mecânico confia e que têm garantia de verdade.',
    },
  ],
}

export const servicos = [
  {
    icone: Search,
    titulo: 'Identificação da peça',
    texto:
      'Não sabe o nome nem o código? Manda uma foto da peça velha ou descreve o barulho. Com o modelo e o ano a gente identifica exatamente o que serve.',
  },
  {
    icone: Zap,
    titulo: 'Orçamento pelo WhatsApp',
    texto:
      'Você pergunta e recebe preço, disponibilidade e prazo na mesma conversa. Sem fila e sem precisar sair do trabalho.',
  },
  {
    icone: Truck,
    titulo: 'Entrega em até 1 hora',
    texto:
      'Combinou no orçamento, a gente leva. Para oficina ou para casa, dentro da região, a peça chega em até uma hora.',
  },
  {
    icone: Package,
    titulo: 'Separação antecipada',
    texto:
      'A peça fica conferida e separada no balcão com o seu nome. Quando você chegar, é só retirar e seguir viagem.',
  },
  {
    icone: Wrench,
    titulo: 'Busca no fornecedor',
    texto:
      'Não tem em estoque? Buscamos com nossos fornecedores e passamos o prazo antes de você fechar. Você decide se compensa esperar.',
  },
  {
    icone: Headphones,
    titulo: 'Atendimento para oficinas',
    texto:
      'Mais de 200 oficinas compram com a gente. Condição para quem trabalha com volume e prioridade no atendimento.',
  },
]

export const diferenciais = [
  {
    icone: Headphones,
    titulo: 'Atendimento especializado',
    texto:
      'Quem atende entende de carro. A gente confirma a aplicação pelo modelo, ano ou chassi antes de fechar o pedido.',
  },
  {
    icone: Truck,
    titulo: 'Entrega rápida',
    texto:
      'Entrega em até 1 hora na região. O prazo é combinado no WhatsApp junto com o orçamento, sem surpresa depois.',
  },
  {
    icone: Award,
    titulo: 'Produtos originais',
    texto:
      'Só trabalhamos com fabricantes reconhecidos — Bosch, Cofap, Nakata, SKF, Fras-le, Tecfil e outros que o mecânico confia.',
  },
  {
    icone: ShieldCheck,
    titulo: 'Garantia',
    texto:
      'Toda peça sai com a garantia do fabricante e nota fiscal. Com a nota em mãos, a troca é resolvida direto no balcão.',
  },
]

/* Dúvidas frequentes.
   ---------------------------------------------------------------------
   Este conteúdo veio do site antigo da loja, onde já estava conferido.
   Falta acrescentar formas de pagamento e estacionamento — não inventei
   porque não tenho esses dados. */
export const duvidas = [
  {
    pergunta: 'Não sei o nome da peça. Consigo comprar mesmo assim?',
    resposta:
      'Consegue, e é o caso mais comum aqui. Mande uma foto da peça velha, ou só descreva o barulho e o que o carro está fazendo. Com o modelo e o ano a gente identifica.',
  },
  {
    pergunta: 'Vocês instalam a peça que eu comprar?',
    resposta:
      'Não. A RV é loja de peças, não fazemos serviço de mecânica. Vendemos a peça certa para o seu carro e você leva no mecânico da sua confiança.',
  },
  {
    pergunta: 'Peça original ou paralela: qual devo levar?',
    resposta:
      'Depende do uso. Carro de aplicativo ou frota costuma compensar peça paralela de marca boa; carro na garantia normalmente pede original. A gente explica a diferença de preço e de durabilidade antes de você decidir.',
  },
  {
    pergunta: 'Quais são as formas de pagamento?',
    resposta:
      'Aceitamos Pix, cartão e dinheiro. No cartão, parcelamos em até 6 vezes sem juros.',
  },
  {
    pergunta: 'Tem onde estacionar?',
    resposta:
      'Tem. Estacionamento na porta da loja, então dá para parar, pegar a peça e seguir — sem rodar atrás de vaga na avenida.',
  },
  {
    pergunta: 'Como funciona a garantia?',
    resposta:
      'Toda peça sai com a garantia do fabricante e com nota fiscal. Guarde a nota: com ela a troca é resolvida direto no balcão.',
  },
  {
    pergunta: 'Vocês entregam?',
    resposta:
      'Entregamos, em até 1 hora. Combine no WhatsApp na hora do orçamento: você passa o endereço e a gente confirma o prazo.',
  },
  {
    pergunta: 'E se vocês não tiverem a peça no estoque?',
    resposta:
      'A gente busca no fornecedor e te passa o prazo antes de você fechar. Você decide se compensa esperar.',
  },
  {
    pergunta: 'Que horas vocês abrem?',
    resposta:
      'De segunda a sexta das 8h às 18h, e aos sábados das 8h às 13h, na Av. Engenheiro Caetano Álvares, 5202 — Imirim. Domingo não abrimos.',
  },
]

/* Depoimentos de clientes.
   ---------------------------------------------------------------------
   Está vazio de propósito. Os que existiam aqui eram inventados, só para
   ver o layout, e foram removidos antes de o site ir ao ar — depoimento
   fictício publicado como se fosse real é propaganda enganosa.

   Quando os clientes responderem, é só preencher no formato abaixo e
   religar o <Depoimentos /> no App.jsx. A seção some sozinha enquanto a
   lista estiver vazia.

     { texto: 'o que o cliente escreveu',
       nome: 'Marcos A.',
       papel: 'Oficina no Imirim' },

   Peça autorização de quem escreveu antes de publicar o nome. */
export const depoimentos = []

/* Marcas que rolam na faixa da seção "A empresa".
   ---------------------------------------------------------------------
   Só o nome. O logo é achado sozinho pelo arquivo salvo em
   src/assets/marcas/ (ver src/lib/logosMarcas.js e o LEIA-ME de lá).
   Sem arquivo, a marca aparece com o nome escrito.

   Lista confirmada pela loja: são todos fornecedores reais. */
export const marcas = [
  'Bosch',
  'Cofap',
  'Nakata',
  'SKF',
  'Fras-le',
  'Monroe',
  'Tecfil',
  'Magneti Marelli',
  'NGK',
  'Gates',
  'Valeo',
  'Sabó',
  'TRW',
  'Mann',
]

export const infoContato = [
  {
    icone: MapPin,
    titulo: 'Endereço',
    linhas: [
      contato.endereco.rua,
      `${contato.endereco.bairro} — ${contato.endereco.cidade}, ${contato.endereco.estado}`,
      `CEP ${contato.endereco.cep}`,
    ],
  },
  {
    icone: Clock,
    titulo: 'Horário',
    linhas: contato.horario.map((h) => `${h.dia}: ${h.hora}`),
  },
  {
    icone: CircleParking,
    titulo: 'Estacionamento',
    linhas: [contato.estacionamento, 'Pare, retire a peça e siga'],
  },
  {
    icone: CreditCard,
    titulo: 'Pagamento',
    linhas: [pagamento.formas.join(', '), pagamento.parcelamento],
  },
  {
    icone: Mail,
    titulo: 'E-mail',
    linhas: [contato.email],
    href: `mailto:${contato.email}`,
  },
  {
    icone: Store,
    titulo: 'O que fazemos',
    linhas: ['Loja de autopeças', 'Não fazemos instalação', 'Venda no balcão e por WhatsApp'],
  },
]
