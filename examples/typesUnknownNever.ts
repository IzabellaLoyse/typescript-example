// The Unknown Type

/*
 * O Tipo Unknown aceita que seja passado qualquer tipo
 * Não é uma boa prática, pois pode gerar erros inesperados
*/ 

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
  userName = userInput;
}

// Type Never

const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};

console.error(generateError('An error occured!', 500));
