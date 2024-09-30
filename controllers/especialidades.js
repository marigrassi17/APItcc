const db = require('../database/connection'); 

module.exports = {
    async listarEspecialidades(request, response) {
        try { 

            const sql = `SELECT 
             esp_cod, esp_nome FROM Especialidades;`;  

            const Especialidades = await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Especialidades.', 
                dados: Especialidades
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 

    async cadastrarEspecialidades(request, response) {
        try {          
            
            const {esp_nome} = request.body;
            const sql = `INSERT INTO Especialidades
        (esp_nome) VALUES (?)`;
            const values = [esp_nome];
            const execSql = await db.query(sql, values);
            const esp_cod  = execSql[0].insertId 

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastrar Especialidades.', 
                dados: esp_cod
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 

    async editarEspecialidades(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar Especialidades', 
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

    async apagarEspecialidades(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar Especialidades.', 
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
