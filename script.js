const btnTentar = document.getElementById('guessButton');
const txtInput = document.getElementById('guessInput');
const resultado = document.getElementById('resultado');
const tenteNovamente = document.getElementById('tenteNovamente');
const numeroAleatorio = Math.floor(Math.random() * 20) + 1;

btnTentar.addEventListener('click', tentar);

function tentar(){
    if(txtInput.value < 1 || txtInput.value > 20){
        resultado.textContent = 'Digite um número entre 1 e 20!';
    }
    else if(txtInput.value < numeroAleatorio){
        resultado.textContent = 'Você errou, digite um número maior!';
    }
    else if(txtInput.value > numeroAleatorio){
        resultado.textContent = 'Você errou, digite um número menor!';
    }
    else{
        resultado.textContent = 'Párabens você acertou!';
    }
}
