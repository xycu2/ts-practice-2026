type Unshift<T extends unknown[], U> = [U, ...T]

type Test = Unshift<['1', 2, '3'], boolean>

type Result = Unshift<[1, 2], 0> // [0, 1, 2]'

// import type { Equal, Expect } from '@type-challenges/utils'

// type cases = [
//   Expect<Equal<Unshift<[], 1>, [1]>>,
//   Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
//   Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
// ]

export {}