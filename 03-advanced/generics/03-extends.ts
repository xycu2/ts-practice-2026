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

export {}