const analyzeArray = (arr) => {
  return {
    average: getAvg(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: arr.length,
  };
};

const getAvg = (arr) => {
  let average = 0;

  arr.forEach((n) => {
    average += n;
  });

  return parseInt(average / arr.length);
};

const getMin = (arr) => {
  let min = arr[0];
  arr.forEach((n) => {
    if (n < min) min = n;
  });
  return min;
};

const getMax = (arr) => {
  let max = arr[0];
  arr.forEach((n) => {
    if (n > max) max = n;
  });
  return max;
};

module.exports = {
  analyzeArray,
};
