import axiosInstance from './axiosConfig'

export const fetchVehicleData = async (placa: string) => {
	try {
		const response = await axiosInstance.get(
			`/veiculos/placa/${placa}`
		)
		return response.data
	} catch (error) {
		console.error('Error fetching vehicle data:', error)
		throw error
	}
}
