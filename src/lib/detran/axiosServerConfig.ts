import axios from 'axios'
import https from 'https'
import fs from 'fs'
import path from 'path'
const cpfConsult = process.env.NEXT_PUBLIC_CPF_CONSULT

const certPath = path.resolve(
	process.cwd(),
	'path/to/certificate.pem'
)
const keyPath = path.resolve(
	process.cwd(),
	'path/to/key.pem'
)

const httpsAgent = new https.Agent({
	cert: fs.readFileSync(certPath),
	key: fs.readFileSync(keyPath),
})

const axiosInstance = axios.create({
	baseURL: 'https://wsdenatran.estaleiro.serpro.gov.br/v1',
	httpsAgent,
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
