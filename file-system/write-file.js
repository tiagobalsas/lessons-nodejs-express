const fs = require('fs').promises;
const path = require('path');

const dirFile = path.resolve(__dirname, '..', 'novo-arquivo.txt');

fs.writeFile(dirFile, 'Olá, arquivo', { flags: 'w', encoding: 'utf8' });
