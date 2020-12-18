import * as yup from 'yup'

const doctorSchema = yup.object().shape({
    nome: yup.string().required().max(121),
    crm: yup.number().positive().integer().required(),
    telefoneFixo: yup.number().positive().integer().required(),
    telefoneCelular: yup.number().positive().integer().required(),
    cep: yup.number().positive().integer().required().max(8),
    logradouro: yup.string().required(),
    bairro: yup.string().required(),
    cidade: yup.string().required(),
    estado: yup.string().required()

});

export default doctorSchema;