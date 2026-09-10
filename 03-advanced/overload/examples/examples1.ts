function getData(id: number): string;
function getData(id: number[]): string[];

// 2. Реализация функции
function getData(id: number | number[]): string | string[] {
  if (Array.isArray(id)) {
    // Если передали массив [1, 2], возвращаем массив имен
    return id.map(item => `User_${item}`);
  }

  // Если передали просто число 1, возвращаем одно имя
  return `User_${id}`;
}

// 3. Проверь подсказки типов в VS Code
const singleUser = getData(1);       // Должен быть тип: string
const userList = getData([1, 2, 3]); // Должен быть тип: string[]