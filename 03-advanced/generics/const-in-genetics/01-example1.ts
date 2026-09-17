// example 1
// 1. Дженерик <const T> заставляет TypeScript выводить типы аргументов 
//    как ридли-литералы (as const), а не обобщать их до string/number.
function createConfig<const T>(config: T): T {
  return config
}

// 2. В config1 передаётся массив строк.
//    Благодаря <const T>, тип config1 будет readonly ['dark', 'light'] (узкий кортеж),
//    а не обычный массив string[].
const config1 = createConfig(['dark', 'light'])

// 3. В config2 передаётся объект.
//    Тип config2 станет { readonly url: "/api"; readonly timeout: 1000 },
//    сохраняя точные значения полей, а не общие типы string и number.
const config2 = createConfig({url: '/api', timeout: 1000})

// 4. Так как config1[0] имеет точный тип 'dark', TS знает его значение заранее,
//    поэтому такое сравнение всегда даст true и будет строго валидироваться.
config1[0] === 'dark'

export {}