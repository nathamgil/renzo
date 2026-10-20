/* =====================================================================
   Charles Renzo — configuração
   Único arquivo que precisa ser editado para o site sair do modo de
   demonstração e entrar no ar de verdade.
   ===================================================================== */

window.TV = {

  /* ---- Artista ------------------------------------------------------ */
  nome:       'Charles Renzo',
  slogan:     'Especialista em Fine Line · Salvador',
  assinatura: 'Atendimento exclusivo, por agendamento',
  instagram:  'renzotatuador',
  prefixoDemo: 'rz_',   // chaves da demo no navegador (agenda.js e admin.js usam o mesmo)
  demoUrl:    'https://nathamgil.github.io/renzo/',
  logo:       'fotos/marca.svg',

  // WhatsApp da bio do Instagram (wa.me/5571981960564)
  whatsapp:        '5571981960564',
  whatsappVisivel: '(71) 98196-0564',

  // Bairro e complemento: A CONFIRMAR (a bio só traz a rua e o número).
  endereco: {
    linha1: 'Via Castelo Branco, 146',
    linha2: 'Salvador — BA',
    referencia: '',
    maps:   'https://www.google.com/maps/search/?api=1&query=Via+Castelo+Branco%2C+146%2C+Salvador+BA',
    embed:  'https://www.google.com/maps?q=Via+Castelo+Branco%2C+146%2C+Salvador+-+BA&output=embed',
    busca:  'Via Castelo Branco, 146, Salvador - BA'
  },
  // Horário não está na bio: A CONFIRMAR. O site só diz "por agendamento".
  funcionamento: 'Atendimento exclusivo, por agendamento',

  /* ---- Supabase ---------------------------------------------------
     Vazio = MODO DEMONSTRAÇÃO (tudo funciona, mas fica no navegador).
     Para ligar: veja o README (supabase.com -> schema.sql -> chaves aqui).
  ------------------------------------------------------------------ */
  supabaseUrl: '',
  supabaseKey: '',

  regras: { passoMin: 30, antecedenciaMin: 30, janelaDias: 30, cancelamentoH: 2 },
  semPreferencia: false,

  /* ---- Grade da agenda (0 = domingo) -------------------------------
     Só reserva tempo na agenda. Dias e horas A CONFIRMAR com o Renzo.
  ------------------------------------------------------------------ */
  expediente: {
    0: { aberto: false },
    1: { aberto: true, abre: '09:00', fecha: '18:00' },
    2: { aberto: true, abre: '09:00', fecha: '18:00' },
    3: { aberto: true, abre: '09:00', fecha: '18:00' },
    4: { aberto: true, abre: '09:00', fecha: '18:00' },
    5: { aberto: true, abre: '09:00', fecha: '18:00' },
    6: { aberto: true, abre: '09:00', fecha: '18:00' }
  },

  /* ---- O artista (o motor trabalha com lista; aqui é um só) -------- */
  artistas: [
    {
      slug: 'renzo', nome: 'Charles Renzo', apelido: 'Renzo', instagram: 'renzotatuador',
      whatsapp: '5571981960564', whatsappVisivel: '(71) 98196-0564',
      foto: 'fotos/renzo-perfil.jpg',
      oficio: 'Tatuador',
      linha: 'Especialista em Fine Line · fechamentos',
      estilos: ['Fine Line', 'Fechamentos', 'Realismo em preto e cinza', 'Felinos', 'Mitologia e fé'],
      bio: [
        'Especialista em Fine Line.',
        'Atendimento exclusivo, por agendamento.',
        'Fechamentos de braço e costas pensados como uma peça só.',
        'Atende em Salvador, na Via Castelo Branco, 146.'
      ]
    }
  ],

  /* ---- Portfólio (portfolio.html e amostra da capa) -----------------
     Fotos dos posts do @renzotatuador. cats = filtros do portfólio.
  ------------------------------------------------------------------ */
  categorias: [
    { id: 'fechamentos', nome: 'Fechamentos',     desc: 'Braço e costas inteiros, desenhados como uma composição só: o destaque do trabalho do Renzo.' },
    { id: 'felinos',     nome: 'Felinos',         desc: 'Leões, tigres e onças: pelagem construída fio a fio, olhar como ponto de luz.' },
    { id: 'fe',          nome: 'Mitologia e fé',  desc: 'Cristo, faraó, Zeus e guerreiros: retratos com textura de pedra e moldura grega.' },
    { id: 'cor',         nome: 'Toque de cor',    desc: 'Preto e cinza com um único ponto de cor, quase sempre no olhar.' }
  ],
  portfolioDesc: 'Peças publicadas no Instagram @renzotatuador. Toque numa foto para ampliar.',
  portfolio: [
    { src: 'fotos/onca-flores-braco.jpg',       alt: 'Onça de olho azul entre flores, fechamento de braço', cats: ['fechamentos', 'felinos', 'cor'] },
    { src: 'fotos/leao-cristo-costas.jpg',      alt: 'Leão e Cristo dividindo o rosto, costas fechadas',     cats: ['fechamentos', 'fe', 'felinos'] },
    { src: 'fotos/zeus-braco.jpg',              alt: 'Zeus com moldura grega, fechamento de braço',          cats: ['fechamentos', 'fe'] },
    { src: 'fotos/leao-coroado-peito.jpg',      alt: 'Leão coroado de olhos azuis no peito',                  cats: ['felinos', 'cor'] },
    { src: 'fotos/farao-braco.jpg',             alt: 'Faraó e olho de Hórus, fechamento de braço',            cats: ['fechamentos', 'fe'] },
    { src: 'fotos/oncas-girassol-costas.jpg',   alt: 'Onças com girassol e flores nas costas',                cats: ['fechamentos', 'felinos', 'cor'] },
    { src: 'fotos/cristo-leao-braco.jpg',       alt: 'Cristo e leão, fechamento de braço',                    cats: ['fechamentos', 'fe', 'felinos'] },
    { src: 'fotos/leao-rugindo-braco.jpg',      alt: 'Leão rugindo no braço',                                 cats: ['felinos'] },
    { src: 'fotos/tigre-relogio-antebraco.jpg', alt: 'Olhar de tigre e relógio no antebraço',                 cats: ['felinos'] },
    { src: 'fotos/tigre-grega-braco.jpg',       alt: 'Tigre com faixa grega no braço',                        cats: ['felinos'] },
    { src: 'fotos/espartano-antebraco.jpg',     alt: 'Guerreiro espartano com faixa grega no antebraço',      cats: ['fe'] }
  ],

  /* ---- Tipo de projeto (passo 1 do pedido) -------------------------
     Nada tem preço fixo: tudo "sob orçamento" (preco 0).
     Durações A CONFIRMAR: só reservam o tempo certo na agenda.
     fechamento: true separa o relatório do painel em Peças × Fechamentos.
  ------------------------------------------------------------------ */
  servicosDemo: [
    { id:'conversa',      nome:'Conversa de projeto',        descricao:'30 min para ver a ideia, o local e o tamanho, e fechar valor e data.',          preco_centavos:0, a_partir_de:false, duracao_min:30,  categoria:'Começar' },
    { id:'fine-line',     nome:'Peça em Fine Line',          descricao:'Traço fino e delicado: nomes, datas, símbolos, flores.',                        preco_centavos:0, a_partir_de:false, duracao_min:120, categoria:'Peça única' },
    { id:'peca-unica',    nome:'Peça única',                 descricao:'Uma peça com mais sombra e detalhe: antebraço, panturrilha, peito.',             preco_centavos:0, a_partir_de:false, duracao_min:240, categoria:'Peça única' },
    { id:'fechamento',    nome:'Fechamento',                 descricao:'Braço, perna ou costas inteiros, desenhados como uma composição só.',            preco_centavos:0, a_partir_de:false, duracao_min:360, categoria:'Fechamento', fechamento:true },
    { id:'continuacao',   nome:'Sessão de fechamento em andamento', descricao:'Para quem já começou o fechamento com o Renzo.',                           preco_centavos:0, a_partir_de:false, duracao_min:360, categoria:'Fechamento', fechamento:true },
    { id:'retoque',       nome:'Retoque',                    descricao:'Para tattoo já cicatrizada que precisa de reforço.',                             preco_centavos:0, a_partir_de:false, duracao_min:60,  categoria:'Depois da sessão' }
  ],

  // Estilos do pedido: da bio (Fine Line) e do portfólio. A CONFIRMAR.
  estilos: ['Fine Line', 'Realismo em preto e cinza', 'Preto e cinza com toque de cor', 'Felinos', 'Mitologia e fé', 'Trago minha referência', 'Ainda não sei']
};

// o motor chama os profissionais de "barbeiros" (nome herdado, não aparece na tela)
window.TV.barbeirosDemo = window.TV.artistas.map(function (a) {
  return { id: a.slug, slug: a.slug, nome: a.nome, foto: a.foto, instagram: a.instagram,
           whatsapp: a.whatsapp, cargo: a.linha };
});
window.TV.artistaPor = function (chave) {
  return window.TV.artistas.filter(function (a) {
    return a.slug === chave || a.nome === chave || a.instagram === chave;
  })[0] || null;
};
window.TV.modoDemo = !(window.TV.supabaseUrl && window.TV.supabaseKey);
