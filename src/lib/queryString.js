const keyValueToString = ([key, val]) => {
  if (typeof val === 'object' && !Array.isArray(val)) {
    throw new Error('check your input');
  }
  return `${key}=${val}`;
};

export function queryString(obj) {
  return Object.entries(obj).map(keyValueToString).join('&');
}

export function parse(string) {
  return Object.fromEntries(
    string.split('&').map(item => {
      let [key, value] = item.split('=');
      if (value.indexOf(',') > -1) {
        value = value.split(',');
      }
      return [key, value];
    }),
  );
}
