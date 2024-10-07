const db = require('../database/connection'); 

module.exports = {
    async listarDisponibilidade(request, response) {
        try {
            const sql = `SELECT
                disp_cod, disp_periodo, disp_horario_ini, 
                disp_horario_fim, disp_dia_semana, med_cod 
                FROM Disponibilidades;`;

            const disponibilidade = await db.query(sql);
            
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de usuarios.',
                dados: disponibilidade
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
            
            const { disp_periodo, disp_horario_ini, disp_horario_fim, disp_dia_semana, med_cod } = request.body;

            const sql = `INSERT INTO Disponibilidades (disp_periodo,
                disp_horario_ini, disp_horario_fim, disp_dia_semana, med_cod)
                VALUES (?,?,?,?,?)`;
                
            const values =[disp_periodo, disp_horario_ini, disp_horario_fim, disp_dia_semana, med_cod];

            const execSql = await db.query(sql, values);

            const disp_cod = execSql[0].insertId;
            
                return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro realizado com sucesso.', 
                dados: disp_cod
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

            const { disp_periodo, disp_horario_ini, disp_horario_fim, disp_dia_semana, med_cod } = request.body;

            const { disp_cod } = request.params;
            
            const sql = `UPDATE Disponibilidades set disp_periodo = ?,
                disp_horario_ini = ?, disp_horario_fim = ?, disp_dia_semana = ?, med_cod = ?
                WHERE disp_cod = ?;`;

            const values =[disp_periodo, disp_horario_ini, disp_horario_fim, disp_dia_semana, med_cod, disp_cod];

            const atualizaDados = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Disponibilidade ${disp_cod} atualizado com sucesso!`, 
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

    async apagarDisponibilidade(request, response) {
        try {
            
            const { disp_cod } = request.params;

            const sql = `DELETE FROM disponibilidade WHERE disp_cod = ?`;

            const values = [ disp_cod ];

            const excluir = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Disponibilidade ${disp_cod} excluido com sucesso`, 
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
};
