const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 
const MedicosController = require('../controllers/medicos'); 
const MensagensController = require('../controllers/mensagens'); 
const TelefoneController = require('../controllers/telefone'); 
const AgendaController = require('../controllers/agenda'); 


// definição das rotas
router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios', UsuariosController.editarUsuarios); 
router.delete('/usuarios', UsuariosController.apagarUsuarios); 

router.get('/medicos', MedicosController.listarMedicos); 
router.post('/medicos', MedicosController.cadastrarMedicos); 
router.patch('/medicos', MedicosController.editarMedicos); 
router.delete('/medicos', MedicosController.apagarMedicos); 

router.get('/mensagens', MensagensController.listarMensagens); 
router.post('/mensagens', MensagensController.cadastrarMensagens); 
router.patch('/mensagens', MensagensController.editarMensagens); 
router.delete('/mensagens', MensagensController.apagarMensagens); 

router.get('/telefone', TelefoneController.listarTelefone); 
router.post('/telefone', TelefoneController.cadastrarTelefone); 
router.patch('/telefone', TelefoneController.editarTelefone); 
router.delete('/telefone', TelefoneController.apagarTelefone); 

router.get('/agenda', AgendaController.listarAgenda); 
router.post('/agenda', AgendaController.cadastrarAgenda); 
router.patch('/agenda', AgendaController.editarAgenda); 
router.delete('/agenda', AgendaController.apagarAgenda); 

router.get('/agenda', AgendaController.listarAgenda); 
router.post('/agenda', AgendaController.cadastrarAgenda); 
router.patch('/agenda', AgendaController.editarAgenda); 
router.delete('/agenda', AgendaController.apagarAgenda); 




module.exports = router;
