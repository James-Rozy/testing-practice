const capatalize = (str) => {
  const firstLetter = str.slice(0, 1).toUpperCase();
  const restOfString = str.slice(1);
  return firstLetter + restOfString;
};

module.exports = {
  capatalize,
};
