var i, altura, sexo, maioralt = 0, menoralt = 0, mediahom = 0, quantmulh = 0, quanthom = 0, homem = 0, mulher = 0;

for (i = 1; i <= 3; i++) {
    altura = parseFloat(prompt("Digite sua altura[" + i + "]:"));
    sexo = prompt("Sexo: M para masculino ou F para feminino:").toUpperCase();
    //descoberto depois que uppercase podia ser usado, por isso tem maiusculo e minusculo no if
    if (i == 1) {
        menoralt = altura;
    } if (altura > maioralt) {
        maioralt = altura;
    } if (altura < menoralt) {
        menoralt = altura;
    } if (sexo == 'm' || sexo == 'M') {
        homem += altura;
        quanthom++;
    } else if (sexo == 'f' || sexo == 'F') {
        mulher += altura;
        quantmulh++;
    }
}
if (quanthom > 0) {
    mediahom = homem / quanthom;
}
alert("A maior altura é: " + maioralt);
alert("A menor altura é: " + menoralt);
alert("A média dos homens é: " + mediahom);
alert("O número de mulheres é: " + quantmulh);  
