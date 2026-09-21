type User = {
  name: string,
  age: number
}

// 1. keyof User      -> получает Union всех ключей: 'name' | 'age'
// 2. User['name' | 'age'] -> достаёт типы значений по этим ключам: string | number
// Итог: в Test1 попадает объединённый тип string | number
type Test1 = User[keyof User]

export {}