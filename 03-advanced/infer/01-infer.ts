/**
 * Проверяет, является ли массив массивом строк или чисел.
 * Использует условные типы и ключевое слово infer для вывода типа элемента.
 */
type IsStringOrNumberArray<T> = T extends (infer R)[] 
// R это элемент в массиве
// infer R вытаскивает тип элемента массива
  ? R extends string | number // R — это выведенный элемент массива
    ?  true 
    : false 
  : false;

// Примеры использования:
type Test1 = IsStringOrNumberArray<[1, 2, 3]>; // true
type Test2 = IsStringOrNumberArray<['a', 'b']>; // true
type Test3 = IsStringOrNumberArray<[boolean]>;  // false