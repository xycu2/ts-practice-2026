class BaseVideo {
  //  readonly name: string = ''; // запрещает изменять св-ва
   name: string = '';
   length: number = 0; 

   constructor(name: string, length: number) {  
    this.name = name;
    this.length = length;
   }
}

// Создаем класс:
const instance = new BaseVideo('js', 6)


// instance.name = 'rewrwr' // Не можем изменить св-во с модификаторов readonly

export {}

