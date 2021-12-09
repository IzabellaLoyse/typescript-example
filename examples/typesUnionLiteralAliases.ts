// Union Types
/*
  * O Union é um dos tipos do TS que nos permite combinar 
    um ou mais tipos de types
*/

const combine = (input1: number | string, input2: number | string) => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combineNumbers = combine(10, 20);
console.log(combineNumbers);

const combineStrings = combine('Max', 'Anna');
console.log(combineStrings);

// Literal Types

/*
  * O Literal Types nos permite definir um tipo de valor
    que não pode ser alterado
*/
const addString = (result: 'success' | 'failure') => {
  if (result === 'success') {
    return 'The operation was successful';
  } else {
    return 'The operation failed';
  }
};

console.log(addString('success'));

//Type Aliases

/*
 * O Type Aliases pode utilizar o mesmo tipo mais de uma vez
   e se referir a ele por um único nome
 */

type Combinable = number | string;

const combinableType = (input1: Combinable, input2: Combinable) => {
  return input1.toString() + input2.toString();
};

console.log(combinableType('izabella', 21));
