// example 5
type Success = {
  name: string,
  status: 200,
  hasCar: boolean
}

type ErrorData = {
  text: string,
  status: 400 | 500
}

type Result = Success | ErrorData

// Exclude и Extract умеют фильтровать юнионы по частичной структуре (паттерну).
// TS проверяет не полное совпадение типа, а наличие указанных свойств (например, { status: 200 }).
type test = Exclude<Result, { status: 200 }> // Итог: ErrorData


/**
 * Exclude / Extract работают с неполными типами (сигнатурами):
 * Нам НЕ нужно передавать весь тип целиком (со всеми name, hasCar и т.д.).
 * Достаточно передать шаблон `{ status: 200 }`. 
 * 
 * TS проверяет условия: "Можно ли подставить тип из юниона под этот шаблон?"
 * - Success имеет status: 200 -> совпадает -> Exclude его ИСКЛЮЧАЕТ.
 * - ErrorData имеет status: 400 | 500 -> не совпадает -> ОСТАЕТСЯ.
 */