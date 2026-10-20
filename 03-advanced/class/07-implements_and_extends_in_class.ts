/**
 * Базовый тип (контракт) для блокировки пользователей.
 */
type BaseUser = {
  blockUser: (id: number) => void;
  getInfo: () => string; // Метод также заявлен в контракте
}

/**
 * Дополнительный тип (контракт) для рендеринга данных.
 */
type RenderData = {
  name: string;
  age: number;
  render: (name: string, age: number) => void;
}

/**
 * Базовый класс, который дает готовую логику (конструктор и метод getInfo).
 */
class AbstractUser {
  constructor(
    public name: string,
    public age: number,
  ) {}

  getInfo = () => {
    return `${this.name}, возраст: ${this.age}`;
  }
}

/**
 * Ключевые понятия здесь:
 * 1. `extends AbstractUser` — наследование. Класс забирает готовые свойства (name, age) 
 *    и методы (getInfo), избавляя нас от дублирования кода.
 * 2. `implements BaseUser, RenderData` — реализация контрактов. Мы гарантируем TypeScript, 
 *    что класс будет содержать все методы и свойства, описанные в этих типах.
 */

// Пример: Совмещение наследования и множественной реализации типов
class User extends AbstractUser implements BaseUser, RenderData { 
  // Свойства name и age уже пришли из AbstractUser, поэтому их не нужно объявлять заново.
  
  test = ''; // Собственное уникальное свойство класса User
  
  blockUser = (id: number) => {
    // Реализация обязательного метода из контракта BaseUser
  };

  render = () => {
    // Реализация обязательного метода из контракта RenderData
  };
}

// Создаем экземпляр класса, передавая параметры в конструктор родителя (`AbstractUser`)
const userAlex = new User('Alex', 22);

// Проверяем работу унаследованного метода
console.log(userAlex.getInfo()); // Выведет имя и возраст

export {}