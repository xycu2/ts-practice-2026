type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

type Result = Concat<[1], [2]> // expected to be [1, 2]

// import type { Equal, Expect } from '@type-challenges/utils'

// const tuple = [1] as const

// type cases = [
//   Expect<Equal<Concat<[], []>, []>>,
//   Expect<Equal<Concat<[], [1]>, [1]>>,
//   Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
//   Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
//   Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
// ]

// // @ts-expect-error
// type error = Concat<null, undefined>

export {}