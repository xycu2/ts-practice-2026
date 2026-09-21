// Объявляем кортеж (Tuple): фиксированная длина и строгий тип для каждой позиции
type Tuple = [number, string, boolean]

const Arr: Tuple = [10, 'dsfsd', true]

// Доступ по числовому индексу к ТИПУ кортежа:
// Достаёт тип элемента на позиции 0 -> number
type Test1 = Tuple[0] // number

// typeof Arr -> превращает переменный JS-массив/кортеж обратно в его TS-тип
// [0] -> достаёт тип первого элемента из этого полученного типа -> number
type Test2 = typeof Arr[0] // number

export {}