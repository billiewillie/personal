'use client'

import { Sparkle } from 'lucide-react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Experience() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<section className="py-8">
			<div className="container flex flex-col items-center">
				<div className="mb-4 flex w-fit items-center gap-2 text-accent">
					<Sparkle size={18} />
					<span
						className="shimmer word-spacing font-clashDisplay text-sm uppercase leading-none text-highlight-primary">
					Обо мне
					</span>
				</div>
				<div
					data-aos="fade"
					data-aos-offset="0"
					data-aos-delay="200"
					data-aos-duration="300"
					data-aos-easing="ease"
					data-aos-once="true">
					<p className="text-center text-2xl">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias delectus dicta dolorem esse eveniet
						fugit harum impedit labore nam natus nobis, obcaecati officiis quia, quos saepe soluta veritatis vero
					</p>
				</div>
			</div>
		</section>
	)
}