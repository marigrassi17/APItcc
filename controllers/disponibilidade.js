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
