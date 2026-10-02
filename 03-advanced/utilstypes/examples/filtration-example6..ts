// example 6
type ResponseD = 
  | { type: "user"; id: number; name: string }
  | { type: "post"; id: number; title: string }
  | { type: "comment"; id: number; text: string };

// Достаем ТОЛЬКО пользователя, указав лишь одно ключевое поле 'type'
type OnlyUser = Extract<ResponseD, {type: "user"}>; 
// Итог: { type: "user"; id: number; name: string }

export {}