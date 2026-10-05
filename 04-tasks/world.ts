enum TestEnum  {
  name = 'world'
}

console.log('enum', TestEnum.name)

function sum(a: number, b: number) {
  return a + b
}


const result = sum(10, 5)

console.log('result from TS', result)