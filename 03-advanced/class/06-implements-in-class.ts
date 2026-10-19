/**
 * Базовый тип (контракт) для блокировки пользователей.
 */
type BaseUser = {
  blockUser: (id: number) => void;
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
 * Ключевое слово `implements` говорит TypeScript, что класс должен 
 * строго соответствовать структуре указанных типов.
 * 
 * Важно:
 * 1. Мы можем указывать несколько типов (контрактов) через запятую.
 * 2. Класс обязан реализовать все свойства и методы из каждого подключенного типа.
 * 3. Класс также может содержать любые другие собственные свойства и методы.
 */

// Пример 1: Успешная реализация СРАЗУ ДВУХ типов (BaseUser и RenderData)
class User implements BaseUser, RenderData { 
  name = 'Alex'; // Свойство, требуемое типом RenderData
  age = 22;      // Свойство, требуемое типом RenderData
  
  blockUser = (id: number) => {
    // Реализация метода из контракта BaseUser
  };

  render = () => {
    // Реализация метода из контракта RenderData
  };
}

// Пример 2: Успешная реализация одного типа + собственный метод `sayHello`
class Moder implements BaseUser {
  sayHello = () => {
    // Уникальный метод класса Moder
  }; 
  
  blockUser = (id: number) => {
    // Реализация метода по контракту BaseUser
  };
}

// Пример 3: Демонстрация работы контракта
class Admin implements BaseUser {
  dsfgsfxzc = () => {}; // Какое-то кастомное свойство

  /**
   * ЕСЛИ УДАЛИТЬ ИЛИ ЗАКОММЕНТИРОВАТЬ ЭТУ СТРОКУ:
   * TypeScript выдаст ошибку уровня компиляции: 
   * "Class 'Admin' incorrectly implements type 'BaseUser'."
   */
  blockUser = (id: number) => {
    // Метод успешно реализован, ошибка пропала
  };
}

// Создаем экземпляр класса Admin и вызываем метод
const admin = new Admin();
admin.blockUser(2342);