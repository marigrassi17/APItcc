const db = require('../database/connection'); 

module.exports = {
    async listarDisponibilidade(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Disponibilidade.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 

    async cadastrarDisponibilidade(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastrar Disponibilidade.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 

    async editarDisponibilidade(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar Disponibilidade.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 

    async apagarDisponibilidade(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar Disponibilidade.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisiçao.',
                dados: error.message
            });
        }
    }, 
};
