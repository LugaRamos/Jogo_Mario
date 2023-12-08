const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const nuvem = document.querySelector('.nuvem');
const fimDeJogo  = document.querySelector('.fim-de-jogo');
const botaoReinciar = document.querySelector('.reiniciar');

let pontuacao = 0;

document.addEventListener('keyup', fazerMarioPular);
document.addEventListener('touchstart', fazerMarioPular);

function fazerMarioPular() {
    mario.classList.add('pular');
    setTimeout(function () {
        mario.classList.remove('pular');

        pontuacao++

        atualizaPotuacao();

    }, 500);
}

function atualizaPotuacao() {
    console.log('Pontuação: ' + pontuacao);
}

