import {
	motion,
	useDragControls,
	useMotionValue,
} from 'framer-motion'
import * as React from 'react'

interface ControlsProps {
	onChangeSpeed: (newSpeed: number) => void
}

const MARKER_COUNT = 100

const Controls: React.FC<ControlsProps> = ({
	onChangeSpeed,
}) => {
	const controls = useDragControls()
	const y = useMotionValue(50)

	const startDrag = (
		event: React.PointerEvent<HTMLDivElement>
	) => {
		controls.start(event)
	}

	const handleSliderChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const newSpeed = parseFloat(e.target.value)
		onChangeSpeed(newSpeed)
		y.set(newSpeed * 100)
	}

	React.useEffect(() => {
		y.on('change', (latest) => {
			const newSpeed = (latest / 100).toFixed(2)
			onChangeSpeed(parseFloat(newSpeed))
		})
	}, [y, onChangeSpeed])

	return (
		<div
			onPointerDown={startDrag}
			className='pointer-events-auto absolute left-[94%] top-1/2 -translate-x-1/2 flex h-64 w-24 -translate-y-1/2 flex-col items-center justify-between overflow-hidden text-white [mask-image:radial-gradient(100%_65%_at_50%_50%,_black_30%,_transparent_100%)]'>
			<div className='absolute left-0 top-[calc(50%+.5rem)] h-3 w-3 -translate-y-1/2 rotate-90 bg-white [clip-path:polygon(50%_0%,0%_100%,100%_100%)]' />
			<motion.div
				drag='y'
				dragConstraints={{ top: 0, bottom: 100 }}
				style={{ y }}
				dragControls={controls}
				className='relative flex select-none flex-col flex-nowrap gap-1'>
				{Array.from({ length: MARKER_COUNT }).map(
					(_, i) => (
						<div
							key={i}
							className='flex flex-row flex-nowrap items-center'>
							<div
								className='w-5 h-[.125rem] bg-white'
								style={{
									opacity: i % 10 === 0 ? 1 : 0.25,
								}}
							/>
							{i % 10 === 0 && (
								<span className='leading-none ml-1 text-[.5rem] font-mono'>
									{(i / 100).toFixed(2)}
								</span>
							)}
						</div>
					)
				)}
			</motion.div>
			<input
				type='range'
				min='0'
				max='1'
				step='0.01'
				value={(y.get() / 100).toFixed(2)}
				className='absolute w-px h-px opacity-0'
				onChange={handleSliderChange}
			/>
		</div>
	)
}

export default Controls
