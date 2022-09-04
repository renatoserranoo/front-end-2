var valorFora = "valor fora OK";
var controle = true;
if (controle) {
    console.log(valorFora);
    let valorDentro = "valor dentro ok";
    console.log(valorDentro)
}

valorFora = "salve"
console.log(typeof valorFora)

var usuario = 'renato';
var senha = 123;

if (usuario == 'renato' && senha == 123) {
    console.log('entrou');
}
else{
    console.log("Senha/Usuário inválido")
}