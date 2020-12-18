
const mongoose  = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    crm: {
        type: String,
        required: true
    },

    telefoneFixo: {
        type: String,
        required: true
    },

    telefoneCelular: {
        type: String,
        required: true
    },

    cep: {
        type: String,
        required: true
    },

    logradouro: {
        type: String,
        required: true
    },

    bairro: {
        type: String,
        required: true
    },

    cidade: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        required: true
    },

    especialidade: {
        type: Object,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }

});

mongoose.model('Doctor', DoctorSchema);

