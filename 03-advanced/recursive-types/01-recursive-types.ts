// Рекурсивный тип для описания произвольных вложенных данных (типа JSON)

type PossibleData = 
  | string                           // Примитив: строка
  | number                           // Примитив: число
  | boolean                          // Примитив: булево значение
  | PossibleData[]                   // Рекурсия: массив, содержащий элементы типа PossibleData
  | { [key: string]: PossibleData }; // Рекурсия: объект, где значения полей — это PossibleData

// Функция принимает данные абсолютно любой глубины вложенности, 
// если они соответствуют базовым типам и структурам из PossibleData
function parseData(data: PossibleData) {
  // Логика обработки...
}

// Пример использования: глубоко вложенный объект с массивами и примитивами
parseData({
  user: { data: { age: 20, hashtags: [{ hasCar: true }] } },
  data: [{ name: 'John' }],
  name: 'Alex'
});

export {};