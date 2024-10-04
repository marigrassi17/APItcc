const db = require('../database/connection'); 

module.exports = {
    async listarMensagens(request, response) {
        try {            
            // instruçoês SQL 
            const sql = `SELECT
              men_cod, men_texto, men_data, usu_cod,
              agd_cod, men_visualizada = 1 AS men_visualizada
              FROM mensagens;`;
              // Executa instruçoes SQL e armazena o resultado na variavel usuarios
              const mensagens = await db. query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de mensagens.', 
                dados: mensagens
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 

    async cadastrarMensagens(request, response) {
        try {            

         // parametros recebidos no corpo da requisiçao 
         const {men_texto, men_data, usu_cod, agd_cod, men_visualizada} = request.body;

         // instruçao SQL
         const sql = `INSERT INTO mensagens
            (men_texto, men_data, usu_cod, agd_cod, men_visualizada)
             VALUES (?,?,?,?,?)`;

        //definiçao dos dados a serem inseridos em um array
        const values = [men_texto, men_data, usu_cod, agd_cod, men_visualizada];

        //execuçao da instruçao sql passando os parametros
        const execSql = await db.query(sql, values);

        //indentificaçao do ID do registro inserido 
        const men_cod = execSql[0].insertId;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro realizado com sucesso.', 
                dados: men_cod
                //mensSql: execSql
            });

            
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 

    async editarMensagens(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar mensagens', 
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

    async apagarMensagens(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar mensagens.', 
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
