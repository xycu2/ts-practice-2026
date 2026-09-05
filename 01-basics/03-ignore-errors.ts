function o18(status: 'ok' | 'error') {
  if (status === 'ok') {

  }
  else if (status === 'error') {

  }

  return null
}

// Как заткнуть ts , чтобы он не ругался на ошибку

// 1 вариант
// @ts-ignore
const o18result: boolean = o18('ok'); // не можем положить в переменную "boolean" "null". "@ts-ignore" исправит эту проблему

// 2 вариант
// использовать "any" , лучше не использовать!
const o18result2: any = o18('ok');

// 3 вариант 
// type guard

// 4 вариант 
// Костование типов через "as"
const o18result4 = o18('ok') as unknown as boolean;

// Как использовать (лучше не злоупотреблять этим)
const one = [] as unknown as boolean;
const two = {} as unknown as boolean;
(two as unknown as {name: 'Demid'}).name;
(one as unknown as [0,1,2,3,4,5,6])[0];

// as unknown as нужен для того, чтобы привести какой-то существующий тип к новому

export {}