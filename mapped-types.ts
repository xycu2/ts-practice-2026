type User = {
  name: string;
  age: number;
};

// 1. keyof User                    -> 'name' | 'age'
// 2. key in keyof User             -> перебираем каждый ключ
// 3. as `get${Capitalize<key>}`    -> переименовываем: 'getName' | 'getAge'
// 4. User[key]                     -> динамически берем тип значения исходного свойства
type UserGetters = {
  [key in keyof User as `get${Capitalize<key>}`]: User[key];
};

// Использование на практике:
const userMethods: UserGetters = {
  getName: "Алексей", // Должно быть string
  getAge: 16,        // Должно быть number
};

