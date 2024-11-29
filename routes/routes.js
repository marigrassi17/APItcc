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
router.patch('/medicos/:med_cod', MedicosController.editarMedicos); 
router.delete('/medicos/:med_cod', MedicosController.apagarMedicos); 
router.delete('/medicos/:med_cod', MedicosController.ocultarMedicos); 

router.get('/mensagens', MensagensController.listarMensagens); 
router.post('/mensagens', MensagensController.cadastrarMensagens); 
router.patch('/mensagens', MensagensController.editarMensagens); 
router.delete('/mensagens', MensagensController.apagarMensagens); 

router.get('/telefone', TelefoneController.listarTelefone); 
router.post('/telefone', TelefoneController.cadastrarTelefone); 
router.patch('/telefone/:tel_cod', TelefoneController.editarTelefone); 
router.delete('/telefone/:tel_cod', TelefoneController.apagarTelefone); 

router.get('/agenda', AgendaController.listarAgenda); 
router.post('/agenda', AgendaController.cadastrarAgenda); 
router.patch('/agenda/:agd_cod', AgendaController.editarAgenda); 
router.delete('/agenda/:agd_cod', AgendaController.apagarAgenda);

router.get('/indis', IndisponibilidadeController.listarIndisponibilidade); 
router.post('/indis', IndisponibilidadeController.cadastrarIndisponibilidade); 
router.patch('/indis/:ind_cod', IndisponibilidadeController.editarIndisponibilidade); 
router.delete('/indis/:ind_cod', IndisponibilidadeController.apagarIndisponibilidade); 

router.get('/disponibilidade', DisponibilidadeController.listarDisponibilidade); 
router.post('/disponibilidade', DisponibilidadeController.cadastrarDisponibilidade); 
router.patch('/disponibilidade/:disp_cod', DisponibilidadeController.editarDisponibilidade); 
router.delete('/disponibilidade/:disp_cod', DisponibilidadeController.apagarDisponibilidade); 

router.get('/especialidades', EspecialidadesController.listarEspecialidades); 
router.post('/especialidades', EspecialidadesController.cadastrarEspecialidades); 
router.patch('/especialidades/:esp_cod', EspecialidadesController.editarEspecialidades); 








module.exports = router;
