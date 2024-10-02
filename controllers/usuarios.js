const db = require('../database/connection'); 

module.exports = {
    async listarUsuarios(request, response) {
        try {            
            const sql = `SELECT usu_cod, usu_nome, usu_email, 
                        usu_senha, usu_dt_nasc, usu_cidade, usu_genero usu_ativo = 1 AS usu_ativo
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
            
            const {usu_nome, usu_email, usu_senha, usu_dt_nasc, usu_cidade, usu_genero,} = request.body;

            const sql = `INSERT INTO Usuarios 
                         (usu_cod, usu_nome, usu_email, usu_senha,
                          usu_dt_nasc, usu_cidade, usu_genero) 
                          VALUES`;
            
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
