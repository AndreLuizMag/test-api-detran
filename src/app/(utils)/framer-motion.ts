export const easing = [0.25, 0.46, 0.45, 0.94]

export const appFadeInUp = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.32,
			ease: easing,
		},
	},
	exit: { opacity: 0, y: 20 },
}
