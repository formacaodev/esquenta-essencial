SELECT * FROM cliente;

DELETE FROM cliente WHERE id = 2;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM cliente WHERE salario < 4000;

DELETE FROM cliente WHERE nome = 'João Silva';

SET SQL_SAFE_UPDATES = 1;

DELETE FROM cliente; -- NUNCA FAZER ISSO
