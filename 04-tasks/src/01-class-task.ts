abstract class BaseVideo {
  constructor(
    public ID: string,
    public Title: string,
    public Duration: number
  ) {}
  
  getInfo() {
   return `ID: ${this.ID}, Title: ${this.Title}, Duration: ${this.Duration}`
  }

  abstract play(): void
}

class YouTubeVideo extends BaseVideo {
  addToPlaylist(playlistName: string) {
    console.log(`Добавлен в плейлист ${playlistName}`)
  }

  play() {
    console.log(`Запускаю длинное видео ${this.Title} ...`)
  }
}

class Shorts extends BaseVideo {
  constructor(ID: string, Title: string, Duration: number) {
    if (Duration > 60) {
      throw new Error("Ошибка: превышение лимита длительности")
    }
    super(ID, Title, Duration)
  }

  play() {
    console.log(`Запускаю шортс ${this.Title} ...`)
  }
}

const video1 = new YouTubeVideo('1', 'Как выучить TypeScript?', 600);
video1.play() // Запускаю ...
console.log(video1.getInfo()) // "ID: 1, Title: Как выучить TypeScript? , Duration: 600"
video1.addToPlaylist('TS') // Добавлено в плейлист "TS"

const short1 = new Shorts('2', 'Какие-то уроки лучший канал', 15);
short1.play() // Запускаю ...
console.log(short1.getInfo()) // "ID: 2, Title: Какие-то уроки лучший канал , Duration: 15"


// Ошибка: превышение лимита длительности
const short2 = new Shorts('3', 'Длинное видео', 120)

/**
 * У всех классов есть общий метод play() и getInfo()
 * Его можно вынести в abstract класс
 * 
 * А метод addToPlaylist() есть только для длинных видео
 * для него можно создать отдельный тип, и благодаря implement сделать его для длинных видео
 * 
 * Так же нужно сделать проверку для шортсов на длинну видео в конструкторе
 * 
 */