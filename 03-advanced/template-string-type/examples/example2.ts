// Если передать Union-тип, TS автоматически переберет все варианты и сгенерирует новые строки

type Role = 'admin' | 'user' | 'guest';
type DynamicRole = `role:${Role}`; 
// Итог: "role:admin" | "role:user" | "role:guest"