// Кортеж (Tuple) заставляет массив иметь строго фиксированную длину и типы
type PluralForms = [string, string, string];

// В массиве ровно 3 элемента: [для 1, для 2-4, для 0 и 5+]
const PLURAL: PluralForms = ['товар', 'товара', 'товаров'];

/**
 * @param value — число, для которого нужно подставить правильную форму
 * @param forms — кортеж из 3 форм слова
 */
function plural(value: number, forms: PluralForms): string {
  // Простая математика для определения правильного индекса в кортеже
  const mod10 = value % 10;
  const mod100 = value % 100;

  if (mod100 >= 11 && mod100 <= 14) return `${value} ${forms[2]}`;
  if (mod10 === 1) return `${value} ${forms[0]}`;
  if (mod10 >= 2 && mod10 <= 4) return `${value} ${forms[1]}`;

  return `${value} ${forms[2]}`;
}

// Примеры использования:
plural(1, PLURAL); // "1 товар"
plural(2, PLURAL); // "2 товара"
plural(5, PLURAL); // "5 товаров"

// ❌ Ошибка TS: Если передать массив не из 3 элементов, компилятор не пропустит код
// plural(5, ['товар', 'товара']);