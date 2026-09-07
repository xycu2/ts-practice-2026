// Array
const SUPPORT_LANG = ['ru', 'en', 'fr'] as const
// Тип: readonly ['ru', 'en', 'fr'] (не string[], а кортеж из конкретных строк)

// Object
const statuses = {
  200: 'OK',
  404: 'NOT FOUND'  
} as const
// Все свойства объекта становятся readonly, а значения — литералами ('OK', 'NOT FOUND')

// as const превращает обычные типы в узкие литеральные (Literal Types)
// и делает объект/массив доступным только для чтения (readonly)