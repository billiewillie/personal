'use client'

import Projects from '@/components/sections/Projects'
import { useEffect, useState } from 'react'

export default function ProjectsPage() {
	const [revealClass, setRevealClass] = useState('')
	useEffect(() => {
		setRevealClass('revealedFx')
	}, [revealClass])
	return (
		<div className={`revealFx relative flex w-full flex-col justify-center hideRevealFx ${revealClass}`}>
			<Projects />
		</div>
	)
}
