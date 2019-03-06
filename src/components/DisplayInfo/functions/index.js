export const getMax = arr => Math.max(...arr);
export const getMin = arr => Math.min(...arr);
export const getAverage = arr =>
  (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1);

export const getBestResults = arr => arr.slice(0, 10).map(age => +age.name);
