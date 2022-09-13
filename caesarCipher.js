const caesarCipher = (strIn, shift) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const shiftedAlphabet = alphaShifter(shift, alphabet);

  let strOut = "";
  strIn = strIn.toLowerCase();

  for (let i = 0; i < strIn.length; i++) {
    let shitedLetter = alphabet.indexOf(strIn[i]);
    strOut += shiftedAlphabet[shitedLetter];
  }

  return strOut;
};

const alphaShifter = (shiftAmount, alphabet) => {
  let shiftedAlphabet = "";

  for (let i = 0; i < alphabet.length; i++) {
    let shift = (i + shiftAmount) % alphabet.length;
    shiftedAlphabet += alphabet[shift];
  }

  return shiftedAlphabet;
};

module.exports = {
  caesarCipher,
};
