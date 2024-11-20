import readline from "readline";
import { repetitionEncode, repetitionDecode } from "./repetition.js";
import { hammingEncode, hammingDecode } from "./hamming.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

function validateInput(input, action) {
  if (action === "encode") {
    if (typeof input !== "string" || input.length === 0) {
      throw new Error("A entrada deve ser uma string não vazia.");
    }
  } else if (action === "decode") {
    if (!/^[01]+$/.test(input)) {
      throw new Error(
        "A entrada deve ser uma string binária (contendo apenas 0 e 1)."
      );
    }
  } else {
    throw new Error("Ação desconhecida.");
  }
}

async function main() {
  try {
    const input = await askQuestion(
      "Insira os símbolos ou codewords (binários): "
    );
    const method = await askQuestion(
      "Escolha o método (repetition, hamming): "
    );
    const action = await askQuestion("Escolha a ação (encode, decode): ");

    validateInput(input, action);

    let result = "";

    switch (method) {
      case "repetition":
        if (action === "encode") {
          result = repetitionEncode(input);
        } else {
          result = repetitionDecode(input);
        }
        break;
      case "hamming":
        if (action === "encode") {
          result = hammingEncode(input);
        } else {
          result = hammingDecode(input);
        }
        break;
      default:
        throw new Error("Método desconhecido.");
    }

    console.log(`Resultado: ${result}`);
  } catch (error) {
    console.error(`Erro: ${error.message}`);
  } finally {
    rl.close();
  }
}

main();
