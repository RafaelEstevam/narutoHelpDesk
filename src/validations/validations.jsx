import * as yup from 'yup';

const loginValidation = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
});

const userValidation = yup.object().shape({
    name:yup.string().required(),
    email:yup.string().email().required(),
    password:yup.string().required(),
});

const taskValidation = yup.object().shape({
    userId:yup.string().required(),
    clientId:yup.string().required(),
    taskId:yup.string().required(),
    description: yup.string() 
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
    taskValidation,
    profileValidation,
    taskTalkValidation
};