'use client'

import { Logo } from '@/components/ui/Logo'
import { Navigation } from '@/components/Navigation'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'motion/react'

export function Header() {
	const ref = useRef(null)
	const [isLoaded, setIsLoaded] = useState(false)
	const [scrolled, setScrolled] = useState(0)

	useEffect(() => {
		document.addEventListener('scroll', () => {
			if (window.scrollY <= 300) {
				setScrolled(window.scrollY)
			}
		})
		setIsLoaded(true)
		return () => {
			document.removeEventListener('scroll', () => {})
		}
	}, [])
	return (
		<header
			className={`container sticky transition-all duration-1000 top-0 left-0 right-0 z-50 w-full px-0 pt-4 mb-8 ${isLoaded ? 'translate-y-0' : '-translate-y-16'}`}>
			<div className="container flex justify-center">
				<motion.nav
					ref={ref}
					style={{
						position: 'absolute',
						maxWidth: `calc(100% - ${scrolled *2}px)`,
					}}
					className="flex w-full items-center justify-between rounded-full transition-colors">
					<Logo />
					<Navigation />
				</motion.nav>
			</div>
		</header>
	)
}