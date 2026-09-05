// interface отличается от type тем, что при interface могут иметь одинаковое имя, но они будут склеиваться между собой
// в interface нельзя использовать "или" 

// В type мы можем использовать "или" следующим образом type user = string | number, а в interface не можем
type user = string | number


// "И" в type мы можем записать так: 
// type User = obj1 & obj2 & obj3


// "И" в interface можем записать так:
// interface allObj extends obj1, obj2, obj3 {}

export {}