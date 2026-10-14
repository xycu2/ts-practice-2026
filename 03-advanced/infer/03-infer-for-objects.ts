type GetValue<T> = 
  // 1. Извлекаем типы ВСЕХ значений объекта через infer R.
  // Для user это превратится в Union: string | number | boolean
  T extends { [key in string]: infer R } 
    // 2. Благодаря дистрибутивности, условный тип проверяет каждый элемент Union по очереди:
    // - string extends string -> string
    // - number extends string -> never
    // - boolean extends string -> never
    ? R extends string ? R : never
    : never;

// Тип объекта user: { name: string, age: number, hasCar: boolean }
const user = {
  name: 'Alex',
  age: 22,
  hasCar: true
}

// 3. В результате получаем (string | never | never).
// В Union-типах `never` — это пустое множество, поэтому он фильтруется (выбрасывается).
// Итоговый тип Test: string
type Test = GetValue<typeof user>;