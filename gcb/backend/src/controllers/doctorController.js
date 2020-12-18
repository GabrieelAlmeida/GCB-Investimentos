
const mongoose = require('mongoose');
const Doctor = mongoose.model('Doctor');

module.exports = {

    async listarTodos(req, res){
        const doctor = await Doctor.find(req.query);

        return res.json(doctor);
    }, 

    async cadastrar(req, res){
        const doctor = await Doctor.create(req.body);

        return res.json(doctor);

    },

    async listarIndividual(req, res){
        const doctor = await Doctor.findById(req.params.id);

        return res.json(doctor);

    },

    async deletar(req, res){
        await Doctor.findByIdAndRemove(req.params.id);

        return res.send();

    },

    async atualizar(req, res){
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(doctor);
    },

    async pesquisar(req, res){
       const doctor = await Doctor.find(req.query).where('nome').equals(req.params.nome)
       //const doctor = await Doctor.find(req.body).where('nome').equals(req.body)

        return res.json(doctor)

    },

    async pesquisarCRM(req, res){
        const doctor = await Doctor.find(req.query).where('crm').equals(req.params.crm)
        //const doctor = await Doctor.find(req.body).where('nome').equals(req.body)
 
         return res.json(doctor)
 
    },

    async pesquisartelefoneFixo(req, res){
        const doctor = await Doctor.find(req.query).where('telefoneFixo').equals(req.params.telefoneFixo)
        //const doctor = await Doctor.find(req.body).where('nome').equals(req.body)
 
         return res.json(doctor)
 
    },

    async pesquisartelefoneCelular(req, res){
        const doctor = await Doctor.find(req.query).where('telefoneCelular').equals(req.params.telefoneCelular)
        //const doctor = await Doctor.find(req.body).where('nome').equals(req.body)
 
         return res.json(doctor)
 
    },

    async pesquisarCep(req, res){
        const doctor = await Doctor.find(req.query).where('cep').equals(req.params.cep)
        //const doctor = await Doctor.find(req.body).where('nome').equals(req.body)
 
         return res.json(doctor)
 
    },

    async pesquisarLogradouro(req, res){
        const doctor = await Doctor.find(req.query).where('logradouro').equals(req.params.logradouro)
        //const doctor = await Doctor.find(req.body).where('nome').equals(req.body)
 
         return res.json(doctor)
 
    },

    async pesquisarBairro(req, res){
        const doctor = await Doctor.find(req.query).where('bairro').equals(req.params.bairro)
        //const doctor = await Doctor.find(req.body).where('nome').equals(req.body)
 
         return res.json(doctor)
 
    },

    async pesquisarCidade(req, res){
        const doctor = await Doctor.find(req.query).where('cidade').equals(req.params.cidade)
        //const doctor = await Doctor.find(req.body).where('nome').equals(req.body)
 
         return res.json(doctor)
 
    },

    async pesquisarEstado(req, res){
        const doctor = await Doctor.find(req.query).where('estado').equals(req.params.estado)
        //const doctor = await Doctor.find(req.body).where('nome').equals(req.body)
 
         return res.json(doctor)
 
    },

    async pesquisarEspecialidade(req, res){
        const doctor = await Doctor.find(req.query).where('especialidade.value').equals(req.params.especialidade)
        //const doctor = await Doctor.find(req.body).where('nome').equals(req.body)
 
         return res.json(doctor)
 
    }




 


};