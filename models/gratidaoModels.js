const pool = require('../db/db');

// Consulta para listar uma mensagem de gratidao
const getMensagem = async () => {
    const result = await pool.query('SELECT * FROM MensagensCurtas ORDER BY RANDOM() LIMIT 1; ');
    return result.rows;
};

// Consulta para buscar um usuário por ID
const getHistoria = async (palavra) => {
    const result = await pool.query('select * from HistorasInspiradoras where historia like $1 LIMIT 1', [`%${palavra}%`]);
    return result.rows[0];
};

// Inserir um novo usuário
const createMensagem = async (Mensagem, Tema) => {
    const result = await pool.query(
        'insert into MensagensCurtas (Mensagem,Tema) values ($1, $2) RETURNING *',
        [Mensagem, Tema]
    );
    return result.rows[0];
};



module.exports = {
    getMensagem,
    getHistoria,
    createMensagem,

};
