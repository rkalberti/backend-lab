CREATE TABLE cliente 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 nome VARCHAR(100) NOT NULL,  
 cpf CHAR (14) NOT NULL UNIQUE,  
 email VARCHAR(100) NOT NULL UNIQUE,  
 celular CHAR (14) NOT NULL,  
 senha VARCHAR (512) NOT NULL  
); 

DROP TABLE cliente;


INSERT INTO cliente (
    nome, cpf, celular, email, senha
) VALUES 
    ('Dean Winchester', '111.222.333-44', '(11)91111-1111', 'dean.winchester@gmail.com', 'pie_and_impala67'),
    ('Sam Winchester', '222.333.444-55', '(11)92222-2222', 'sam.winchester@gmail.com', 'moose_lore123'),
    ('Rowena MacLeod', '333.444.555-66', '(11)93333-3333', 'rowena.macleod@gmail.com', 'queen_of_hell'),
    ('Castiel', '444.555.666-77', '(11)944444444', 'castiel.angel@gmail.com', 'trenchcoat_angel'),
    ('Princesa Tiabeanie Mariabeanie de la Rochambeaux Grunkwitz', '555.666.777-88', '(11)95555-5555', 'bean.grunkwitz@gmail.com', 'beer_and_freedom'),
    ('Luci', '666.666.666-66', '(11)96666-6666', 'luci.demon@gmail.com', 'do_it_do_it'),
    ('Bonnibel Jujuba', '777.888.999-00', '(11)97777-7777', 'bonnibel.jujuba@gmail.com', 'science_candy1'),
    ('Condessa Mircalla Karnstein', '888.999.000-11', '(11)98888-8888', 'carmilla.karnstein@gmail.com', 'styria_vamp1872'),
    ('Peter Quill', '999.000.111-22', '(11)99999-9999', 'star.lord@gmail.com', 'awesome_mix_vol1'),
    ('Rocket Raccoon', '000.111.222-33', '(11)90000-0000', 'rocket.raccoon@gmail.com', 'not_a_raccoon'),
    ('Newton Ártemis Fido Scamander', '123.456.789-10', '(11)91234-5678', 'newt.scamander@gmail.com', 'magizoology_beasts'),
    ('Gregory House', '234.567.890-12', '(11)92345-6789', 'gregory.house@gmail.com', 'everybody_lies'),
    ('James Evan Wilson', '345.678.901-23', '(11)93456-7890', 'james.wilson@gmail.com', 'oncology_doc'),
    ('Remy Beauregard Hadley', '456.789.012-34', '(11)94567-8901', 'remy.hadley@gmail.com', 'thirteen_house'),
    ('Robert Chase', '567.890.123-45', '(11)95678-9012', 'robert.chase@gmail.com', 'chase_aussie_doc'),
    ('Patrick Jane', '678.901.234-56', '(11)96789-0123', 'patrick.jane@gmail.com', 'tea_and_cbi');


# DELETE
DELETE FROM cliente;
DELETE FROM cliente WHERE id = 33



# SELECT 
SELECT * FROM cliente;

SELECT email, senha FROM cliente WHERE email ="email@gmail.com"

SELECT id, nome FROM cliente WHERE id <= 5;



# UPDATE 
UPDATE cliente
SET nome = "nome", email = "email@gmail.com"
WHERE id = 33

