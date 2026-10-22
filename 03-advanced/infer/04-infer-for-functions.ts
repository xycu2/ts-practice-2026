type MyReturnType<T> = T extends () => infer R
  ? R
  : never;


type Test = MyReturnType<() => number> // number
type Test2 = MyReturnType<() => string> // string

export {}