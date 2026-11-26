 CREATE TABLE IF NOT EXISTS Clientes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE
);
 
CREATE TABLE IF NOT EXISTS Produtos(
    id_produto INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    marca TEXT NOT NULL,
    codigo TEXT NOT NULL UNIQUE,
    peso TEXT NOT NULL ,
    estoque INTEGER NOT NULL
);
 
CREATE TABLE IF NOT EXISTS Venda(
    Clientes_id INTEGER NOT NULL,
    Produtos_id INTEGER NOT NULL,
    PRIMARY KEY (Clientes_id, Produtos_id),
    FOREIGN KEY (Clientes_id) REFERENCES Clientes(id) ON DELETE CASCADE,
    FOREIGN KEY (Produtos_id) REFERENCES Produtos(id) ON DELETE CASCADE
);

INSERT OR IGNORE TO Clientes(id, nome) VALUES
(1, Marcos),
(2, Angelo),
(3, José),
(4, Castiga),
(5, John TikTok),
(6, Hills da Silva);

INSERT OR IGNORE TO produtos(id_produto, nome, marca, codigo, peso, estoque) VALUES
(1, Papel folha A4, Ceninha, 40028922, 2KG, 2000)




