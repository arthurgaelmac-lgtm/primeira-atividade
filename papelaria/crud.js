const { DatabaseSync } = require('node:sqlite');
const db = new DatabaseSync('papelaria.db');

db.prepare(`
    INSERT INTO produtos (nome, codigo, preco, estoque, categoria_id) 
    VALUES (?, ?, ?, ?, ?)
`).run('Marca-Texto Amarelo', 'MAR-006', 4.50, 80, 1);
console.log('Produto cadastrado com sucesso!');

const produtos = db.prepare(`
    SELECT id, nome, codigo, preco, estoque, categoria_id FROM produtos`).all();
console.log('Lista de produtos:', produtos);

db.prepare(`
    UPDATE produtos 
    SET preco = ?
    WHERE id = ?
`).run(4.00, 6);
console.log('Produto atualizado com sucesso!');

db.prepare(`
    DELETE FROM produtos 
    WHERE id = ?
`).run(6);
console.log('Produto deletado com sucesso!');

db.close();
