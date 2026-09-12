// generics в type и interface
// дженерики похожи на функции, только они пишутся в < > скобках
// Name и Age здесь это как парамаетры функции
type User<Name = '', Age = 0> = {
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

interface getUser<Name = string, Age = number> {
  name: Name,
  age: Age,
  balance: number,
  currency: 'RUB' | 'USD',
  lang: 'English' | 'Rus',
}

type bob2 = getUser<'bob'> // Age: number
type bob3 = getUser // Name: string, Age: number
