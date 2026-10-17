type MyType<T> = T extends { [key: string]: infer U } 
? U extends (...args: any[]) => any
  ? ReturnType<U>
  :never
: never

type Result = MyType<{ handler: (x: number) => string  }>
// Параметры любой функции в TypeScript на уровне типов всегда представляются в виде массива (кортежа).
// (x: number, y: string) => string тут типы параметров представляются в виде [number, string]

// Поэтому запись (...args: any[]) => any универсальна и матчит функции с любым количеством аргументов (от нуля и больше), так как их параметры упакованы в массив.
