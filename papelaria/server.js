const http = require('node:http');
const { DatabaseSync } = require('node:sqlite');
const db = new DatabaseSync('biblioteca.db');
const servidor = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const url = new URL(req.url, 'http://localhost');
    const id = Number(url.pathname.split('/')[2]);
    let texto = '';
    for await (const parte of req) {
        texto += parte;
    }
   try {
        const dados = texto ? JSON.parse(texto) : {};
        if (req.method === 'GET' && url.pathname === '/livros') {
            const livros = db.prepare('SELECT * FROM livros').all();
            res.statusCode = 200;
            return res.end(JSON.stringify(livros));
        }
        if (req.method === 'GET' && url.pathname.startsWith('/livros/') && id) {
            const livro = db.prepare('SELECT * FROM livros WHERE id = ?').get(id);
            if (!livro) {
                res.statusCode = 404;
                return res.end(JSON.stringify({ erro: 'Livro não encontrado' }));
            }
            res.statusCode = 200;
            return res.end(JSON.stringify(livro));
        }
        if (req.method === 'POST' && url.pathname === '/livros') {
            const resultado = db.prepare(`
                INSERT INTO livros (titulo, codigo, ano_publicacao) VALUES (?, ?, ?)
            `).run(dados.titulo, dados.codigo, dados.ano_publicacao);
            res.statusCode = 201;
            return res.end(JSON.stringify({
                mensagem: 'Livro cadastrado com sucesso!',
                id: resultado.lastInsertRowid
            }));
        }
        if (req.method === 'PUT' && url.pathname.startsWith('/livros/') && id) {
            const resultado = db.prepare(`
                UPDATE livros 
                SET titulo = ?, codigo = ?, ano_publicacao = ?
                WHERE id = ?
            `).run(dados.titulo, dados.codigo, dados.ano_publicacao, id);
            if (resultado.changes === 0) {
                res.statusCode = 404;
                return res.end(JSON.stringify({ erro: 'Livro não encontrado' }));
            }
            res.statusCode = 200;
            return res.end(JSON.stringify({ mensagem: 'Livro atualizado com sucesso!' }));
        }
        if (req.method === 'DELETE' && url.pathname.startsWith('/livros/') && id) {
            const resultado = db.prepare('DELETE FROM livros WHERE id = ?').run(id);
            if (resultado.changes === 0) {
                res.statusCode = 404;
                return res.end(JSON.stringify({ erro: 'Livro não encontrado' }));
            }
            res.statusCode = 200;
            return res.end(JSON.stringify({ mensagem: 'Livro deletado com sucesso!' }));
        }
        res.statusCode = 404;
        res.end(JSON.stringify({ erro: 'Rota não encontrada' }));

    } catch (erro) {
        res.statusCode = 400;
        res.end(JSON.stringify({ erro: 'Erro na requisição', detalhes: erro.message }));
    }
});
servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});