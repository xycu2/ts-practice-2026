// 1. Обычный JS-объект с настройками (константа)
const appThemes = {
  light: '#ffffff',
  dark: '#1e1e1e',
  cyberpunk: '#ff007f'
} as const; // as const делаем, чтобы значения и структура зафиксировались

// 2. Получаем ТИП этого объекта через typeof:
// TypeOfThemes будет равно { readonly light: string; readonly dark: string; readonly cyberpunk: string; }
type TypeOfThemes = typeof appThemes;

// 3. Достаем КЛЮЧИ этого типа через keyof:
// ThemeName станет типом: 'light' | 'dark' | 'cyberpunk'
type ThemeName = keyof typeof appThemes;


// 4. ПРИМЕНЕНИЕ: Функция переключения темы
function setTheme(theme: ThemeName) {
  console.log(`Устанавливаем цвет: ${appThemes[theme]}`);
}

// ----------------------------------------------------
// КАК ЭТО Работает в коде:

setTheme('dark');      //  Все отлично! TS подсвечивает 'dark'
setTheme('cyberpunk'); //  Тоже валидно

// setTheme('blue');      // ОШИБКА TS: Argument of type '"blue"' is not assignable to parameter of type 'ThemeName'.