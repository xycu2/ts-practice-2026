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


