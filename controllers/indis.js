const db = require('../database/connection'); 

module.exports = {
    async listarIndisponibilidade(request, response) {
        try {
            
            const sql = `SELECT ind_data, med_cod FROM Indisponibilidade;`

        const Indisponibilidade = await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Indisponibilidade.', 
                dados: Indisponibilidade[0]
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 

    async cadastrarIndisponibilidade(request, response) {
        try { 
            
            const { ind_data, med_cod } = request.body;

            const sql = `INSERT INTO Indisponibilidade (ind_data, med_cod)
                        VALUES(?,?);`;

            const values =[ind_data, med_cod];

            const execSql = await db.query(sql, values);

            const ind_cod = execSql[0].insertId;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastrar Indisponibilidade.', 
                dados: ind_cod
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 

    async editarIndisponibilidade(request, response) {
        try {  
            
            const { ind_data, med_cod  } = request.body;

            const { ind_cod } = request.params;
            
            const sql = `UPDATE Indisponibilidades SET ind_data = ?, med_cod = ?,
                WHERE ind_cod = ?;`;

            const values =[ind_data, med_cod,ind_cod];

            const atualizaDados = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Indisponibilidade ${ind_cod} atualizado com sucesso`, 
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

    async apagarIndisponibilidade(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar Indisponibilidade.', 
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
