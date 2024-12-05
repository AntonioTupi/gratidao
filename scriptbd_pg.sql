CREATE TABLE MensagensCurtas (
    ID serial PRIMARY KEY,
	Mensagem varchar(1000) NOT NULL,
	Tema varchar(100)
);

CREATE TABLE HistorasInspiradoras (
    ID serial PRIMARY KEY,
    Historia text NOT NULL,
    ImagemURL varchar(255)
);


insert into MensagensCurtas (Mensagem,Tema) values ('A amizade é um presente. Agradeço por ter pessoas tão especiais em minha vida.', 'Importancia da Amizade'),
	('Cada desafio superado é uma nova conquista. Sou grato por cada aprendizado', 'Celebrando a Superação')

select * from MensagensCurtas

INSERT INTO HistorasInspiradoras (Historia, ImagemURL)
VALUES 
(
    'Nunca desista dos seus sonhos. A jornada pode ser longa e cheia de obstáculos, mas a recompensa final é sempre maior do que qualquer desafio. Lembre-se: a persistência é a chave para o sucesso.',
    'https://cdn.melhorespublicacoes.com.br/base/127/107/c0c/1431-951-child-playing-at-night.jpg'
);

INSERT INTO HistorasInspiradoras (Historia, ImagemURL)
VALUES 
(
    'Em um pequeno vilarejo, vivia um menino que sonhava em voar. Passava horas observando os pássaros, imaginando como seria sentir a liberdade do céu. As pessoas riam de seus sonhos, dizendo que era impossível. Mas ele nunca desistiu. Construiu asas com pedaços de madeira e tecido, e com muita coragem, saltou do topo da colina. Não voou alto, mas sentiu a leveza e a alegria de tentar. E assim, a cada tentativa, ele se aproximava mais de seu sonho.',
    'https://www.google.com/search?q=imagem de menino voando com asas'
);

select * from HistorasInspiradoras

 SELECT *
FROM MensagensCurtas
ORDER BY RANDOM()
LIMIT 1;

select * from HistorasInspiradoras where historia like '%menino%'