let PalavraGerada = '';
let quantAcertos = 0;
let quantErros = 0;
let quantTentativas = 0;
let tempoPerdido = '';
let Erros = true;
let startTempo;

let distribuicaoPontosChute = 0;
let pontoChute = 0;
let pontoTempo = 6;
let resultPontuacao = document.querySelector('#pontuacao');


let contgTempo = document.querySelector('#tempo');
let second = 0;
let minute = 0;

let tempoGasto = document.querySelector('#tempoGasto')
let numTentatv = document.querySelector('#numTentatv')
let fraseVitoria = document.querySelector('#fraseVitoria')


const barraProgressoChute = document.querySelector('.barraProgressoChute')
let modalWin = document.getElementById('modalWin')
let modalLoser = document.getElementById('modalLoser')

function fecharModal(){
  modalWin.close()
  modalLoser.close()
}

//Banco de palavras
const palavras = [
'camera',     'volei',       'protetor',      'praia',      'papel',
  'banco',      'chave',       'peixe',      'hoquei',     'basquete',
  'geladeira',  'carimbo',     'tartaruga',  'futebol',    'pasta',
  'natacao',    'cafe',        'pombo',      'alface',     'quadro',
  'telefone',   'cadeira',     'abacaxi',    'cobertor',   'cozinha',
  'computador', 'microondas',  'teclado',    'notebook',   'portal',
  'escada',     'fotografia',  'exercicio',  'bater',     'tocar',
  'pintar',     'correr',      'beber',      'escrever',   'comer',
  'nadar',      'jogar',       'esquiar',    'andar',      'canto',
  'remo',      'mergulhar',   'saltar',     'surfar',     'flutuar',
  'azul',       'bonito',      'verde',      'amarelo',    'gostoso',
  'redondo',    'divertido',   'preto',      'simpatia',  'perigoso',
  'pequeno',    'carinho',    'barulhento', 'quadrado',   'inteligente',
  'golfinho',   'tubarao',     'baleia',     'tartaruga',  'futil',
  'jacare',     'hipopotamo',  'polvo',      'lula',       'alga',
  'sardinha',   'salmao',      'siri',       'caranguejo', 'medusa',
  'coqueiro',   'barraca',     'protetor',   'sunga',      'boia',
  'oculos',     'chinelo',     'toalha',     'surto', 'distancia',
  'beber',      'dormir',      'estudar',    'assistir',   'passear',
  'cozinhar',   'trabalhar',   'viajar',     'caminhar',   'jantar',
  'correr',     'ler',         'esquiar',    'nadar',      'mergulhar'
  ,'montanha',  'rio',         'floresta',   'oceano',      'cachoeira', 
  'chuva',      'sol',         'balde',       'folha',       'vento',
  'abacate',  'avestruz',     'baleia',      'cacto',       'cachorro', 
  'carro',     'computador',  'dinossauro',  'escola',     'espada',      
  'foguete',  'girafa',       'hipopotamo',  'servidor',   'jornal', 
  'limao',     'maca',        'navio',       'nuvem',      'onibus', 
  'papagaio',  'leao',        'parafuso',    'pimenta',     'pipa', 
  'robo',       'sapato',     'telefone',    'tigre',       'trator',          
  'xicara',     'pingente',    'carta',        'painel',     'roseira',      
  'cogitar',   'seco',        'barganhar',    'grito',       'oficiar',
  'hiato',    'adendo','        livro',       'biblioteca',  'vidro',
  'porta',     'minerio',       'pedra',      'diamante',     'floco',
  'volante',    'gravata',      'precata',     'porao',       'sofa',
  'varanda',    'trafico',      'cavalheiro',   'dor',        'macio',  
  'fortaleza',  'floresta',     'cruzeiro',   'docente',    'calor',
  'alicate',      'caixa',      'piso',         'neve',       'console',   
  'seco',       'cobre',        'cautela',      'panela',     'brilho',
  'fio',        'solda',        'calculo',       'humildade',  'fragil',
  'oficial',      'restaurante',   'oferecer',     'doacao',      'reserva',
  'oferecer',     'fazenda',      'escada',       'osso',         'outono',
  'moda',         'microfone',    'caixote',      'cortina',      'torcer',
  'emocao',        'molho',       'interpretar',    'asqueroso',   'morte',
  'formidavel',     'astuto',     'pechincha',      'estoico',      'exaurir',
  'compasso',       'dicionario',   'exotico',      'caro',       'fragil',
  'encontro',       'reaver',       'diretoria',    'prender',      'soltar',
  'mensagem',       'enxergar',     'filtro',       'rubrica',      'asterisco',  
  'dinamico',       'rude',         'temperatura',  'solido',       'poeira',
'obstaculo',         'aquatico',    'talento',       'escape',      'afogar']

//div pai barras
const ContainerG = document.getElementsByClassName('containerG')[0];
//botao inicar
const ButtonIniciarJogo = document.querySelector('#iniciarJogo');
// Cada letra da palavra pertence a classe BarrasLetra
//Cada letra é um <p>
const BarrasLetra = document.getElementsByClassName('BarrasLetra');

