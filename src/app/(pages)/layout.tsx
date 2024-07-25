import type { Metadata } from 'next'
import '../(styles)/main.scss'

export const metadata: Metadata = {
	title: 'Beviseguros - Auto',
	description:
		'Faça a sua cotação para seguros de automóveis',
}

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<html lang='pt-BR'>
			<body>{children}</body>
		</html>
	)
}

export default RootLayout
