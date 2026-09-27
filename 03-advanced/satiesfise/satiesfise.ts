// Описываем гибкий тип пользователя, где каждое поле может принимать разные формы
type PossibleUser = {
  name: string | { name: string; surname: string };
  age: string | number;
};

// Создаём объект и валидируем его через `satisfies`
const myUser = {
  name: 'alex',
  age: 20
} satisfies PossibleUser;
// 1. Проверяет, что `myUser` соответствует структуре `PossibleUser`.
// 2. ЗАПОМНИЛ точные типы: `name` — это именно `string`, а `age` — именно `number`.

// Без `satisfies` (при обычной типизации `: PossibleUser`) поле `myUser.age` 
// имело бы тип `string | number`, и сложение с числом вызвало бы ошибку TS.
// Благодаря `satisfies` TS знает, что тут именно `number`, и математика работает:
const newAge = myUser.age + 50; // 70