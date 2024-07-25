'use client'
import {
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react'
import { motion, useAnimation } from 'framer-motion'

import { appFadeInUp } from '@/app/(utils)/framer-motion'

export const Wrapper = ({
	content,
}: {
	content: ReactNode
}) => {
	const control = useAnimation()
	const ref = useRef(null)
	const [hasAnimated, setHasAnimated] = useState(false) // Estado para rastrear se a animação já ocorreu

	useEffect(() => {
		if (!hasAnimated) {
			// Se ainda não foi animado
			control.start('visible')
			setHasAnimated(true) // Define que a animação ocorreu
		}
	}, [control, hasAnimated])

	return (
		<motion.div
			ref={ref}
			variants={appFadeInUp}
			initial='hidden'
			animate={control}
			exit='exit'
			className='article-wrapper'>
			{content}
		</motion.div>
	)
}
