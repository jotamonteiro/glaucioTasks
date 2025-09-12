let valorT;
let valorS;

function calcularTotal(preco,qnt) {
    return preco * qnt;
}

function aplicarDesconto(valor){
    if (valor > 100.00){
        valor = valor - (valor * 0.10)
        return valor
    } else {
        return valor
    }
}

function exibirResumo(){
    console.log("Valor sem desconto: ", valorS)
    console.log("Valor com Desconto: ", valorT)
}
