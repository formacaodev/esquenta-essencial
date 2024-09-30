SELECT * FROM cliente;

SELECT nome, pontos from cliente;

SELECT id AS identificador, nome AS nomeCompleto FROM cliente;

SELECT nome FROM cliente WHERE id = 2;

SELECT nome FROM cliente WHERE id <> 1;

SELECT * FROM cliente WHERE nome LIKE '%eira';

SELECT * FROM cliente WHERE nome LIKE '%os%';

SELECT * FROM cliente WHERE nome LIKE 'Jo%';

SELECT * FROM cliente WHERE salario > 3500;

SELECT * FROM cliente WHERE salario < 3500;

SELECT * FROM cliente WHERE salario >= 3500;

SELECT * FROM cliente WHERE salario <= 3500;

SELECT nome, salario FROM cliente WHERE salario = 3500 AND administrador = TRUE;

SELECT nome, salario FROM cliente WHERE salario = 3500 OR administrador = TRUE;

SELECT nome, salario FROM cliente WHERE NOT (salario <= 2500);

SELECT * FROM cliente ORDER BY pontos;

SELECT * FROM cliente ORDER BY pontos DESC;

SELECT * FROM cliente LIMIT 3;

SELECT * FROM cliente LIMIT 3 OFFSET 2;