let resposta = document.querySelector('#resposta')

//Gerador de palavra
function gerarNumero(min,max){ 
  //PalavraSort armazena a palavra 
  var PalavraSort = (palavras[Math.floor(Math.random()*(max-min+1)+min)])
  console.clear()
 //console.log(`Palavra gerada: ${PalavraSort}`) 
 //console.log(`Quant de letras: ${PalavraSort.length}`) 
  exibirPal(PalavraSort)
  PalavraGerada = String(PalavraSort)
  distribuicaoPontosChute = 4/PalavraGerada.length
};

//Exibir palavra na tela
function  exibirPal(palavraGerada){ 
  ContainerG.innerText = ''
  let increm = 0
  while(increm < palavraGerada.length){ 
    //Cria parágrafo da letra
    let ParagLetra = document.createElement('p') 

    // Setar a classe das barras no parágrafo e estilizá-lo
    ParagLetra.setAttribute("class", "BarrasLetra");  

    //Div pai exibe em tela o parágrafo
    ContainerG.appendChild(ParagLetra) 
    increm++ 
  }
}
function derrotaModal(){
  clearInterval(startTempo)
  modalLoser.showModal()
}

function vitoriaModal(){
  clearInterval(startTempo)
  resposta.innerText = PalavraGerada
  resultPontuacao.innerText = (pontoChute+pontoTempo).toFixed(2)
  if((pontoChute+pontoTempo)>9.7){
    resultPontuacao.innerText = 10
  }
  numTentatv.innerText = `Número de tentativas: ${quantTentativas}`
  tempoGasto.innerText = `Tempo gasto: ${minute}min:${second}s` 
  if(minute == 0 && second <= 6){
    fraseVitoria.innerText = 'GOAT. Simplesmente lendário'
  }
  if(minute == 0  && second > 6 && second <= 20 ){
    fraseVitoria.innerText = 'Rápido. Você leva jeito pra coisa.'
  }
  if(minute >= 1 && second == 00 ){
    fraseVitoria.innerText = 'No prego.'
  }
  if(minute >= 1 && second >= 30 ){
    fraseVitoria.innerText = 'Foi por pouco. Aceita uma água?'
  }
  if(minute >= 1 && second >= 58 ){
    fraseVitoria.innerText = 'Os atrasados do ENEM precisam aprender com você. '
  }
  if(minute == 2 ){
    fraseVitoria.innerText = 'Você não consegue esse proeza de novo.'
  }
  modalWin.showModal()
}

function chuteErrado(){
  quantErros++
  //console.log(`Errou ${quantErros}`)
  let chute =  document.createElement('div') 
  barraProgressoChute.appendChild(chute)
  chute.setAttribute("class", "chuteErrado"); 
}

function acertoEstilizar(letraClick){
  BarrasLetra[direita].style.borderColor='#10ac17'
}

function cliqueTecladoEstilo(letraClick){
  document.getElementById(letraClick).style.backgroundColor = '#020c11'
  document.getElementById(letraClick).style.color = '#757575'
}

function comecarJogo(letraClick){ 
  quantTentativas++
  document.getElementById(letraClick).disabled = true;
  cliqueTecladoEstilo(letraClick)  
  //primeira letra da palavra
  //direita = ultima letra da palavra
  let esquerda = 0  
  Erros = true
  for( direita = PalavraGerada.length-1; direita >= esquerda; direita--){ 
    if(PalavraGerada[direita] == letraClick){
      pontoChute += distribuicaoPontosChute
      Erros = false 
      acertoEstilizar(letraClick)
      BarrasLetra[direita].textContent=(letraClick);
      BarrasLetra[direita].value = letraClick; 
      quantAcertos++

      let chute =  document.createElement('div') 
      barraProgressoChute.appendChild(chute)
      chute.setAttribute("class", "chuteCerto"); 
    } 
  }
  if(Erros == true){ 
    chuteErrado()
    if(pontoChute <=0){
      return
    }
    if(quantErros>10){
      pontoChute = pontoChute-=0.5
    }
    pontoChute = pontoChute-=0.25
  }
  if(quantAcertos == PalavraGerada.length){
    vitoriaModal()
  }
}

let cronometro =  function(){
  second++
  pontoTempo -= 0.05

  if(second == 60){
    second = 0;
    minute++
  }

  if(minute == 1){
    (document.querySelector('#tempo')).style.color='#F24B6A'
  }

  if(minute == 2){
    clearInterval(startTempo)
    derrotaModal()
  }

  if(second < 10){
    contgTempo.innerText = `${minute}:0${second}`
  }

  else{ 
    contgTempo.innerText = `${minute}:${second}`  
  }
}

 function IniciarJogo(){ 
    //Chamar função que gera palavra max = quant palavras - 1 
    modalWin.close()
    modalLoser.close()
    gerarNumero(0,244)
   startTempo =  setInterval(cronometro,1000)
}
window.onload = IniciarJogo()
