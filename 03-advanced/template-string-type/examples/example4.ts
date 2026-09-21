type isWordWithHello<T> = T extends `hello${string}` ? true : false ; 
// `hello${string}` озночает, что слово должно начинаться с hello,
// но после hello может быть любая строка, за это отвечает "string"

type Test2 = isWordWithHello<'1243521'>
type Test3 = isWordWithHello<'hello124123412'>