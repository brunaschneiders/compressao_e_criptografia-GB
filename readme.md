# Projeto de Codificação e Decodificação

## Objetivo

O objetivo deste projeto é implementar algoritmos de codificação e decodificação utilizando os métodos Código de repetição Ri e Hamming (7,4). A interface de linha de comando (CLI) permite ao usuário inserir um ou mais símbolos ou codewords (binários), escolher o método de codificação ou decodificação desejado e visualizar o resultado na tela.

## Tecnologias Utilizadas

- Node.js: Plataforma de desenvolvimento para executar o JavaScript no servidor.
- Visual Studio Code (VSCode): Editor de código-fonte utilizado para desenvolver o projeto.

## Codificadores e Decodificadores Presentes

- Repetição Ri: Codificação e decodificação utilizando o método Repetição Ri.
- Hamming (7,4): Codificação e decodificação utilizando o método Hamming (7,4).

## Como Rodar

### Pré-requisitos

- Node.js: Certifique-se de que o Node.js está instalado em sua máquina. Você pode baixá-lo e instalá-lo a partir do site oficial do Node.js.

### Passo a Passo

1. Clone o repositório:

```bash
    git clone https://github.com/brunaschneiders/compressao_e_criptografia-GB.git
    cd compressao_e_criptografia-GB
```

3. Execute o projeto:

```bash
    npm start
```

5. Interaja com a CLI:
   - Insira os símbolos ou codewords (binários) quando solicitado.
   - Escolha o método de codificação (golomb, elias-gamma, fibonacci, huffman).
   - Escolha a ação (encode, decode).
   - Visualize o resultado na tela.

## Exemplo de Uso

```bash
    $ npm start
    Insira os símbolos ou codewords (binários): teste
    Escolha o método (repetition, hamming): hamming
    Escolha a ação (encode, decode): encode
    0111010001100101011100110111010001100101
    Resultado: 0111010010011001100010101101011101000111000111010010011001100010101101

    $ npm start
    Insira os símbolos ou codewords (binários): 0111010010011001100010101101011101000111000111010010011001100010101101
    Escolha o método (repetition, hamming): hamming
    Escolha a ação (encode, decode): decode
    Resultado: teste
```
