// Исходный объект для проверки
const alex = {
  id: 0,
  name: 'alex',
  age: 20,
  hasCar: true
}

function updateValue<
  // 1. Obj — ограничение: передаваемый аргумент обязан быть объектом
  Obj extends object,

  // 2. Key — извлекаем все ключи объекта (keyof Obj), 
  // но с помощью Exclude исключаем ключ 'id' (его менять запрещено)
  Key extends Exclude<keyof Obj, 'id'>,

  // 3. Val — тип значение привязан к конкретному ключу (Indexed Access Type).
  // Значение должно строго соответствовать типу свойства Obj[Key]
  Val extends Obj[Key],
  // Любой тип из объекта alex
  DefVal extends Obj[Exclude<keyof Obj, 'id'>]
>(
  obj: Obj,   // Сам объект
  key: Key,   // Разрешенный ключ (любое поле, кроме 'id')
  value: Val,  // Значение, подходящее по типу к выбранному ключу
  defaultVal: DefVal // Значение, имеет любой тип, который есть в объекте alex
) {
  // Реализация функции (например: obj[key] = value)
}

// Пример правильного вызова:
// 1. Obj = typeof alex
// 2. Key = 'age' (допустимо, так как это не 'id')
// 3. Val = number (так как alex['age'] имеет тип number)
updateValue(alex, 'age', 22, 1) // Все типы совпали — ошибок нет

// Примеры ошибок, которые отловит TypeScript:
// updateValue(alex, 'id', 10)       // Ошибка: 'id' исключен через Exclude
// updateValue(alex, 'age', '30')    // Ошибка: '30' это string, а должно быть number (Obj['age'])
// updateValue(alex, 'job', 'dev')   // Ошибка: ключа 'job' нет в объекте