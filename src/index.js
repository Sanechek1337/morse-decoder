const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const decodeDictionary = {
  10: ".",
  11: "-",
};

function decode(expr) {
  const codeArray = [];

  for (let i = 0; i < expr.length; i += 10) {
    codeArray.push(expr.substring(i, i + 10));
  }

  const result = codeArray.map((encodedCharacter) => {
    const firstOneIndex = encodedCharacter.indexOf("1");

    const characterWithoutZeros = encodedCharacter.substring(firstOneIndex);

    if (characterWithoutZeros.includes("*")) return " ";

    let morseLetter = "";

    for (let i = 0; i < characterWithoutZeros.length; i += 2) {
      const digit = `${characterWithoutZeros[i]}${
        characterWithoutZeros[i + 1]
      }`;

      morseLetter += decodeDictionary[digit];
    }

    return MORSE_TABLE[morseLetter];
  });

  return result.join("");
}

module.exports = {
  decode,
};
