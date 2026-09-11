// 1. Сигнатуры перегрузки напиши тут
function filterData(arr: string[], query: string): string[];
function filterData(arr: number[], query: number): number[];

// 2. Реализация функции
function filterData(arr: (string | number)[], query: string | number): (number | string)[] {
  if (typeof query === 'string') {
    return (arr as string[]).filter(item => item.includes(query));
  }
  
  return (arr as number[]).filter(item => item >= query);
}

// 3. Проверка
const res1 = filterData(['apple', 'banana', 'cherry'], 'an'); // Ожидаемый тип: string[]
const res2 = filterData([10, 20, 30, 40], 25);               // Ожидаемый тип: number[]