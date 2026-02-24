//Funções em JS
//Uma função é um bloco de código reuilizável, criado para executar uma tarefa específica

// function nomeDaFuncao (parametro1, parametro2){
//     //código que será executado
//     return resultado;
// }

// function somar (a, b){
//     return a + b
// }
// console.log(somar(2,3)); //5

// function realParaDolar(valorReal, cotacao){
//     return valorReal / cotacao
// }
// console.log(realParaDolar(20,5.17).toFixed(2))

// Calcular aumento salário
// function calcularAumento(salario){
//     return salario + (salario * 0.25)
// }
// console.log(calcularAumento(10000))

//1
function dob (a, b){
    return a * b
}
console.log(dob(8,2));

//2
function tri (a, b){
    return a * b
}
console.log(tri(3,3));

//3
function somar (a, b){
    return a + b
}
console.log(somar(4,4));

//4
function mult (a, b){
    return a * b
}
console.log(mult(5,10));

//5
function realParaDolar(valorReal, cotacao){
    return valorReal / cotacao
}
console.log(realParaDolar(20,5.17).toFixed(2))

//6
function dolarParaReal(valorDolar, cotacao){
    return valorDolar / cotacao
}
console.log(dolarParaReal(20,0.19).toFixed(2))

//7
function calcularAumento(salario){
    return salario + (salario * 0.10)
}
console.log(calcularAumento(10000))

//8
function parSim(numero){
    return numero % 2 !== 0
}
console.log(parSim(1));
console.log(parSim(4));

//9
function contar(){
        for (let i=1; i <=10; i++){
    console.log(i)
}
}
contar();

//10
function lim(){
        for (let i=0; i <=8; i++){
    console.log(i)
}
}
lim();

//11
function somar10(){
    let somar = 0;
    for(let i=1; i <= 10; i++){
        somar = somar + i;
    }
    return somar;
}
console.log(somar10());

//12
function paresSoma (n){
    let acumula1 = 0;
    for (let i = 0; i <= n; i++){
        if ( i % 2 === 0){
            
            acumula1 ++;
        }
        
    }
   return (acumula1)
}
console.log(paresSoma(10));

//13
 function exibirTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}
exibirTabuada(7);

//14 
function regressiva(){
     for (let con = 10; con >= 1; con--) {
    console.log(con)
  }
}

regressiva()

//15
function encontre(){
    for (let encontre = 1; encontre <=28; encontre++){
        if(encontre == 27)
        console.log(encontre)
    }
}
encontre()

//16
function conta(){
    let somarr = 0
    let par = 0
     for (let contar = 1; contar <= 20; contar++) {
        if (contar % 2 === 0) { // Verifica se é par
            somarr+= contar
            console.log(som)
            par++
        }
  }
}

conta()

console.log()

//17
function conta(){
    let impar = 0
     for (let contar = 1; contar <= 10; contar++) {
        if (contar % 2 === 1) { 
            console.log(contar)
            impar++
        }
  }
}


//18
function media(a, b){
    return (a + b) / 2
}

console.log(media(9,9))


//19
//19
function calcularQuadrado(numerow) {
    return numerow * numerow;
}

console.log(calcularQuadrado(5)); 
