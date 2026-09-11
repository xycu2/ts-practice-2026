type Settings = {
  url: string,
  method: 'POST' | 'GET'
}

// Нужно реализовать перегрузку
function axios(url: string): string;
function axios(url: string, sett: Omit<Settings, 'url'>): number;
function axios(sett: Settings): string;

function axios(urlOrSett: string | Settings, sett?: Omit<Settings, 'url'>): string | number {
  if (typeof urlOrSett === 'string') {
    if (sett) {
      return 200; // Case 2: url + sett => number
    }
    return 'Data from URL'; // Case 1: url => string
  }

  return 'Data from config'; // Case 3: config object => string
}

const a1 = axios('/url')
const a2 = axios('/url', { method: 'GET'})
const a3 = axios({url: '/url', method: 'GET'})
