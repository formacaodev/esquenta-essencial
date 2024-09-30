INSERT INTO cliente (id,nome, salario, pontos, nascimento, administrador, data_inclusao) 
VALUES (1,'João Silva', 3500.00, 50, '1993-05-21', TRUE, NOW());

INSERT INTO cliente (id, nome, salario, pontos, nascimento, administrador, data_inclusao) 
VALUES 
    (2, 'Maria Oliveira', 2500.00, 28, '1995-03-15', FALSE, NOW()),
    (3, 'Carlos Pereira', 4200.00, 35, '1988-08-10', TRUE, NOW()),
    (4, 'Ana Costa', 3200.00, 27, '1996-11-23', FALSE, NOW());

SELECT * FROM cliente;