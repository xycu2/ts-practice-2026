abstract class FileProcessor<T extends Record<string, unknown>> {
  protected files: string[] = []
  
  // сигнатуры перегрузки
  constructor(files: string[]);
  constructor(directory: string);

  constructor(data: string | string[]) {
    
    
    if (Array.isArray(data)) {
      this.files = data
    }
    else {
      this.files = this.getFilesFromDirectory(data);
    }
  }


  abstract transformer: (
    file: string,
    settings: T 
  ) => string


  private getFilesFromDirectory = (directoryPath: string): string[] => {
    // const sdfsdf = glob(directoryPath).then()
    return ['file1.txt', 'file2.jpg', 'file3.txt'] // заглушка для примера
  }

  proccesFiles(settings: T) {
  this.files.forEach((file) => {
    // if exists file catch

    const formatted = this.transformer(file, settings)

    // логика
    console.log(`${file} -> ${formatted}`)
  })
 }
}

type AddPrefixTransformerSettings = { prefix: string }

class AddPrefixTransformer extends FileProcessor<AddPrefixTransformerSettings> {
 transformer = (file: string, settings: AddPrefixTransformerSettings) => {
  return `${settings.prefix}_${file}`;
 }
}

type ChangeExtensionTransformerSettings = { newExtension: string }

class ChangeExtensionTransformer extends FileProcessor<ChangeExtensionTransformerSettings> {

 transformer = (file: string, settings: ChangeExtensionTransformerSettings) => {
  const baseName = file.substring(0, file.lastIndexOf("."));
  return `${baseName}.${settings.newExtension}`
}
}

const prefixTransformer = new AddPrefixTransformer("/some/directory"); // либо строка , либо массив строк
prefixTransformer.proccesFiles({ prefix: "new" });
/**
 * Вывод:
 * reading file from directory: /some/directory
 * renamed: file1.txt -> new_file1.txt
 * renamed: file2.jpg -> new_file2.jpg
 * renamed: file3.txt -> new_file3.txt
 */


const extensionTransformer = new ChangeExtensionTransformer(['image1.jpg', 'image2.png', 'image3.jpg'])
extensionTransformer.proccesFiles({ newExtension: 'webp' })
/**
 * Вывод:
 * renamed: image2.png -> image2.webp
 * renamed: image3.jpg -> image3.webp
 */

export {}