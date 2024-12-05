const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // Essa opção pode ser necessária em alguns casos
    }
});

pool.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco:', err.stack);
    } else {
        console.log('Conexão com o banco estabelecida com sucesso!');
    }
});

module.exports = pool;
