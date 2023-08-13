
let palavra = 'forca';
let titulo = document.querySelector('#titulo');

function myfunction(){
    let indic = (Math.floor(Math.random()*4));
    let letr = palavra[indic];
    titulo.innerHTML = palavra.replaceAll(letr,"_");
}

document.body.onload =  setInterval(myfunction,2000)


let modalAjuda = document.querySelector('#modalAjuda')


function abrirModalAjuda(){
    modalAjuda.showModal()
}

function fecharModalAjuda(){
    modalAjuda.close()
}


