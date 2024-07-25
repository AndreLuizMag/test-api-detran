'use client'

import React, { useState } from 'react'

const SearchVeicle = () => {
	const [placa, setPlaca] = useState('')
	const [vehicleData, setVehicleData] = useState<any>(null)
	const [error, setError] = useState<string | null>(null)

	const handleSearch = async () => {
		try {
			const response = await fetch(`/api/vehicles/${placa}`)
			if (!response.ok) {
				throw new Error('Erro ao buscar dados do veículo')
			}
			const data = await response.json()
			setVehicleData(data)
			setError(null)
		} catch (error) {
			setError('Erro ao buscar dados do veículo.')
			setVehicleData(null)
		}
	}

	return (
		<section>
			<div className='bv-container-md'>
				<h1>Buscar Dados do Veículo</h1>
				<input
					type='text'
					value={placa}
					onChange={(e) => setPlaca(e.target.value)}
					placeholder='Digite a placa'
				/>
				<button onClick={handleSearch}>Buscar</button>
				{error && <p>{error}</p>}
				{vehicleData && (
					<div>
						<h2>Dados do Veículo</h2>
						<pre>
							{JSON.stringify(vehicleData, null, 2)}
						</pre>
					</div>
				)}
			</div>
		</section>
	)
}

export default SearchVeicle
