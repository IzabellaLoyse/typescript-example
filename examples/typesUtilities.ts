// Type Utilities

// São utilitários para trabalhar com tipos

/*
 * Readonly => esse utilitário faz com que todos os itens de um tipo sejam 
   apenas de leitura. Isso impossibilita que um valor seja reatribuído 
   em tempo de execução.

 * Partial => Esse utilitário faz com que todas as propriedades de uma 
   interface ou Type se tornem opcionais.

 * Pick<Type, Keys> => Com esse utilitário nós podemos criar um tipo 
   escolhendo quais partes de um tipo base queremos utilizar. 
   Os "argumentos" que o Pick recebe são um tipo e uma lista 
   de chaves separadas por |.

 * O Omit faz exatamente o contrário do Pick. Ele extrai todas as propriedades 
   de um tipo, com exceção das que forem passadas como argumento. 

 * Quando escolher omit ao invés do pick?
   Isso é simples, não faz sentido listar todas as propriedades de um tipo 
   com pick, quando podemos apenas passar as propriedades que não queremos. 
*/

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// Usando o Readonly para imutabilidade
const todo: Readonly<Todo> = {
  title: 'Learn Typescript',
  description: 'Learn Typescript',
  completed: false,
};

//todo.completed = true; //não se pode alterar o valor, apenas pode ler esse valor
console.log(todo.completed);
console.log(todo);

// Função para atualizar o valor de completed
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo2 = updateTodo(todo, { completed: true });

//Pick => se eu quero pegar um número pequeno de propriedades dentro de várias coisas
type TodoPreview = Pick<Todo, 'title' | 'description'>;

const todo3: TodoPreview = {
  title: 'Learn Typescript',
  description: 'Learn Typescript',
};

// Omit => se eu quero pegar muitas propriedades e esconder poucas coisas

type TodoPreview2 = Omit<Todo, 'description'>;

const todo4: TodoPreview2 = {
  title: 'Learn Typescript',
  completed: false,
};
