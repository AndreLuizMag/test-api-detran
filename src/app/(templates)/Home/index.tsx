'use client'
import { ReactNode, useEffect, useRef } from 'react'
import {
	LayoutGroup,
	motion,
	useAnimation,
	useInView,
} from 'framer-motion'

import { appFadeInUp } from '@app/(utils)/framer-motion'

import { Intro } from './Intro'
import SearchVeicle from './SearchVeicle'

interface HomeWrapperProps {}

const Wrapper = ({ content }: { content: ReactNode }) => {
	const control = useAnimation()
	const ref = useRef(null)
	const inView = useInView(ref)

	useEffect(() => {
		if (inView) {
			control.start('visible')
		} else {
			control.start('hidden')
		}
	}, [control, inView])

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

export const HomeWrapper = () => {
	const contentList = [
		<Intro key='intro' />,
		<SearchVeicle key={'search'} />,
	]

	return (
		<LayoutGroup>
			{contentList.map((content, index) => (
				<Wrapper key={index} content={content} />
			))}
		</LayoutGroup>
	)
}
