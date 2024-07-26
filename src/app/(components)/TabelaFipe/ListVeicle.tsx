'use client'
import { getCarBrands } from '@/lib/invertexto/tabelaFipe'
import React, { useEffect, useState } from 'react'

export const ListVeicle = () => {
	const [brands, setBrands] = useState<string[]>([])

	useEffect(() => {
		const fetchBrands = async () => {
			try {
				const data = await getCarBrands()
				setBrands(data)
			} catch (error) {
				console.error('Erro ao buscar marcas:', error)
			}
		}

		fetchBrands()
	}, [])

	return (
		<div>
			Hue
			<ul>
				{brands.map((brand, index) => (
					<li key={index}>{brand}</li>
				))}
			</ul>
		</div>
	)
}
