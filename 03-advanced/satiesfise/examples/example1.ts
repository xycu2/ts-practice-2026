// Union-тип доступных названий цветов
type Colors = "red" | "green" | "blue"

// Кортеж (tuple) из трёх чисел для описания цвета в формате RGB
type RGB = [red: number, green: number, blue: number]

// Создаём объект палитры с помощью оператора `satisfies`
const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>
// 1. Проверяет, что у объекта есть ВСЕ ключи из `Colors` ("red", "green", "blue").
// 2. Проверяет, что значение каждого ключа — либо `string`, либо `RGB`.
// 3. Главное фишка: НЕ сжимает тип `palette.green` до общего `string | RGB`, 
//    а заминает его ТОЧНЫЙ автовыведенный тип — `string`!

// Поскольку TS точно знает, что palette.green — это именно `string`, 
// мы можем сразу вызывать методы строк без дополнительных проверок (if / typeof):
const greenNormalized = palette.green.toUpperCase()