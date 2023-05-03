
// 1. Resolva os passos a seguir
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e lista de compras (um array que sempre terá exatamente três itens). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// "Olá, nome. Hoje seus itens prioritários na lista de comprar são ___, ____ e ____"

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de itens. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

// function shoplistReturn(shoplist) {
//     return `Olá, ${shoplist.name}. Hoje seus itens prioritários na lista de comprar são ${shoplist.items[0]}, ${shoplist.items[1]} e ${shoplist.items[2]}.`
// }

// function newShoplistReturn(newItems) {
//     return `Olá, ${newItems.name}. Hoje seus itens prioritários na lista de comprar são ${newItems.items[0]}, ${newItems.items[1]} e ${newItems.items[2]}.`
// }

// let shoplist = {
//     name: prompt("Insira seu nome:"),
//     items: prompt("Insira 3 itens que tu tem que comprar:").split(' ')
// }

// console.log(shoplistReturn(shoplist))

// let newItems = prompt("Você deseja trocar sua prioridade de items?", "S/N")

// if (newItems.toLowerCase() === "s") {
//     let newItems = {
//         ... shoplist,
//         items: prompt("Insira 3 itens que tu tem que comprar:").split(' ')
//     }

//     console.log(newShoplistReturn (newItems))
// }

// 2. Resolva os passos a seguir: 
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`

// function caracteres (p) {
//     return [p.nome.length, p.idade.length, p.profissao.length]
// }

// let p = {
//     nome: prompt('Qual seu nome?'),
//     idade: prompt('Qual sua idade?'),
//     profissao: prompt('Qual sua profissão?')
// }

// console.log(`Seu nome, ${p.nome}, possui ${caracteres(p)[0]} caracteres.`)
// console.log(`Sua idade, ${p.idade}, possui ${caracteres(p)[1]} caracteres.`)
// console.log(`Sua profissão, ${p.profissao}, possui ${caracteres(p)[2]} caracteres.`)

// 3. Resolva os passos a seguir: 
    
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
    
//     💡  Dica
        
//     Aqui você deve usar o método **push()**
        
//     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

// Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

// function pushing (...objetos) {
//     let resultado = {};
//     objetos.forEach(objeto => {
//         for (let chave in objeto) {
//         resultado[chave] = objeto[chave];
//         }
//     });
//     carrinho.push(resultado)
// }

// let carrinho = []

// let f1 = {
//     nome: prompt('Insira a primeira fruta do seu sacolão:'),
//     disponibilidade: prompt('Essa fruta está disponível?')
// }

// if (f1.disponibilidade.toLowerCase() === 'sim' || f1.disponibilidade.toLowerCase() === 's') {
//     f1.disponibilidade = true
// } else {
//     f1.disponibilidade = false
// }

// let f2 = {
//     nome: prompt('Insira a segunda fruta do seu sacolão:'),
//     disponibilidade: prompt('Essa fruta está disponível?')
// }

// if (f2.disponibilidade.toLowerCase() === 'sim' || f2.disponibilidade.toLowerCase() === 's') {
//     f2.disponibilidade = true
// } else {
//     f2.disponibilidade = false
// }

// let f3 = {
//     nome: prompt('Insira a última fruta do seu sacolão:'),
//     disponibilidade: prompt('Essa fruta está disponível?')
// }

// if (f3.disponibilidade.toLowerCase() === 'sim' || f3.disponibilidade.toLowerCase() === 's') {
//     f3.disponibilidade = true
// } else {
//     f3.disponibilidade = false
// }

// pushing(f1)
// pushing(f2)
// pushing(f3)

// console.log(carrinho)

// console.log(`${p.nome} possui ${p.idade} anos e atua como ${p.profissao}`) // -> variáveis arrecadadas a partir do objeto declarado no exercício anterior