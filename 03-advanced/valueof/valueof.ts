// =================================================================
// Кастомная утилита ValueOf для извлечения типов значений
// =================================================================

// 1. Исходный тип/интерфейс пользователя
type User = {
  name: string;
  age: number;
};

// 2. Дженерик-утилита ValueOf
// - <T extends Record<string, unknown>> : ограничение (constraint), которое
//   гарантирует, что в T можно передать ТОЛЬКО объект со строковыми ключами.
// - keyof T : получает Union всех ключей объекта (для User это 'name' | 'age').
// - T[keyof T] : индексируемый доступ, который берет типы всех значений по этим ключам.
type ValueOf<T extends Record<string, unknown>> = T[keyof T];

// 3. Пример использования с типом User
// В Test попадает объединение типов значений: string | number
type Test = ValueOf<User>;


// 4. Работа с конкретным JS-объектом
const alex = {
  name: 'alex',
  age: 22,
};

// typeof alex — превращает JS-объект в TS-тип: { name: string, age: number }
// ValueOf<typeof alex> — извлекает типы значений этого объекта (string | number)
type AlexType = ValueOf<typeof alex>;

export {};