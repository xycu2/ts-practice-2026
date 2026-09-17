// example 1
function createConfig<const T>(config: T): T {
  return config
}

const config1 = createConfig(['dark', 'light'])
const config2 = createConfig({url: '/api', timeout: 1000})


config1[0] === 'dark'

// example 2

function extendConfig<const T>(configg: T): T & { extend: string} {
  // ....
  return {...configg, extend: 'true'}
}

const cfg1 = extendConfig({ status: 'ok' });
const cfg2 = extendConfig({ status: 'fail' });
