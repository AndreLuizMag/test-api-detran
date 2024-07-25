import { NextApiRequest, NextApiResponse } from 'next'
import axiosInstance from '@/lib/detran/axiosServerConfig'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { placa } = req.query

	if (!placa || typeof placa !== 'string') {
		return res.status(400).json({ error: 'Placa inválida' })
	}

	try {
		const response = await axiosInstance.get(
			`/veiculos/placa/${placa}`
		)
		res.status(200).json(response.data)
	} catch (error) {
		console.error('Error fetching vehicle data:', error)
		res
			.status(500)
			.json({ error: 'Erro ao buscar dados do veículo' })
	}
}
