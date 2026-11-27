CREATE TABLE IF NOT EXISTS categorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    codigo TEXT NOT NULL UNIQUE,
    preco REAL NOT NULL CHECK (preco > 0),
    estoque INTEGER NOT NULL CHECK (estoque >= 0),
    categoria_id INTEGER NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);


INSERT OR IGNORE INTO categorias (id, nome) VALUES
    (1, 'Escrita'),
    (2, 'Cadernos e Papéis'),
    (3, 'Organização');

INSERT OR IGNORE INTO produtos (id, nome, codigo, preco, estoque, categoria_id) VALUES
    (1, 'Caneta Esferográfica Azul', 'CAN-001', 2.50, 100, 1),
    (2, 'Lápis Preto HB', 'LAP-002', 1.20, 150, 1),
    (3, 'Caderno Universitário 10 Matérias', 'CAD-003', 28.90, 40, 2),
    (4, 'Bloco de Notas Adesivas', 'BLO-004', 8.50, 60, 2),
    (5, 'Pasta Catálogo 50 Envelopes', 'PAS-005', 19.90, 25, 3);