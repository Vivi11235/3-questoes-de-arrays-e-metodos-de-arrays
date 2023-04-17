function exercicio1(){
/*Criar um array e percorrê-lo utilizando o loop for.
a. Crie um array com o nome "nomes" e adicione 4 nomes de
pessoas que você conhece
b. Utilize o loop for para percorrer o array e exibir os nomes na
tela*/

    let nomes = ["Victoria", "Vanessa", "Marcos", "Verônica"];

    for(let i=0;i<=3;i++){
        document.write(nomes[i]+' ');
    }

}

function exercicio2(){
/*Criar um array e percorrê-lo utilizando o loop for of
a. Crie um array com o nome "numeros" e adicione 5 números de
sua escolha
b. Utilize o loop for of para percorrer o array e exibir a soma dos
números na tela.*/

    let numeros = [1, 2, 3, 4, 5];
    let soma = 0;

    for(let item of numeros){
    soma+=item;
    }

    document.write(`A soma dos números digitados é ${soma}.`);
}

function exercicio3(){
/*Utilizar os métodos push, pop, unshift e shift para manipular um
array
a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas
de sua escolha
b. Utilize o método push para adicionar uma fruta no final do
array
c. Utilize o método pop para remover a última fruta do array
d. Utilize o método unshift para adicionar uma fruta no início do
array
e. Utilize o método shift para remover a primeira fruta do array
f. Exiba o array resultante na tela*/

    let frutas = ["Mamão", "Morango", "Maçã"];

    frutas.push("Limão");

    frutas.pop();

    frutas.unshift("Mirtilo");

    frutas.shift();

    console.log(frutas);
}