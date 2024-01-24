alert('Boas Vindas ao jogo do número secreto');
numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

//enquanto o chute não for igual o n.s 
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)


    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {

            alert(`O número secreto é menor que ${chute}`);
        }
        else {
            alert(`O número secreto é maior ${chute}`)
        }
        tentativas = tentativas + 1;
    }
}