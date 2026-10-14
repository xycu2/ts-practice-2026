// Типизация Класса
class Video {
   name: string = '';
   private length: number = 0;

   constructor(name: string, length: number) {  
    this.name = name;
    this.length = length;
   }

  renderPreview(): string {
    return 'https://dfdsfsd'
  }

  private getApiUrl() {
    return 'https://sdsdffdsfd'
  }
}

const videoInstance = new Video('Котятки', 5)

videoInstance.name // Все хорош
// videoInstance.length // Ошибка: приватное свойство