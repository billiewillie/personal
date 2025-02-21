'use client'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Process from '@/components/sections/Process'
import Projects from '@/components/sections/Projects'
import Speciality from '@/components/sections/Speciality'
import Experience from '@/components/sections/Experience'
import { useEffect, useState } from 'react'

export default function Home() {
	const [revealClass, setRevealClass] = useState('')
	useEffect(() => {
		setRevealClass('revealedFx')
	}, [revealClass])
	return (
		<div className={`revealFx relative flex w-full flex-col justify-center hideRevealFx ${revealClass}`}>
			<Hero />
			<Skills />
			<About />
			<Experience />
			<Process />
			<Projects />
			<Speciality />
		</div>
	)
}
