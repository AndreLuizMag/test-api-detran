import axios from 'axios'

const cpfConsult = process.env.NEXT_PUBLIC_CPF_CONSULT

const axiosInstance = axios.create({
	baseURL: 'https://wsdenatran.estaleiro.serpro.gov.br/v1',
})

axiosInstance.interceptors.request.use(
	(config) => {
		config.headers['x-cpf-usuario'] = cpfConsult
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

export default axiosInstance
