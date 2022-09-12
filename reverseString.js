const reverseString = (str) => {
  const strArr = str.split("");
  let strOut = "";
  while (strArr.length !== 0) strOut += strArr.pop();
  return strOut;
};

module.exports = reverseString;
