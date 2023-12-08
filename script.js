const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const nuvem = document.querySelector('.nuvem');
const fimDeJogo  = document.querySelector('.fim-de-jogo');
const botaoReinciar = document.querySelector('.reiniciar');
const hudPontos = document.querySelector('.hud');

let pontuacao = 0;  
let marcouPonto = false;
let morreu = false;
let pulando = false;

document.addEventListener('keyup', fazerMarioPular);
document.addEventListener('touchstart', fazerMarioPular);

function fazerMarioPular() {
    pulando = true;
    mario.classList.add('pular');
    setTimeout(function () {
        mario.classList.remove('pular');
        pulando = false;
    }, 500);
}

function atualizaPontuacao() {
    hudPontos.innerHTML = "Pontos: " + pontuacao;
}

function verificarColisoes() {
    const posicaoCano = cano.offsetLeft;
    const posicaoMario = parseFloat(getComputedStyle(mario).bottom);
    const posicaoNuvem = parseFloat(getComputedStyle(nuvem).bottom);

    if (posicaoCano <= 100 && posicaoCano > 0 && posicaoMario > 60){
        if (!marcouPonto) {
            pontuacao++;
            atualizaPontuacao();
            marcouPonto = true;
        }
    } else {
        marcouPonto = false;
    } 
    
    if (posicaoCano <= 100 && posicaoCano > 0 && posicaoMario < 60) {
        hudPontos.innerHTML = 'Você morreu, sua pontuação foi de: ' + pontuacao;
        morreu = true;
        pontuacao = 0;
        pararJogo(); // Colisão detectada

        // Ajustar elementos para indicar o fim do jogo
        cano.style.animation = 'none';
        cano.style.left = `${posicaoMario}px`;

        mario.style.animation = 'none';
        mario.style.left = `${posicaoMario}px`;
        mario.src = 'assets/imgs/fim-de-jogo.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '35px';

        nuvem.style.animation = 'nuvem 20s infinite linear';
        nuvem.style.left = '${posicaoNuvem}px';

        fimDeJogo.style.visibility = 'visible';
 
    }
}

let loopJogo = setInterval(verificarColisoes, 10);

function pararJogo(){
    clearInterval(loopJogo);
    console.log("Jogo Parado")
}

function reiniciar() {
    location.reload();
}
 



