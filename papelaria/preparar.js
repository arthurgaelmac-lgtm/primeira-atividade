const fs = require('node:fs');
const path = require('node:path');
const {DatabaseSync} = require('node:sqlite');

const db = new DatabaseSync('papelaria.db');
db.exec('PRAGMA foreign_keys = ON;');

const arquivoBanco = path.join(__dirname, 'papelaria.db');
const arquivoSQL = path.join(__dirname, 'cria_banco.sql');
 
try{
db.exec(fs.readFileSync(arquivoSQL, 'utf8'));
const produtos = db.prepare('SELECT COUNT(*) AS total FROM produtos').get();
console.log('Banco preparado em: ', arquivoBanco);
console.log('Quantidade de produtos: ', produtos.total);
}finally{
    db.close;
}
