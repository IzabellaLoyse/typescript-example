// Function Return Types and Void

// Retorno da Função

/*
 * Retorne o tipo da função caso você tenha certeza do seu retorno
   caso contrário, deixe o TypeScript inferir o tipo de dado retornado
*/

const addNumber = (n1: number, n2: number): number => {
  return n1 + n2;
};
console.log(addNumber(2, 2));

// O TypeScript inferirá o tipo de retorno como string
const addReturnType = (a: string, b: string) => {
  return a.toString() + b.toString();
};
console.log(addReturnType('Hello', 'World'));

// O Retorno da Função será void(vazio)
const printResultVoid = (num: number): void => {
  console.log('Result: ' + num);
};
console.log(printResultVoid(2));


//Function Types

/*
* Function Types são tipos que descrevem uma função em relação aos parâmetros
 e ao valor de retorno dessa função
* Os Function Types nos permitem descrever qual tipo de função especificamente
  que queremos usar em algum lugar, seja um valor esperado em um parâmetro
  para criar uma função de callback ou uma variável
*/

let combineValues: (a: number, b: number) => number;
combineValues = addNumber;

console.log(combineValues(8, 8));


// Function Types and Callbacks
// cb:(num: number) => void é uma função de callback

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

addAndHandle(10, 20, (result) => {
  console.log(result);
});
