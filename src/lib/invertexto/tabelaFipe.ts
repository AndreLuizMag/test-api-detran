import api from './config'

export const getCarBrands = async () => {
	try {
		const response = await api.get('/brands/1') // 1 para carros, 2 para motos, 3 para caminhões
		return response.data
	} catch (error) {
		console.error('Erro ao buscar marcas de carros:', error)
		throw error
	}
}
