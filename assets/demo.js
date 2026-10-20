/* =====================================================================
   Charles Renzo — dados de EXEMPLO do modo demonstração (site e painel).
   Só roda com o Supabase desligado. Todos os clientes são fictícios e
   marcados "(exemplo)". Os valores em R$ também são fictícios: servem para
   mostrar o funil, não são tabela do artista.
   As "referências" usam fotos da pasta fotos/.
   Carrega depois de config.js e antes de agenda.js / admin.js.
   ===================================================================== */
(function () {
  'use strict';
  var CFG = window.TV;
  if (!CFG || !CFG.modoDemo) return;
  // prefixo das chaves do navegador: o mesmo que o motor (agenda.js) usa
  var PFX = CFG.prefixoDemo || 'dv_';
  var VERSAO = PFX + 'renzo_semeado_v1';
  try { if (localStorage.getItem(VERSAO)) return; } catch (e) { return; }

  function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function aberto(d) { var e = (CFG.expediente || {})[d.getDay()]; return e ? !!e.aberto : d.getDay() !== 0; }
  // dia a partir de hoje; dia fechado (domingo) pula para o próximo dia aberto
  function dia(off) {
    var d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() + off);
    for (var i = 0; i < 7 && !aberto(d); i++) d.setDate(d.getDate() + (off < 0 ? -1 : 1));
    return iso(d);
  }
  // próximo dia aberto a partir de uma data ISO (passo +1 ou -1)
  function outroDia(s, passo) {
    var p = s.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2], 12);
    do { d.setDate(d.getDate() + passo); } while (!aberto(d));
    return iso(d);
  }
  function criado(off, h) { var d = new Date(); d.setDate(d.getDate() + off); d.setHours(h || 10, 17, 0, 0); return d.toISOString(); }
  function min(t) { var p = t.split(':'); return (+p[0]) * 60 + (+p[1]); }
  function hora(m) { return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); }

  // nomes e durações de reserva, caso o config ainda não traga o serviço
  var SERV = {};
  (CFG.servicosDemo || []).forEach(function (s) { SERV[s.id] = s; });
  var NOME = {};
  (CFG.artistas || []).forEach(function (a) { NOME[a.slug] = a.nome; });

  function tattoo(estilo, local, tam, ideia, extra) {
    return ['Estilo: ' + estilo, 'Local: ' + local, 'Tamanho: ' + tam]
      .concat(extra || [], ['Ideia: ' + ideia]).join('\n');
  }

  // [artista, tipo de projeto, dia, início, cliente, etapa, obs, referências, valor, sinal, sinal pago, criado há n dias]
  var L = [
    ['renzo', 'conversa',    dia(1),  '10:00', 'Larissa M.',  'novo',      tattoo('Fine Line', 'Antebraço', '5 a 10 cm', 'Nome da minha mãe com uma data em traço bem fino', ['Primeira tattoo: Sim']), [], 0, 0, false, 0],
    ['renzo', 'fechamento',  dia(3),  '09:00', 'Thiago R.',   'novo',      tattoo('Mitologia e fé', 'Braço inteiro (fechamento)', 'Fechamento (braço, perna ou costas)', 'Fechar o braço com Zeus, faixa grega e um leão no ombro', ['Tattoo antiga na região: Não']), ['fotos/zeus-braco.jpg'], 0, 0, false, 0],
    ['renzo', 'fine-line',   dia(8),  '14:00', 'Bruna S.',    'novo',      tattoo('Fine Line', 'Costela', 'Até 5 cm', 'Frase curta em letra fina acompanhando a costela'), [], 0, 0, false, -1],
    ['renzo', 'peca-unica',  dia(2),  '09:00', 'Caio F.',     'conversa',  tattoo('Felinos', 'Peito', '10 a 20 cm', 'Leão coroado no peito, olhos azuis'), ['fotos/leao-coroado-peito.jpg'], 0, 0, false, -2],
    ['renzo', 'fechamento',  dia(5),  '09:00', 'Rodrigo A.',  'conversa',  tattoo('Felinos', 'Costas inteiras (fechamento)', 'Fechamento (braço, perna ou costas)', 'Costas fechadas com leão e o rosto de Cristo', ['Tattoo antiga na região: Sim']), ['fotos/leao-cristo-costas.jpg'], 0, 0, false, -3],
    ['renzo', 'peca-unica',  dia(6),  '13:00', 'Juliana P.',  'orcado',    tattoo('Preto e cinza com toque de cor', 'Coxa', 'Mais de 20 cm', 'Onça com flores e olho colorido'), ['fotos/onca-flores-braco.jpg'], 120000, 30000, false, -4],
    ['renzo', 'fechamento',  dia(9),  '09:00', 'Marcelo T.',  'orcado',    tattoo('Mitologia e fé', 'Braço inteiro (fechamento)', 'Fechamento (braço, perna ou costas)', 'Faraó e olho de Hórus fechando o braço'), ['fotos/farao-braco.jpg'], 450000, 50000, true, -5],
    ['renzo', 'fine-line',   dia(0),  '15:00', 'Ana Clara V.','marcado',   tattoo('Fine Line', 'Pé / tornozelo', 'Até 5 cm', 'Ramo de flor delicado no tornozelo'), [], 35000, 10000, true, -6],
    ['renzo', 'continuacao', dia(4),  '09:00', 'Felipe N.',   'marcado',   tattoo('Felinos', 'Braço inteiro (fechamento)', 'Fechamento (braço, perna ou costas)', 'Terceira sessão do fechamento: sombra do tigre e faixa grega'), [], 0, 0, false, -10],
    ['renzo', 'retoque',     dia(7),  '16:00', 'Daniela C.',  'marcado',   tattoo('Fine Line', 'Pulso', 'Até 5 cm', 'Retoque da data feita em setembro'), [], 0, 0, false, -3],
    ['renzo', 'peca-unica',  dia(-4), '09:00', 'Gustavo L.',  'concluido', tattoo('Felinos', 'Braço', '10 a 20 cm', 'Leão rugindo no braço'), ['fotos/leao-rugindo-braco.jpg'], 90000, 20000, true, -15],
    ['renzo', 'fechamento',  dia(-9), '09:00', 'Paulo H.',    'concluido', tattoo('Mitologia e fé', 'Braço inteiro (fechamento)', 'Fechamento (braço, perna ou costas)', 'Última sessão do fechamento com Cristo e leão'), ['fotos/cristo-leao-braco.jpg'], 380000, 50000, true, -30],
    ['renzo', 'fine-line',   dia(-6), '14:00', 'Mirela B.',   'concluido', tattoo('Fine Line', 'Antebraço', '5 a 10 cm', 'Iniciais dos filhos em traço fino'), [], 30000, 10000, true, -12],
    ['renzo', 'fechamento',  dia(-2), '09:00', 'Hugo S.',     'recusado',  tattoo('Ainda não sei', 'Perna inteira (fechamento)', 'Fechamento (braço, perna ou costas)', 'Fechar a perna, mas só posso em dezembro'), [], 0, 0, false, -7]
  ];
  // só entra quem está na equipe do config
  L = L.filter(function (x) { return !CFG.artistas || !CFG.artistas.length || CFG.artistas.some(function (a) { return a.slug === x[0]; }); });

  var ocupado = {};
  var lista = L.map(function (x, i) {
    var s = SERV[x[1]] || { nome: x[1], duracao_min: 60 };
    var status = x[5] === 'concluido' ? 'concluido' : x[5] === 'recusado' ? 'cancelado' : 'confirmado';
    // se dois exemplos caírem no mesmo horário (dia fechado empurra a data), o segundo muda de dia
    var ini = min(x[3]), fimMin = ini + s.duracao_min, d = x[2], hoje = iso(new Date());
    if (status === 'confirmado') {
      for (var t = 0; t < 14; t++) {
        var livre = !(ocupado[x[0] + d] || []).some(function (o) { return ini < o[1] && fimMin > o[0]; });
        if (livre) break;
        d = outroDia(d, d < hoje ? -1 : 1);
      }
      (ocupado[x[0] + d] = ocupado[x[0] + d] || []).push([ini, fimMin]);
    }
    return {
      codigo: 'EX' + String(1001 + i), barbeiro_id: x[0], barbeiro: NOME[x[0]] || x[0],
      servico: s.nome, preco_centavos: 0, nome: x[4] + ' (exemplo)',
      telefone: '719000000' + String(10 + i), dia: d, inicio: hora(ini), fim: hora(fimMin),
      obs: x[6], status: status, anexos: x[7], exemplo: true,
      etapa: x[5], valor_centavos: x[8], sinal_centavos: x[9], sinal_pago: x[10], criado_em: criado(x[11])
    };
  });
  var bloqueios = [
    { id: 'b1', barbeiro_id: 'renzo', data: dia(12), hora_inicio: '00:00', hora_fim: '23:59', motivo: 'Evento (exemplo)' },
    { id: 'b2', barbeiro_id: 'renzo', data: dia(16), hora_inicio: '00:00', hora_fim: '23:59', motivo: 'Folga (exemplo)' }
  ];
  try {
    localStorage.setItem(PFX + 'agendamentos_demo', JSON.stringify(lista));
    localStorage.setItem(PFX + 'bloqueios_demo', JSON.stringify(bloqueios));
    localStorage.removeItem(PFX + 'artistas_demo');
    localStorage.setItem(PFX + 'demo_semeado_v1', '1');   // o motor não semeia por cima
    localStorage.setItem(VERSAO, '1');
  } catch (e) {}
})();
