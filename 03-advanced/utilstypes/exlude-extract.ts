// Exclude исключает элементы объединения

// example 1
type T0 = Exclude<string | number | boolean, boolean> // string | number


// exampe 2
type Status200 = { status: 200 }
type Status400 = { status: 400 }
type Status500 = { status: 500 }

type Statuses = Status200 | Status500 | Status400

function renderGoodStatus(obj: Extract<Statuses, Status200>) {

}
renderGoodStatus({ status: 200 })

// example 3
type FullData = {
  userName?: string | null;
}

type Nullish = null | undefined

type SecondComponentType = {
  userName: Exclude<FullData['userName'], Nullish> // исключаем из "FullData['userName']" "null | undefined"
}