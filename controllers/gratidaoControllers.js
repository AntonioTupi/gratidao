const gratidaoModel = require('../models/gratidaoModels');

// Controlador para listar uma mensagem de gratidão
const getMensagem = async (req, res) => {
    try {
        const mensagem = await gratidaoModel.getMensagem();
        res.status(200).json(mensagem);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar mensagem' });
    }
};

// Controlador para buscar uma história de gratidão
const getHistoria = async (req, res) => {
    try {
        const { palavra } = req.params;
        const historia = await gratidaoModel.getHistoria(palavra);
        if (!historia) {
            return res.status(404).json({ error: 'Historia não encontrada' });
        }
        res.status(200).json(historia);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar historia' });
    }
};

// Controlador para criar um novo usuário
const createMensagem = async (req, res) => {
    try {
        const { Mensagem, Tema } = req.body;
        const newMsg = await gratidaoModel.createMensagem(Mensagem, Tema);
        res.status(201).json(newMsg);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar mensagem' });
    }
};



module.exports = {
    getMensagem,
    getHistoria,
    createMensagem,

};
