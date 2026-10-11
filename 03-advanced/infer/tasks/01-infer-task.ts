type Split<S> = S extends `${(infer S1)}.${infer S2}.${infer S3}`
  ? [S1, S2, S3]
  : never

type Test1 = Split<'a.b.c'>; // ['a', 'b', 'c']
type Test2 = Split<1234>; // never

export {}