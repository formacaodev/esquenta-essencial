CREATE TABLE cliente (
    id INT,
    nome VARCHAR(120),
    salario DECIMAL(10, 2),
    pontos INT,
    nascimento DATE,
    administrador BOOLEAN,
    data_inclusao DATETIME
);

SHOW TABLES;

DROP TABLE cliente;

DROP TABLE IF EXISTS cliente;

CREATE TABLE IF NOT EXISTS cliente (
    id INT NOT NULL UNIQUE,
    nome VARCHAR(120) NOT NULL,
    salario DECIMAL(10, 2) DEFAULT 4000.00,
    pontos INT,
    nascimento DATE,
    administrador BOOLEAN,
    data_inclusao DATETIME
);