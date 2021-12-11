// Generics

/*
* Generics como “sendo capaz de criar um componente que pode funcionar em 
  vários tipos, em vez de em um único”

* Generics são para tipos o que valores são para argumentos de função 
  — eles são uma maneira de dizer aos nossos componentes (funções, classes ou interfaces) 
  o tipo que queremos usar quando executarmos esse pedaço de código, da mesma forma 
  como dizemos a uma função quais valores usar como argumentos quando nós a executamos.
*/

// Sintaxe mais utilizada
//S => State
//T => Type
// K => Key, V => Value, E => Element

type numOrString = number | string;

// O Generic (S) foi extendido para aceitar number ou string
// Podemos passar valor padrão para o Genric <S extends number | string = string>
function useState<S extends numOrString>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

// const newState = useState(); // ao ter passado o valor padrão, não precisa declarar o tipo
// const newState = useState<number>(); // ao ter passado o tipo number, ira aceitar apenas esse tipo
const newState = useState<numOrString>(); // vai aceitar string ou number

newState.setState(10);
newState.setState('teste');
//newState.setState(true); // vai dar errado já que não foi declarado o tipo boolean

newState.getState();
