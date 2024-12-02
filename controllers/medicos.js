const db = require('../database/connection');

module.exports = {
    async listarMedicos(request, response) {
        try {
            const { esp_cod = 0, med_cidade = '-' } = request.body;
            const sql = esp_cod == 0 && med_cidade == '-' ?
                `select m.med_cod, u.usu_nome, u.usu_cidade, m.med_logradouro, m.med_numero, m.med_complemento, m.med_bairro, m.med_cep, m.esp_cod, e.esp_nome  
                    from Medicos m 
                    INNER JOIN usuarios u ON u.usu_cod = m.med_cod 
                    INNER JOIN especialidades e ON e.esp_cod = m.esp_cod;` :
                `select m.med_cod, u.usu_nome, u.usu_cidade, m.med_logradouro, m.med_numero, m.med_complemento, m.med_bairro, m.med_cep, m.esp_cod, e.esp_nome  
                    from Medicos m 
                    INNER JOIN usuarios u ON u.usu_cod = m.med_cod 
                    INNER JOIN especialidades e ON e.esp_cod = m.esp_cod 
                    WHERE m.esp_cod = ? AND u.usu_cidade = ?;`;
            const dados = esp_cod == 0 && med_cidade == '-' ? [] : [esp_cod, med_cidade];

            const Medicos = await db.query(sql, dados);

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de medicos.',
                dados: Medicos[0]
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },

    async cadastrarMedicos(request, response) {
        try {

            const { med_cod, med_logradouro, med_numero, med_complemento, med_bairro, med_cep, esp_cod } = request.body;
            const sql = `INSERT INTO Medicos (med_cod, med_logradouro, med_numero,
                         med_complemento, med_bairro, med_cep, esp_cod) 
                         VALUES (?, ?,?,?,?,?,?)`
            const values = [med_cod, med_logradouro, med_numero, med_complemento, med_bairro, med_cep, esp_cod];
            const execSql = await db.query(sql, values);
            const cadastrar = execSql[0].insertId;

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastrar medicos.',
                dados: med_cod
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },

    async editarMedicos(request, response) {
        try {
            const { med_logradouro, med_numero, med_complemento, med_bairro, med_cep, esp_cod } = request.body;
            const { med_cod } = request.params;
            const sql = `UPDATE Medicos SET med_logradouro= ?, med_numero= ?, med_complemento= ?, med_bairro= ?, med_cep= ?, esp_cod = ? WHERE med_cod= ?;`;
            const values = [med_logradouro, med_numero, med_complemento, med_bairro, med_cep, esp_cod, med_cod];
            const atualizaDados = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true,
                mensagem: `Medico ${med_cod} atualizado com sucesso!`,
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

    async apagarMedicos(request, response) {
        try {
            const { med_cod } = request.params;
            const sql = `DELETE FROM Medicos WHERE med_cod =?`;
            const values = [med_cod];
            const excluir = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true,
                mensagem: `Medico ${med_cod} excluido com sucesso!`,
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


    async ocultarMedicos(request, response) {
        try {
            const usu_ativo = false;
            const { use_id } = reuqest.params;
            const sql = `UPDATE medicos SET usu_ativo =? WHERE usu_ativo =?`;
            const values = [usu_ativo, usu_id];
            const atualizacao = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true,
                mensagem: `Medico ${med_cod} excluido com sucesso!`,
                dados: excluir[0].affectedRows
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
