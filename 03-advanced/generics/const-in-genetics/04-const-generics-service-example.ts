function customService<const T extends string[]>(keys: T) { // T === 'userId' | 'videoId'
  function save<D>(key: T[number], data: D) {
    // const transformed = transformData(data)

    //service.save(key, JSON.stringify(transformed))
  }

  function getData(key: T[number]) {
    // logic...
    // return service.get(key)
  }

  return { save, getData }
}


const serviceUtils = customService(['userId', 'videoId']);
serviceUtils.save('userId', {})
serviceUtils.getData('videoId')


export {}
