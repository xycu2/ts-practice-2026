// generics в type и interface

// дженерики похожи на функции, только они пишутся в < > скобках
// Name и Age здесь это как парамаетры функции
type User<Name = '', Age = 0> = { // Устанавливаем значение по умолчанию
  name: Name,
  age: Age,
  balance: number,
  currency: 'RUB' | 'USD',
  lang: 'English' | 'Rus',
}
type alex2 = User<'alex'> // age: 0
type alex3 = User // name: '', age: 0

// Мы вызывавем дженерики вот так , и передаем в скобках аргументы, как в функциях
type alex = User<'alex', 20>
type bob = User<'bob', 25>


export {}