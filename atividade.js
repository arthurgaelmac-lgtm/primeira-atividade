//algoritimo é um sitema de cóidigo criada em um tipo de codigo como Java, phiton, Javascript, etc. 

// em um programa de média as informações de entradas são Nota1 e Nota dois, uma variavel Média = no(Nota1+n2)/2 é o processamento e o console.log(media) é a informação de saida

//let é uma variavel que a informação pode ser alterada, const é uma informação que não muda, mesmo tentando ela não vai mudar. io let é util quando queremos uma condição junto como daicionar um valor junto. const é util para trabalhar com uma informação incontavel que 

//8, pois a let é uma variavel que pode ser alterada, como somando um valor ou subtraindo.


let produto = "PC";
let preco= 5000;
let disponibilidade= 20;
let estoque= 30;

console.log("produto", produto, "preço unitário:",preco, "disponibilidade", disponibilidade, "estoque", estoque);
//6-
let valor = 500;
console.log(valor - (12*valor)/100 );

//7-
let a= 17 % 5
let b= 4 ** 2
let c= 10 > 8 &&
3 < 1
let d= 5 === "5"

console.log(a, b, c, d)
//na d quando colocamos entre parenteses, deixamos a informação como String, que esta sendo comparado a um number

//8-se a idade for 16 vai exiber acesso negado, se for 20 vai aparecer acesso permitido

//9-
a= 6
b= 6
c= 6
if(a>=b && a>=c)
    console.log(a);
if(b>=a && b>=c)
 console.log(b);
else
    console.log(c);
//10-
let media= 4;
let presenca= 75;

if(media>=7 && presenca>=75)
    console.log("aluno aprovado")
else
    console.log("aluno reprovado")
//11- For é pra  executar um bloco várias vezes,while executa o bloco continuamente enquanto for verdadeiro; for se usa quando voce sabe o limite, e while qundo voce depende de certa condição.

//12-
for(let i= 2; i<=20;i++){
    if(i % 2===0)
console.log(i);
}
//13-10, 8, 6, 4
//14- 
let resultado=0 ;
for(let i= 1;i<=50 ;i++){
   
    
    console.log(resultado,"+",i,"=", resultado= resultado+i)}
//15-
// 
for(let i= 1;i<=10 ;i++){
   
    
    console.log(1,"x",i,"=", 1*i)}

//16-teclado e 3, para adicionar escreva produtos.push("monitor");

//17-
let  boletim= [0,1,2,3,4];
let soma = 0;
let media_nota= 0;
for(let i=0; i < boletim.length;i++){
soma= soma+boletim[i];
media_nota = soma;  
}
media_nota = media_nota / boletim.length;

console.log(media_nota);

///18-
function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}

const totalCompra = calcularTotal(25.50, 3);
console.log("Total da compra: R$", totalCompra)

//19-no if a nota tem que ser >=7

//20-
//Estrutura de Dados: Criamos uma lista (array) onde cada item é um objeto que representa um produto. Cada objeto tem três informações: nome, preço e quantidade.
//Cálculo do Valor Total: Usamos uma repetição (ou o método reduce) para passar por cada produto, multiplicar o preço pela quantidade e somar tudo em uma variável final.
//Alerta de Estoque Baixo: Usamos um filtro (método filter) para separar apenas os produtos que têm a quantidade menor que 5. Depois, mostramos esses itens na tela.
//Organização em Função: Colocamos toda essa lógica dentro de uma função chamada analisarEstoque. Assim, o código fica limpo e pode ser usado várias vezes com listas diferentes.

const estoque = [
{ nome: "Teclado Mecânico", preco: 250.00, quantidade: 12 },
{ nome: "Mouse Gamer", preco: 120.50, quantidade: 3 },
{ nome: "Monitor 24 Polegadas", preco: 890.00, quantidade: 7 },
{ nome: "Headset USB", preco: 180.00, quantidade: 2 },
{ nome: "Mousepad", preco: 45.00, quantidade: 20 }
];
function analisarEstoque(listaDeProdutos) {
const valorTotal = listaDeProdutos.reduce((acumulador, produto) => {
return acumulador + (produto.preco * produto.quantidade);
}, 0);
const estoqueBaixo = listaDeProdutos.filter(produto => produto.quantidade < 5);
console.log("=== RELATÓRIO DE ESTOQUE ===");
console.log("Valor total do estoque: R$ " + valorTotal.toFixed(2));
console.log("Produtos com menos de 5 unidades:");
if (estoqueBaixo.length > 0) {
estoqueBaixo.forEach(produto => {
console.log("- " + produto.nome + " (Restam apenas " + produto.quantidade + " unidades)");
});
} else {
console.log("Nenhum produto com estoque baixo.");
}
}
analisarEstoque(estoque);
