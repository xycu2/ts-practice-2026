const age: number = 20; // numbers -12 or 12 or 23.43
const userName: string = 'Demid'; // strings "" or ''
const work: boolean = true; // true or false
const coding: undefined = undefined; // undefined используем с undefined
const github: null = null; // null используем с null

const cooking: any = 1; // any любой тип, лучше не использовать

// functions
function sayHello(a: string, b: number, c: boolean):string {
  return 'hello'
};

const sayWork = (a: string, b: number, c: boolean): string => {
  return 'working'
};

// Object

// "?" говорит ts, что это поле не обязательно , оно может быть, а может и нет
type User = {name: string; age: number; car?: {color : string}};
// type и interface выполняет одно и тоже
interface User2 {name: string; age: number; car: {color : string}};

const userInfo: User = {
  name: 'alex',
  age: 22,
  car: {
    color: 'red'
  }
};

// Arrays
const arr1: string[] = ['123', '1234434', '234234'];
const arr2: Array<string> = ['123', '1234434', '234234'];


// interface отличается от type тем, что при interface могут иметь одинаковое имя, но они будут склеиваться между собой
// в interface нельзя использовать "или" 

// В type мы можем использовать "или" следующим образом type user = string | number, а в interface не можем

// "И" в type мы можем записать так: 
// type User = obj1 & obj2 & obj3

// "И" в interface можем записать так:
// interface allObj extends obj1, obj2, obj3 {}