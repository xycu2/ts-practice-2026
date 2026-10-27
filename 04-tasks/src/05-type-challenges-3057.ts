type Push<T extends unknown[], U extends unknown> = [...T, U]

type Result = Push<[1, 2], '3'> // [1, 2, '3']

// import type { Equal, Expect } from '@type-challenges/utils'

// type cases = [
//   Expect<Equal<Push<[], 1>, [1]>>,
//   Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
//   Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
// ]

// type errors = [
//   // @ts-expect-error
//   Expect<Equal<Push<number[], string>, string[]>>,
//   // @ts-expect-error
//   Expect<Equal<Push<string[], number>, [string, number]>>,
// ]

export {}