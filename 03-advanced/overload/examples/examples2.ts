// Нужно реализовать перегрузку
function axios(url: string): string;
function axios(url: string, sett: { method: string }): number;
function axios(sett: { url: string; method: string }): string;

function axios(urlOrSett: string | {url: string, method: string}, sett?: {method: string}): string | number {
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
