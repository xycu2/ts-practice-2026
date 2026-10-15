class Video {
   name: string = '';
   length: number = 0; 
   
   // Сигнатуры перегрузок
   constructor(name: string)
   constructor(name: string, description: string, length: number)  
   
   // Тело конструктора (реализация)
   constructor(name: string, description?: string, length?: number) {  
    this.name = name;
    this.length = length || 60;
   }
}

// Так можно:
new Video('js');
new Video('js', 'описание', 10);

// А вот так TS не даст сделать, так как сценарий не описан:
// new Video('js', 'описание'); 

export {}