const fs = require('fs').promises;
const path = require('path');

const dirFile = path.resolve(__dirname, '..', 'novo-arquivo.json');

const pessoas = [
  { nome: 'Tiago' },
  { nome: 'Marcelo' },
  { nome: 'Marcia' },
  { nome: 'Thaiza' },
];

const json = JSON.stringify(pessoas, '', 2);
fs.writeFile(dirFile, json, { flags: 'w', encoding: 'utf8' });
