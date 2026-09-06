export {} // Делаем файл изолированным модулем, чтобы избежать конфликтов имен в проекте

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