import * as yup from 'yup';

const signupSchema = yup.object().shape({
	firstName: yup.string().required('O nome é obrigatório'),
	email: yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
	message: yup.string().required('A mensagem é obrigatória'),
});

export default signupSchema;
