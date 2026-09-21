// const Дженерик в роутерах
// 1. Описываем тип отдельного маршрута
type Route = {
  path: string;
  name: string;
};

// 2. Функция создания роутера с дженериком <const T>
//    T фиксирует массив роутов как readonly-кортеж с точными литералами
function createRouter<const T extends readonly Route[]>(routes: T) {
  return {
    routes,
    // Метод для перехода по имени роута
    // T[number]['name'] извлекает объединение (Union) всех точных имен
    navigate(routeName: T[number]['name']) {
      console.log(`Переход на роут: ${routeName}`);
    }
  };
}

// 3. Объявляем список маршрутов приложения
const router = createRouter([
  { path: '/', name: 'home' },
  { path: '/dashboard', name: 'dashboard' },
  { path: '/profile', name: 'profile' }
]);

// 4. ПРОВЕРКА ТИПОВ:

// ✅ Валидные вызовы (работает автодополнение в IDE!)
router.navigate('home');
router.navigate('dashboard');

// ❌ Ошибка компиляции TS! 
// Argument of type '"settings"' is not assignable to parameter of type '"home" | "dashboard" | "profile"'
// router.navigate('settings'); 