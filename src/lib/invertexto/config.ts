import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_INVERTEXTO_BASE_URL
const token = decodeURIComponent(
	process.env.NEXT_PUBLIC_INVERTEXTO_TOKEN_TEST as string
)

const apiInvertexto = axios.create({
	baseURL: baseUrl,
})

apiInvertexto.interceptors.request.use((config) => {
	config.headers = config.headers || {}
	config.headers.Authorization = `Bearer ${token}`
	return config
})

export default apiInvertexto
