const db = require('../database/connection'); 

module.exports = {
    async listarUsuarios(request, response) {
        try {            
            const sql = `SELECT usu_cod, usu_nome, usu_email, 
                        usu_senha, usu_dt_nasc, usu_cidade, usu_genero = 1 AS 
                        usu_genero
                        FROM Usuarios;`;
                
            const usuarios = await db.query(sql)    

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: usuarios[0]
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
            
            const {usu_nome, usu_email, usu_senha, usu_dt_nasc, usu_cidade, usu_genero} = request.body;

            const sql = `INSERT INTO Usuarios 
                         (usu_nome, usu_email, usu_senha,
                          usu_dt_nasc, usu_cidade, usu_genero) 
                          VALUES (?,?,?,?,?,?)`;

            const values = [usu_nome, usu_email, usu_senha, usu_dt_nasc, usu_cidade, usu_genero,];             
            
            const execSql = await db.query(sql,values);

            const usu_cod = execSql[0].insertId;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro do usuario efetuado com sucesso.', 
                dados: usu_cod
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

            const {usu_nome, usu_email, usu_senha, usu_dt_nasc, usu_cidade, usu_genero} = request.body;
            const {usu_cod} = request.params;
            const sql = `UPDATE Usuarios SET usu_nome = ?, usu_email = ?, 
                         usu_senha = ?, usu_dt_nasc = ?, usu_cidade = ?, 
                         usu_genero = ? WHERE usu_cod = ?;`;

            const values = [usu_nome, usu_email, usu_senha, usu_dt_nasc, usu_cidade, usu_genero, usu_cod];
            const atualizaDados = await db.query(sql, values);             

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Usuario ${usu_cod} atualizado com sucesso!`, 
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

    async apagarUsuarios(request, response) {
        try {            

            const {usu_cod} = request.params;
            const sql = `DELETE FROM usuarios WHERE usu_cod = ?;`;
            const values = [usu_cod];
            const excluir = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Usuario ${usu_cod} excluido com sucesso`, 
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
