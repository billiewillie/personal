'use client'

import Projects from '@/components/sections/Projects'
import { useEffect, useState } from 'react'

export default function ProjectPage() {
	const [revealClass, setRevealClass] = useState('')
	useEffect(() => {
		setRevealClass('revealedFx')
	}, [revealClass])
	return (
		<div className={`revealFx relative flex w-full flex-col justify-center hideRevealFx ${revealClass}`}>
			<h1>Project 1</h1>
			<p className={'h-[400px]'}>Description about project</p>
		</div>
	)
}
