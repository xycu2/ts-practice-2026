// Заворачиваем в промис и работаем с Generics (дженериками)

// 1. Функция-обёртка для обработки промиса
//  — дженерик-параметр, который автоматически определяет тип данных внутри передаваемого промиса
function promiseWrapper<T>(promise: Promise<T>) {
  // .then() принимает данные типа T и возвращает новый промис
  return promise.then((data) => {
    // Здесь мы можем трансформировать данные data (которые имеют тип T)
    // return transform(data)
  })
}

// 2. Явное создание промиса с явно указанным типом строк: Promise
const proms = new Promise<string>((resolve, reject) => {
  // Имитация получения данных (например, через fetch)
  // const data = fetch()
  resolve('data')


  // reject() — для обработки ошибок
})

// 3. Вызов обёртки: TypeScript сам выводит (infer), что T === string
promiseWrapper(Promise.resolve('dsfdfgs'))

