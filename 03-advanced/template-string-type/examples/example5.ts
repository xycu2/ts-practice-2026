type isIPAdres<T> = T extends `${number}.${number}.${number}.${number}` ? true : false
// в скобках писать либо number , либо string
// потом спросить

type Test1 = isIPAdres<'123.168.1.1'>