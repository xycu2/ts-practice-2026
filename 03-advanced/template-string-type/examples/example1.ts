type GetRole<T> = T extends string ?  `role:${T}` : never


type Admin = GetRole<'admin'> // "role:admin"
type User = GetRole<'user'> // "role:user"

type User2 = GetRole<23> // never