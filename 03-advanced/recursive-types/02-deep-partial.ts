// 1. Создаем дженерик-тип DeepPartial, который принимает любой тип T.
// Это рекурсивный утилитарный тип для глубокой сделать-optional типизации.
type DeepPartial<T> = {
  // 2. Mapped Type (сопоставимый тип):
  // Проходимся по каждому ключу 'key' из типа T (keyof T).
  // Знак '?' делает этот ключ необязательным на текущем уровне.
  [key in keyof T]?: T[key] extends Record<string, unknown> 
  // 3. Conditional Type (условный тип) + Record:
  // Проверяем значение T[key]: является ли оно объектом (структурой с ключами-строками)?
  ? DeepPartial<T[key]> // 4. Рекурсивный вызов: если это объект, вызываем DeepPartial для него снова
  : T[key] // 5. Базовый случай: если это примитив (string, number и т.д.), оставляем тип как есть
}

// Исходный тип объекта с двухуровневой вложенностью
type User = {
  name: string;
  details: {
    age: number;
    address: {
      city: string;
    };
  };
};

// Применяем нашу утилиту: теперь name, details, age, address и city становятся необязательными "?"
type PartialUser = DeepPartial<User>;

// Пример проверки: объект валиден, даже если бы мы убрали часть полей или передали их частично
const test: PartialUser = {
  name: "fsefwe",
  details: {age: 4124132, address: { city: 'adasds' }}
}
