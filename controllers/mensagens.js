const db = require('../database/connection'); 

module.exports = {
    async listarMensagens(request, response) {
        try {            
            // instruçoês SQL 
            const sql = ` SELECT
              men_cod, men_texto, men_data, usu_cod,
              agd_cod, men_visualizada
              FROM usuarios;` ;
              // Executa instruçoes SQL e armazena o resultado na variavel usuarios
              const usuarios = await db. query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de mensagens.', 
                dados: mensagens
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 

    async cadastrarMensagens(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastrar mensagens.', 
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

    async editarMensagens(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar mensagens', 
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

    async apagarMensagens(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar mensagens.', 
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
