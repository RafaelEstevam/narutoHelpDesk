import * as yup from 'yup';

const loginValidation = yup.object().shape({
    email: yup.string().email().required(),
    senha: yup.string().required()
});

const registerValidation = yup.object().shape({
    email: yup.string().email().required(),
    senha: yup.string().required(),
    nome: yup.string().required(),
    sobrenome: yup.string().required(),
    empresa: yup.string().required(),
    cnpj: yup.string().required(),
    plano: yup.string().required(),
});

const userValidation = yup.object().shape({
    nome:yup.string().required(),
    sobrenome:yup.string().required(),
    email:yup.string().email().required(),
});

const ticketValidation = yup.object().shape({
    titulo: yup.string().required(),
    descricao: yup.string().required(),
    setor: yup.string().required(),
});

//chatValidation

const chatValidation = yup.object().shape({
    conteudo: yup.string().required(),
});

const taskTalkValidation = yup.object().shape({
    userId:yup.string().required(),
    clientId:yup.string().required(),
    taskId:yup.string().required(),
    talk: yup.string()
});

const clientValidation = yup.object().shape({
    name:yup.string().required(),
    cpfCnpj:yup.string().required(),
    email:yup.string().email().required(),
    password:yup.string().required(),
});

const profileValidation = yup.object().shape({
    name:yup.string().required(),
    cpfCnpj:yup.string().required(),
    email:yup.string().email().required(),
    password:yup.string().required(),
});

export {
    loginValidation,
    userValidation,
    clientValidation,
    ticketValidation,
    profileValidation,
    taskTalkValidation,
    registerValidation,
    chatValidation
};