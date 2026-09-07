type Currency = 'RUB' | 'USD'

// Вспомогательная функция для проверки исчерпываемости
function assertExhaustiveness(value: never): never {
  // Работает на сервере
  throw new Error(`Необработанный вариант: ${JSON.stringify(value)}`);
}

function getCurrencyChar(currency: Currency) {  
  if (currency === 'RUB') {
    return '₽'
  }

  if (currency === 'USD') {
    return '$'
  }

  // ТУТ TS ВЫДАСТ ОШИБКУ КОМПИЛЯЦИИ:
  // Argument of type 'string' (EUR) is not assignable to parameter of type 'never'.
  // TS буквально заставляет тебя написать еще один if для 'EUR'!

  // value: never работает в редакторе , и подсвечивает ошибку, если не обработали вариант
  return assertExhaustiveness(currency)
}









// type Currency = 'RUB' | 'USD'

// function getCurrencyChar(currency: Currency) {  
//   if (currency === 'RUB') {
//     return "Р"
//   }

// currency // USD

//   if (currency === 'USD') {
//     return '$'
//   }

// currency // never

//   const _: never = currency
// }