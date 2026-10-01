// example 3
type FullData = {
  userName?: string | null;
}

type Nullish = null | undefined

type SecondComponentType = {
  userName: Exclude<FullData['userName'], Nullish> // исключаем из "FullData['userName']" "null | undefined"
}

export {}
