const alex = {
  id: 0,
  name: 'alex',
  age: 20,
  hasCar: true
}

function updateValue<
 Obj extends object,
 Key extends Exclude<keyof Obj, 'id'>,
 Val extends Obj[Key]
  >
  ( obj: Obj,
    key: Key,
    value: Val
  ) {
  // ...
}


updateValue(alex,  'age', 30)