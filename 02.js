//1
//a) Exibir no console a posição da letra h na string txt.
let txt="abcdefghijklm";
console.log(txt.indexOf("h"));

//b) Exibir no console a palavra bananas, use o método slice.
let txt1="Posso comer bananas o dia todo";
console.log(txt1.substring(12,19));

//c) Substituir a palavra "Olá" pela palavra "Bem vindo", e exibir no console.
let txt2="Olá, mundo";
console.log(txt2.replace("Olá","Bem vindo"));

//d) Converter o texto em letras maiúsculas e exibir no console.
let txt3="Olá, mundo";
console.log(txt3.toUpperCase());

//e) Converter o texto em letras minúsculas e exibir no console.
let txt4="Olá, mundo";
console.log(txt4.toLowerCase());

//f) Exibir no console o tamanho da string.
let txt5="Posso comer bananas o dia todo";
console.log(txt5.length);

//g) Concatenar as strings e exibir no console.
let str1="Hello ";
let str2="World!";
let resultado=str1.concat(str2);
console.log(resultado);

//h) Ordenar o array de frutas em ordem alfabética e exibir no console
const fruits=["Banana","Orange","Apple","Kiwi"];
console.log(fruits.sort());

//i) Exibir no console o array de frutas, Remover Banana e Kiwi do array de frutas e exibir no console o novo array.
const fruits2=["Banana","Orange","Apple","Kiwi"];
fruits2.shift();
fruits2.pop();
console.log(fruits2);

//j) Exibir no console o array de frutas, adicionar Uva, Caju e Kiwi no array de frutas e exibir no console o novo array.
const fruits3=["Banana","Orange","Apple"];
fruits3.splice(3,3,"Uva", "Caju", "Kiwi");
console.log(fruits3);

//k) Exibir no console o array de frutas, adicionar Pera e Manga no início do array de frutas, remover  o último item do array e exibir no console o novo array.
const fruits4=["Banana","Orange","Apple"];
fruits4.unshift("Pera","Manga");
fruits4.pop();
console.log(fruits4);