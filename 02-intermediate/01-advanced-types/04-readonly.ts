// Обычный тип с явным readonly для каждого свойства
type User = {
  readonly name: string
  readonly age: number
}

const user: User = {
  name: 'Demid',
  age: 15
}

// Ошибка TS: Cannot assign to 'name' because it is a read-only property.
// readonly запрещает перезаписывать свойства объекта после создания

// user.name = 'Alex' // error
// user.age = 22 // error

// ==========================================
// Утилитарный тип Readonly<T>
// ==========================================

type Article = {
  title: string
  views: number
}

// Readonly<T> автоматически делает ВСЕ свойства объекта readonly,
// чтобы не прописывать readonly перед каждым ключом вручную
const post: Readonly<Article> = {
  title: 'TypeScript Basics',
  views: 100
}

// Тоже выдаст ошибку компиляции:

// post.views = 101 // error