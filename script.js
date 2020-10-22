let seuVotoPara = document.querySelector('.d-1-1 span');

let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

// variaveis de controle de interface

// variaveis de ambiente

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i = 0; i < etapa.numero; i++) {
        if(i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
    }
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let canditato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });
    if(canditato.length > 0) {
        canditato = canditato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${canditato.nome}<br/> Partido: ${canditato.partido}`;
        aviso.style.display = 'block'

        let fotosHtml = "";
        for(let i in canditato.fotos){
            fotosHtml += `<div class="d-1-image">
            <img src="${canditato.fotos[i].url}" alt=""/>
            ${canditato.fotos[i].legenda}</div>`;
        }
        lateral.innerHTML = fotosHtml;     
    } else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'


    }

}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca'); //El = Elemento
    if(elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');
        } else{
            atualizaInterface();
        }
        
    }
}
function branco() {
    alert(`clicou em branco`)
}
function corrige() {
    alert(`clicou em corrige`)
}
function confirma() {
    alert(`clicou em confirma`)
}

comecarEtapa()
