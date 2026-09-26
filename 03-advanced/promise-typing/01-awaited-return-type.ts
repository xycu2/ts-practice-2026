// Избавляемся от промисов

// 1. Функция возвращает Promise с массивом пользователей
function getUser() {
  // { name: 'alex', age: 20} // 1000
  return Promise.resolve([{ name: 'alex', age: 20}])
}

// Вызов функции для получения промиса
const test = getUser()

// 2. Рендерим пользователей, извлекая чистый тип из промиса
// ReturnType — достает возвращаемый тип: Promise<{ name: string; age: number }[]>
// Awaited<...> — снимет обёртку Promise, оставляя чистый массив: { name: string; age: number }[]
function renderUser(users: Awaited<ReturnType<typeof getUser>>) {
  // Теперь users — это чистый массив, и мы можем использовать все методы массивов
  users.map(() => {}) // Можем использовать методы массивов

}

export {}