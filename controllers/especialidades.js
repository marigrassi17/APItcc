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
            
            const { esp_nome} = request.body;
            const {esp_cod} = request.params;
            const sql = `UPDATE Especialidades SET esp_nome = ? WHERE esp_cod = ?;`;
            const values = [esp_nome, esp_cod]
            const atualizaDados = await db.query(sql, values);


            return response.status(200).json({
                sucesso: true, 
                mensagem: `Especialidade ${esp_cod} atualizada com sucesso!`, 
                dados: atualizaDados[0].affectedRows
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
            const {esp_cod} = request.params;
            const sql = `DELETE FROM Especialidades WHERE esp_cod = ?`;
            const values = [esp_cod];
            const excluir = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Especialidades ${esp_cod} excluido com sucesso.`, 
                dados: excluir[0].affectedRows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisiçao.',
                dados: error.message
            });
        }
    }, 

    async ocultarEspecialidade (request, response) {
        try{
            const esp_nome = false;
            const {esp_cod} = request.params;
            const sql = `UPDATE Especialidades SET esp_nome = ? WHERE esp_cod = ?;`;
            const values = [esp_nome, esp_cod];
            const atualizacao = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Especialidades ${esp_cod} excluido com sucesso.`, 
                dados: atualizacao[0].affectedRows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisiçao.',
                dados: error.message
            });

        }
    }
};
