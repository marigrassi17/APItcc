const db = require('../database/connection'); 

module.exports = {
    async listarUsuarios(request, response) {
        try {            
            const sql = `SELECT 
                * 
                FROM Usuarios;`;
                
            const usuarios = await db.query(sql)    

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: usuarios
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 

    async cadastrarUsuarios(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastrar Usuario.', 
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

    async editarUsuarios(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar Usuario', 
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

    async apagarUsuarios(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar usuarios.', 
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