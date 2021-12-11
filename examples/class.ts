// Class - POO

// Modifiers => Modificadores de acesso

/*
 * public - Todos os membros públicos podem ser acessados ​​em qualquer 
   lugar sem quaisquer restrições.

 * private - garante que os membros da classe fiquem visíveis apenas para 
   aquela classe e não sejam acessíveis fora da classe que a contém.

 * protected - O modificador de acesso protegido é semelhante ao modificador 
   de acesso privado, exceto que os membros protegidos podem ser acessados ​​
   usando suas classes derivadas.

 * readonly - acesso somente leitura
 */

// Forma longa de se criar uma classe em TypeScript

class Company {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

//Forma simples de se criar uma classe em TypeScript
// Sempre passar o Modifier no constructor quando escrever de forma
// simples a classe

class UserAccount {
  constructor(public name: string, public age: number) {}

  //método
  logDetails(): void {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

// herança => estendendo a classe UserAccount

class CharAccount extends UserAccount {
  constructor(
    public name: string,
    public age: number,
    public nickname: string,
    public level: number,
  ) {
    // super vai pegar as propriedades da classe pai
    super(name, age);
    nickname = nickname;
    level = level;
  }

  // get => tem a função de retornar um valor
  get getLevel() {
    return this.level;
  }

  // set => tem a função de atribuir um valor
  set setLevel(level: number) {
    this.level = level;
  }
}

const user = new UserAccount('Izabella', 21);
console.log(user);
console.log(user.name);
user.logDetails();

const jorge = new CharAccount('Jorge', 24, 'Jorgeh', 100);
console.log(jorge);
jorge.logDetails();

console.log(jorge.getLevel);
jorge.setLevel = 200;
console.log(jorge.getLevel);


// Abstract Class => não se pode criar objetos a partir dela mas pode ser 
//extendendida

abstract class Abstract {
  constructor(public name: string) {}
}

class ExtendedAbstract extends Abstract {
  constructor(public name: string) {
    super(name);
  }
}