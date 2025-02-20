'use client'

import { Sparkle } from 'lucide-react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AccentTitle from '@/components/ui/AccentTitle'

export default function Experience() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<section className="py-8">
			<div className="container flex flex-col items-center">
				<AccentTitle title={'О себе'}/>
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