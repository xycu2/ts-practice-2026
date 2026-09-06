// never 

// Функция-имитация стора: возвращает либо объект с именем пользователя, либо null
function Store(): { userName: string } | null {
  return null
}

// Функция возвращает string, а тип never указывает, что при отсутствии данных
// функция никогда не завершится штатно (выбросит ошибку)
function getUSerName(): string | never {
  const data = Store()

  // Guard Clause: если данные есть, возвращаем имя (тип: string)
  if (data) {
    return data.userName
  }

  // Если data === null, выбрасываем исключение.
  // Вызов throw прерывает выполнение функции, поэтому эта ветка возвращает тип never
  throw new Error('getUSerName Error')
  // return null // Если раскомментировать, TS выдаст ошибку: null не подходит под string | never
}

// TypeScript анализирует функцию и понимает: 
// 1. В случае успеха вернется string.
// 2. В случае ошибки функция упадет и ничего не вернет (never).
// В результате объединения (string | never) тип переменной user становится чисто string!
const user = getUSerName() // Тип: string



//void

// "VoidFunction" === "() => void"
// Параметр onSaved ожидает функцию, результат работы которой нам НЕ важен
function getUserName2(value: string, onSaved: () => void) {
  // Вызываем передаваемый колбэк.
  // Так как тип возврата void, TS считает, что переменная data имеет тип void
  const data = onSaved()
  
  // Ошибка: Property 'hello' does not exist on type 'void'
  // В отличие от any, тип void защищает от вызова методов у пустого значения
  // data.hello() 
}

// 1. Передаем колбэк, который возвращает строку (string)
// TS это разрешает! Сигнатура () => void в параметрах означает:
// "Мне неважно, что вернет функция, я всё равно проигнорирую этот результат"
getUserName2('alex', () => {
  console.log('Все успешно сохранено')
  return 'sdfsdfsdf' // Можно возвращать любые данные, но внутри getUserName2 их не использовать
})

// 2. Передаем колбэк, который возвращает null
// Тоже полностью валидно с точки зрения TypeScript
getUserName2('demid', () => {
  console.log('Все успешно сохранено')
  return null // Поведение то же: результат игнорируется
})



// unknown

// В TypeScript переменная error в блоке catch по умолчанию имеет тип unknown.
// unknown — это безопасная альтернатива any. TS не позволит сразу вызвать метод или прочитать свойство,
// пока мы явно не проверим (не «докажем») тип значения через Type Guard.

try {
  // Выбрасываем null (в JS/TS в catch можно выбросить абсолютно любое значение)
  throw null
} 
catch (error) {
  // На этом этапе error имеет тип unknown.
  // Прямой вызов error.fgfg() вызовет ошибку компиляции TS.

  // Сужаем тип (Type Narrowing) с помощью последовательных проверок:
  if (
    // 1. Проверяем, что error является объектом (исключает primitive значения, но пропускает null, т.к. typeof null === 'object')
    error instanceof Object 
    
    // 2. Оператор 'in' проверяет наличие ключа 'fgfg' в объекте (и отсекает null, так как instanceof Object вернул true)
    && 'fgfg' in error 
    
    // 3. Проверяем, что свойство 'fgfg' действительно является функцией, а не строкой/числом/объектом
    && typeof error.fgfg === 'function'
  ) {
    // Внутри этого блока TS полностью убежден, что error — это объект, у которого есть метод fgfg.
    // Теперь вызов метода абсолютно безопасен!
    error.fgfg()
  }
}