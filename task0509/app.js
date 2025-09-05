const nAulas = Number(prompt("Digite o Numeros de aulas do semestre:"));
const numeroFaltas = Number(prompt("Digite o Numero de faltas:"));
const p1 = Number(prompt("Digite sua primeira nota:"));
const p2 = Number(prompt("Digite sua segunda nota:"));
let resultadoF;
let freqTotal = (numeroFaltas / nAulas) * 100;
let media = (p1 + p2) / 2;
let notaRec;
let mediarec;
let presenca = 100 - freqTotal
console.log(freqTotal)


if (freqTotal <= 25) {
    alert("Sua Frequência está boa!")
    console.log("passou na frequencia")
    if (media >= 7 ) {
        alert("Parabêns você foi Aprovado!")
        console.log("ele foi aprovado!")
        resultadoF = "Aprovado"
        mostrarDados()
    }else if (media >= 5 && media < 7) {
        alert("você ficou em recuperação!")
        notaRec = Number(prompt("Digite sua Nota na Recuperação!"))
        mediarec = (media + notaRec) / 2;
        console.log(mediarec)
        if (mediarec >= 5) {
            alert("Você foi Aprovado por meio da Recuperação");
            resultadoF = "Aprovado"
            mostrarDados()
        } else {
            alert("Você não teve nota suficiente, Foi Reprovado")
            resultadoF = "Reprovado"
            mostrarDados()
        }
    } else {
        alert("Sua nota foi abaixo de 5, Você está reprovado!")
        resultadoF = "Reprovado";
        mostrarDados()
    }
} else {
    alert("Sua Frequencia foi Abaixo de 75%, você está automaticamente Reprovado!")
    
};
console.log(freqTotal)
function mostrarDados(){
    console.log("Numero de aulas do Semestre:", nAulas)
    console.log("Numero de Faltas do Aluno:", numeroFaltas)
    console.log(`Percentual de presença: ${presenca}% `)
    console.log("Primeira Nota:", p1)
    console.log("Segunda Nota:", p2)
    console.log("Nota da Recuperação:", notaRec)
    console.log("Situação Final: ", resultadoF)
}
