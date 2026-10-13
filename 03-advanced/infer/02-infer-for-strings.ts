type GetPrefix<T> = T extends `${string}:${infer R}` // Шаблон , как должна выглядеть строчка 
  ? `get:${R}` // Преобразуем ее к определнному виду
  : false;

const role = 'role:admin'
const roleUser = 'role:user'

type Test = GetPrefix<typeof role> // get:admin
type Test2 = GetPrefix<typeof roleUser> // get:user


export {}