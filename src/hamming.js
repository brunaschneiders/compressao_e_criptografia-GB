import * as Utils from "./utils.js";

export function hammingEncode(input) {
  const binaryInput = Utils.stringToBinary(input);
  console.log(binaryInput);

  const binaryGroups = binaryInput.match(/.{1,4}/g) || [];
  return binaryGroups
    .map((group) => {
      const dataBits = group.padEnd(4, "0").split("").map(Number);
      const p1 = dataBits[0] ^ dataBits[1] ^ dataBits[2];
      const p2 = dataBits[1] ^ dataBits[2] ^ dataBits[3];
      const p3 = dataBits[0] ^ dataBits[2] ^ dataBits[3];

      return `${dataBits[0]}${dataBits[1]}${dataBits[2]}${dataBits[3]}${p1}${p2}${p3}`;
    })
    .join("");
}

export function hammingDecode(input) {
  const hammingGroups = input.match(/.{1,7}/g) || [];
  const result = hammingGroups
    .map((group) => {
      const bits = group.split("").map(Number);
      const p1 = bits[4] ^ bits[0] ^ bits[1] ^ bits[2];
      const p2 = bits[5] ^ bits[1] ^ bits[2] ^ bits[3];
      const p3 = bits[6] ^ bits[0] ^ bits[2] ^ bits[3];
      const errorPosition = p1 * 1 + p2 * 2 + p3 * 4;

      if (errorPosition !== 0) {
        bits[errorPosition - 1] = bits[errorPosition - 1] ^ 1; // Corrige o bit errado
      }
      return `${bits[0]}${bits[1]}${bits[2]}${bits[3]}`;
    })
    .join("");

  return Utils.binaryToString(result);
}
