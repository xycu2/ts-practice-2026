function getUser(id: number) {}
function getUser2(id: string) {}

type MyParams<T> = T extends ((id: infer R) => unknown) ? R : never

// (id: number) => void
type Test1 = MyParams<typeof getUser> // number
// (id: string) => void
type Test2 = MyParams<typeof getUser2> // string

export {}
