'use client'

import { Sparkle } from 'lucide-react'
import { useEffect } from 'react'
import AOS from 'aos'

export default function Experience() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<section className="py-8">
			<div className="container flex">
				<div className="top-40 h-fit md:sticky w-1/3">
					<span
						data-aos="fade"
						data-aos-offset="0"
						data-aos-duration="300"
						data-aos-easing="ease"
						data-aos-delay="0"
						className="aos-init aos-animate">
						<div className="mb-4 flex w-fit items-center gap-2 text-highlight-primary">
							<Sparkle size={18} />
							<span
								className="shimmer word-spacing font-clashDisplay text-sm uppercase leading-none text-highlight-primary">
								Опыт работы
							</span>
						</div>
					</span>
					<p>Experience</p>
					<p>
						I have worked with some of the most innovative industry leaders to help build their top-notch products.
					</p>
				</div>
				<div className="flex flex-col items-center w-2/3">
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>
					<p className="mb-10">много опыта</p>

				</div>
			</div>
		</section>
	)
}