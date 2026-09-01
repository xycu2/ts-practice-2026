type userConfig = {
  status: string;
};

type userGetMoreInfo = {
  data: number;
};

type userInfo = {
  name: string,
  age: number,
  hasJob: boolean,
  getMoreInfo?: (config: userConfig) => userGetMoreInfo
}

const User: Array<userInfo> = [
  {
    name: 'alex',
    age: 22,
    hasJob: true,
    getMoreInfo: (config) => {
      return {data: 111235343}
    }
  },
  {
    name: 'sam',
    age: 25,
    hasJob: false,
  }
]