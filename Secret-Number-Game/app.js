let listaNumerosSorteados = [];
let numeroLimite = 100;
let numberSecret = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numberSecret) {
        exibirTextoNaTela('h1', 'Acertou!');

        let contTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${contTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numberSecret) {
            exibirTextoNaTela ('p', "O número secreto é menor!");
        } else {
            exibirTextoNaTela ('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementos = listaNumerosSorteados.length;

    if(quantidadeElementos == 3){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

function reiniciarJogo() {
    numberSecret = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
