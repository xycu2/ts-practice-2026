// дженерики 

// обычная функция
function wrapInArray<T>(value: T): T[] {
  return Array.isArray(value) ? value : [value];
};

// TS сам понимает, что T = number (явное указание <number> не требуется)
// const singleNumber = wrapInArray<number>(1);
const singleNumber = wrapInArray(1);

const singleNumber1 = wrapInArray('dfgdfgd');
const arrayNumbers = wrapInArray([1,2,3]);

// стрелочная функция

// Запятая <T,> нужна, чтобы TS не спутал дженерик с HTML/JSX тегом (особенно в .tsx файлах)
const wrapInArray2 = <T, >(value: T): T[] => { 
  return Array.isArray(value) ? value : [value];
}


