// ** Type Alias **

// definição de um tipo alias

type User = {
  name: string;
};

type Password = {
  password: string;
};

// intersection type
type UserInput = User & Password;

// implements
class ImplementsInput implements UserInput {}

// declarar função
type getSimilars = (title: string) => void;

// ** Interfaces **

// definição de uma interface

interface IUser {
  name: string;
}

interface IPassword {
  password: string;
}

// intersection interface // extends

interface IUserInput extends IUser, IPassword {}

// implements
class IImplementsInput implements IUserInput {}

// declarar função
interface getSimilarsT {
  (title: string): void;
}

// ************* Diferenças *******************

// O Type Alias permite declarar tipos primitivos
type IDT = number | string | boolean;

// Em Interface não da pra fazer isso
interface ID extends number {} // não da pra fazer isso

// O Type Alias pode declarar normalmente as tuplas
type UserT = [string, number];
['Iza', 123] as UserT;

//Em Interface não da pra declarar tuplas

// O Type Alias aceita apenas uma declaração por escopo
type JQueryT = { a: string };
type JQueryT = { b: string }; // vai dar erro

// Em Interfaces podemos ter múltiplas declarações por escopo e ele une pelo mesmo nome
interface JQuery {
  a: string;
}

interface JQuery {
  b: string;
}

// Objeto mergeado => uniu as informações de outras interfaces
const $: JQuery = {
  a: 'foo',
  b: 'bla',
};


/* Interfaces
 * Uitlizar Interfaces quando estiver criando Objetos/ Classes (POO)
 * Quando estiver criando Libs, prefira Interfaces, porque são extensíveis
 */


/* Type Alias
 * Utilizado na maioria das vezes
 * Inicia utilizando Typer se ficar complexo extenda para Interface
 * React - Props
 */
