
const express = require('express');
const routes = express.Router();

const doctorController = require('./controllers/doctorController');

//Route
routes.get('/doctors', doctorController.listarTodos);
routes.get('/doctors/:id', doctorController.listarIndividual);
routes.post('/doctors/cadastrar', doctorController.cadastrar);
routes.put('/doctors/:id', doctorController.atualizar);
routes.delete('/doctors/:id', doctorController.deletar);
routes.get('/doctors/pesquisar/:nome', doctorController.pesquisar);
routes.get('/doctors/pesquisar-crm/:crm', doctorController.pesquisarCRM);
routes.get('/doctors/pesquisar-telefoneFixo/:telefoneFixo', doctorController.pesquisartelefoneFixo);
routes.get('/doctors/pesquisar-telefoneCelular/:telefoneCelular', doctorController.pesquisartelefoneCelular);
routes.get('/doctors/pesquisar-cep/:cep', doctorController.pesquisarCep);
routes.get('/doctors/pesquisar-logradouro/:logradouro', doctorController.pesquisarLogradouro);
routes.get('/doctors/pesquisar-bairro/:bairro', doctorController.pesquisarBairro);
routes.get('/doctors/pesquisar-cidade/:cidade', doctorController.pesquisarCidade);
routes.get('/doctors/pesquisar-estado/:estado', doctorController.pesquisarEstado);
routes.get('/doctors/pesquisar-especialidade/:especialidade', doctorController.pesquisarEspecialidade);



module.exports = routes;