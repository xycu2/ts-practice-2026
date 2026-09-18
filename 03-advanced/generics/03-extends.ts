// extends сужает(ограничивает) типы данных в дженерике
// мы можем вызывать эту функцию только со строками или числами
function wrapInArray<T extends string | number>(value: T): T[] {
  return Array.isArray(value) ? value : [value];
};


// Все работает
wrapInArray(1);
wrapInArray('hello');

// Ошибка: мы не можем вызывать с типом данных boolean
// wrapInArray(true);

// example 2
// T обязан иметь свойство length типа number (массивы, строки)
function getLength<T extends { length: number }>(item: T): number {
  return item.length
}
getLength('hello')
getLength([1,2,3])

// getLength(123) // error: у числа нет св-ва length!



// ===================================================
// Разница вывода типов: Массив целиком vs Элемент массива
// ===================================================

// T — это ВЕСЬ массив целиком (тип контейнера)
function test<const T extends string[]>(data: T) {}

// T — это тип ОДНОГО элемента (TS объединяет элементы массива в Union)
function test2<T extends string>(data: Array<T>) {}

// T выводится как ['1', '2', '3'] (или string[]) — массив целиком
test(['1', '2', '3']);

// T выводится как '1' | '2' | '3' — сужение до типов отдельных элементов
test2(['1', '2', '3']);

export {}