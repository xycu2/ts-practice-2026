type FileExtension = "jpg" | "png" | "gif"
type FileName = `file-${string}.${FileExtension}`

const file1: FileName = "file-image.jpg" // OK
// const file2: FileName = "file-image.txt" // ОШИБКА
// const file3: FileName = "fle-image.jpg" // ОШИБКА