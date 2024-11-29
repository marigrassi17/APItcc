const db = require('../database/connection'); 

module.exports = {
    async listarAgenda(request, response) {
        try {       
            const sql = `SELECT agd_cod, med_cod, usu_cod, agd_data, agd_status from Agenda;`;
            const agenda = await db.query(sql);         
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de agenda.', 
                dados: agenda[0]
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 

    async cadastrarAgenda(request, response) {
        try {           
            const { med_cod, usu_cod, agd_data, agd_status} =request.body
            const sql =`INSERT INTO Agenda ( med_cod, usu_cod, agd_data, agd_status)
                       VALUES (?, ?, ?, ?);`;  
            const values = [med_cod, usu_cod, agd_data, agd_status] 
            const execSql= await db.query(sql,values)
            const agd_cod = execSql[0].insertId


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastrar agenda.', 
                    dados: agd_cod[0]
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 

    async editarAgenda(request, response) {
        try {       
            const {med_cod, usu_cod, agd_data, agd_status} = request.body
            const {agd_cod} = request.params
            const sql = `UPDATE Telefones SET med_cod = ?, usu_cod = ?, agd_data = ?, agd_status = ?
                         WHERE agd_cod = ?;`;
            const values = [];
            const atualizaDados = await db.query(sql,values);  
            return response.status(200).json({
                sucesso: true, 
                mensagem: `Telefone ${agd_cod} atualizado com sucesso`, 
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

    async apagarAgenda(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar agenda.', 
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
