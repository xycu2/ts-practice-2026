// =================================================================
// Conditional Types (Условные типы) в TypeScript
// =================================================================

// 1. Вспомогательный тип: проверяет, является ли тип T числом (number)
// Если T наследует/совпадает с number -> возвращает true, иначе -> false
type isNumber<T> = T extends number ? true : false;

// 2. Основной тип: вложенная проверка (как else if в JS)
// Сначала проверяем: T — это string?
// - Если ДА -> возвращаем true
// - Если НЕТ -> переходим к проверке isNumber<T>
type isStringOrNumber<T> = T extends string ? true : isNumber<T>;

// 3. Проверка работы:
// Передаем 123 (литеральный тип числа).
// - 123 extends string ? -> false
// - Переходим в isNumber<123> -> 123 extends number ? -> true
// Итог: тип result равен true
type result = isStringOrNumber<123>; // true

export {};