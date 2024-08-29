const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 
const MedicosController = require('../controllers/medicos'); 
const MensagensController = require('../controllers/mensagens'); 
const TelefoneController = require('../controllers/telefone'); 
const AgendaController = require('../controllers/agenda'); 
const IndisponibilidadeController = require('../controllers/indis'); 
const DisponibilidadeController = require('../controllers/disponibilidade'); 
const EspecialidadesController = require('../controllers/especialidades'); 


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

router.get('/indis', IndisponibilidadeController.listarIndisponibilidade); 
router.post('/indis', IndisponibilidadeController.cadastrarIndisponibilidade); 
router.patch('/indis', IndisponibilidadeController.editarIndisponibilidade); 
router.delete('/indis', IndisponibilidadeController.apagarIndisponibilidade); 

router.get('/disponibilidade', DisponibilidadeController.listarDisponibilidade); 
router.post('/disponibilidade', DisponibilidadeController.cadastrarDisponibilidade); 
router.patch('/disponibilidade', DisponibilidadeController.editarDisponibilidade); 
router.delete('/disponibilidade', DisponibilidadeController.apagarDisponibilidade); 

router.get('/especialidades', EspecialidadesController.listarEspecialidades); 
router.post('/especialidades', EspecialidadesController.cadastrarEspecialidades); 
router.patch('/especialidades', EspecialidadesController.editarEspecialidades); 
router.delete('/especialidades', EspecialidadesController.apagarEspecialidades); 







module.exports = router;
