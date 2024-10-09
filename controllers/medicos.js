 const db = require('../database/connection'); 

module.exports = {
    async listarMedicos(request, response) {
        try {         
            const sql = `SELECT
            med_cod, med_logradouro, med_numero, med_complemento, med_bairro, med_cep, esp_cod FROM Medicos;`;  

            const Medicos = await db.query(sql);
            
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

            const {med_cod, med_logradouro, med_numero, med_complemento, med_bairro, med_cep, esp_cod} = request.body;
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
            const{med_logradouro, med_numero, med_complemento, med_bairro, med_cep, esp_cod} = request.body;
            const{med_cod} = request.params;
            const sql = `UPDATE Medico SET med_logradouro= ?, med_numero= ?, med_complemento= ?, med_bairro= ?, med_cep= ?, esp_cod = ? WERE med_cod= ?;`;
            const values = [med_logradouro, med_numero, med_complemento, med_bairro, med_cep, esp_cod,med_cod];
            const atualizaDados = await db.query(sql,values);
            
            return response.status(200).json({
                sucesso: true, 
                mensagem: `Medico ${med_cod} atualizado com sucesso!`, 
                dados: atualizaDados [0].affectedRows
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
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar medicos.', 
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
