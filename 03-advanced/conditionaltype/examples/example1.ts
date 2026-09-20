const wrapInArray = <T extends string | string[]>(value: T): T extends unknown[] ? T : T[] => {
  return (
    Array.isArray(value) ? value : [value]
  ) as T extends unknown[] ? T : T[] // делаем кастование, чтобы тип T совпал с возвращаемым типом
}

// при передаче обычного числа , у нас вместо T подставляется это число
const d1 = wrapInArray<string>('132423') // string[]
const d4 = wrapInArray<string[]>(['12', '12', '12']) // string[] вместо string[][]