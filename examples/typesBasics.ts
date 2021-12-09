// Types of TypeScript

// Types: number, string, boolean
const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
};

/* let number1: number;
   number1 = 5;
*/

const number1 = 50;
const number2 = 20;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);

//Type: object

const person: {
  name: string;
  age: number;
} = {
  name: 'Izabella',
  age: 21,
};

console.log(person);

//Type: Array

const hobbies: string[] = ['Cooking', 'Sports'];
console.log(hobbies);

const cars: string[] = [];
cars.push('BMW');
cars.push('Audi');
console.log(cars);

//Type: Tuple

/*
* No Array trabalhamos somente com um tipo de dado
* Já nas Tuple podemos trabalhar com vários tipos de dados
*/

const address: [string, number] = ['Superstreet', 99];
address.push('New York', 100);
console.log(address);


//Type: Enum
/*
 * O enum permite declarar um conjunto de valores/constantes pré-definidos
 */

enum Role {
  admin = 'izabella',
  editor = 'editor',
  author = 'author',
}

console.log(Role.admin);


//Type: any
/*
  * O any é usado como um tipo de dado que não foi definido
  * O any é usado para quando não sabemos o tipo de dado que será utilizado
  */

const addAny = (n1: any, n2: any): any => {
  return n1 + n2;
}