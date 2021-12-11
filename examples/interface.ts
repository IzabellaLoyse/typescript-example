// Interfaces

/*
 * São um conjunto de dados para descrever a estrutura de um objeto
 * Podem ser extendidas
 * São para descrições de objetos complexas
 */

interface Game {
  title: string;
  description: string;
  readonly genre: string;
  plataform?: string[]; // (?) -> opcional

  // declara assinatura do método
  getSimilars?: (title: string) => void;
}

// criação do objeto do tipo Game
const tlou: Game = {
  title: 'The Last of Us',
  description: 'The best game in the world',
  genre: 'Action',
  plataform: ['PS4', 'PS4'],

  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}`);
  },
};

console.log(tlou.genre);

// Utilização de Type Guard
if (tlou.getSimilars) {
  tlou.getSimilars(tlou.title);
}

// interface extendida da interface Game
interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftbehind: DLC = {
  title: 'Left Behind',
  description: 'The best game in the world',
  genre: 'Action',
  plataform: ['PS4', 'PS4'],
  originalGame: tlou,
  newContent: ['New content 1', 'New content 2'],
};

// Implementação de uma classe com interface

class CreateGame implements Game {
  constructor(
    public title: string,
    public description: string,
    public genre: string,
  ) {}
}
