// Primeiro programa
console.log('Olá mundo');

// -------------------------------------------
// Variáveis
// -------------------------------------------
// Palavra-chave de linguagem para definir que é uma variável é a: let
let faturamento = 1500;
console.log(`O meu faturamento inicial é: ${faturamento}`);
faturamento = faturamento + 500;
console.log(`O meu faturamento após atualização é: ${faturamento}`);

// -------------------------------------------
// Constante
// -------------------------------------------
// Palavra-chave de linguage para definir uma constante é a: const
const conversaoDolar = 5.5;
console.log(`Valor considerado para o dolar: ${conversaoDolar}`);

// Diferença entre variável (let) e constante (const)
// É que a variavél é mutável ao longo do código
// A constante é fixa e permanente ao longo do código
// -------------------------------

// -------------------------------------------
// Types (tipos)
// -------------------------------------------

// Quando nós armazenamos dados, eles podem possuir tipos diferentes
// String = texto alfanumérico (texto ou números)
// Sempre envolvido dentro de aspas duplas (""), aspas simples ('') ou acento agudo (``)
const nome = 'William Castro Coelho';

// Number = números
const idade = 31;
const temperatura = 29.52; // float (ponto flutuante)

// Boolean = booleano
// Ele possui apenas dois estados: true  (1 - verdadeiro) / false (0 - falso)
const verdadeiroOuFalso = true;

// Array = grupo de valores (de múltiplos tipos ou não)
// Que são separados por vírgula
// O primeiro valor de um grupo de valores (array) é: 0, 1, 2, 3, ...
const frutas = ['maçã', 'abacaxi', 'banana'];

console.log(frutas[2]);
