// example 2

// 1. Дженерик <const T> фиксирует входящие поля как точные литералы (readonly).
//    Тип возвращаемого значения (T & { extend: string }) означает "склейку":
//    все свойства из T плюс новое обязательное поле extend с типом string.
function extendConfig<const T>(configg: T): T & { extend: string} {
  // 2. Спред-оператор (...) копирует исходный объект и добавляет свойство extend.
  return {...configg, extend: 'true'}
}

// 3. Для cfg1 входящий тип T выводится как { readonly status: 'ok' }.
//    Итоговый тип cfg1: { readonly status: 'ok' } & { extend: string }.
const cfg1 = extendConfig({ status: 'ok' });

// 4. Для cfg2 входящий тип T выводится как { readonly status: 'fail' }.
//    Итоговый тип cfg2: { readonly status: 'fail' } & { extend: string }.
const cfg2 = extendConfig({ status: 'fail' });

export {}