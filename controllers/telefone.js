const db = require('../database/connection'); 

module.exports = {
    async listarTelefone(request, response) {
        try {  
            const sql = `SELECT tel_cod, tel_numero, usu_cod FROM Telefones;`;
            const telefone = await db.query(sql);    
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de telefone.', 
                dados: telefone[0]
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 

    async cadastrarTelefone(request, response) {
        try {        
            const {tel_numero,usu_cod} = request.body;
            const sql =`INSERT INTO Telefones (tel_numero,usu_cod)
                        VALUES (?, ?);`; 
            const values = [tel_numero, usu_cod]
            const execSql= await db.query(sql,values)
            const tel_cod = execSql[0].insertId

            //ERRO: Column 'tel_numero' cannot be null

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastrar telefone.', 
                dados: tel_cod[0]
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 

    async editarTelefone(request, response) {
        try {            
            const {tel_numero, usu_cod} = request.body;
            const {tel_cod} = request.params;
            const sql = `UPDATE Telefones SET tel_numero = ?, usu_cod = ? WHERE tel_cod = ?;`;
            const values = [tel_numero, usu_cod, tel_cod];
            const atualizaDados = await db.query(sql, values);
            
            return response.status(200).json({
                sucesso: true, 
                mensagem: `Telefone ${tel_cod} atualizado com sucesso`, 
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

    async apagarTelefone(request, response) {
        try {           
            const {tel_cod} = request.params
            const sql = `DELETE FROM Telefones WHERE tel_cod = ?;`;
            const values = [tel_cod];
            const excluir = await db.query(sql, values)
            
            return response.status(200).json({
                sucesso: true, 
                mensagem: `Telefone ${tel_cod} exluido com sucesso.`, 
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
