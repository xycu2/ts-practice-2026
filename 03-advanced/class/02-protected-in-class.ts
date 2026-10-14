class BaseVideo {
   name: string = '';
   protected length: number = 0; // Защищает св-во , мы можем использовать его в наследуемых классах

   constructor(name: string, length: number) {  
    this.name = name;
    this.length = length;
   }
}

class Shorts extends BaseVideo {
  // ...
}

class Video extends BaseVideo {

  renderPreview(): string {
    this.length // Используя protected мы можем обращаться к св-ву родительского класса
    return 'https://dfdsfsd'
  }

  private getApiUrl() {
    return 'https://sdsdffdsfd'
  }
}

const videoInstance = new Video('Котятки', 5)

// videoInstance.length // За пределами класса мы не можем использовать св-во length

export {}