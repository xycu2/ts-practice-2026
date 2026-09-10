// Сигнатуры перегрузки: связываем тип входного аргумента с типом возвращаемого значения
function transform(value: string): string;
function transform(value: number): number;
// Реализация функции
function transform(value: number | string): string | number {
  if (typeof value === "string") {
    return 'hello';
  }

  return 1;
}

// Теперь TS точно выводит тип результата (string или number), а не union (string | number)
const numResult = transform(1);   // тип: number
const strResult = transform('1'); // тип: string