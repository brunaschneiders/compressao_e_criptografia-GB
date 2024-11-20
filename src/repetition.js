import * as Utils from "./utils.js";

const BINARY_LENGTH = 3; // Para repetição tripla

export function repetitionEncode(input) {
  const binaryInput = Utils.stringToBinary(input);

  return binaryInput
    .split("")
    .map((char) => char.repeat(BINARY_LENGTH))
    .join("");
}

export function repetitionDecode(input) {
  let decoded = "";
  for (let i = 0; i < input.length; i += BINARY_LENGTH) {
    const triplet = input.slice(i, i + BINARY_LENGTH);
    const bit = triplet[0]; // Assumindo que a maioria dos bits é correta
    decoded += bit;
  }
  return Utils.binaryToString(decoded);
}
