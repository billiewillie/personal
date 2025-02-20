'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<section className="py-8">
			<div className="container flex flex-col items-center overflow-x-hidden sm:flex-row gap-8 md:gap-16">
				<div className="relative w-full sm:w-1/3">
					<div className="overflow-hidden rounded-b-full">
						<Image
							src="/persone.jpg"
							priority={true}
							width={406}
							height={541}
							alt="Вадим Белинович" />
					</div>
				</div>
				<div className="w-full sm:w-2/3">
					<div
						data-aos="fade"
						data-aos-offset="0"
						data-aos-duration="300"
						data-aos-easing="ease"
						data-aos-delay="0"
						className="aos-init aos-animate">
						<p className="mb-8 flex items-center gap-2 text-text-primary">
						<span className="wave">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-hand text-highlight-primary">
								<path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
								<path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
								<path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
								<path
									d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
							</svg>
						</span>
							<span>Привет! Меня зовут Вадим</span>
						</p>
					</div>
					<h1 className="text-3xl font-bold">A <span className="text-accent">creative developer</span> & digital
						designer</h1>
					<p>
						I collaborate with brands globally to design impactful, mission-focused websites that drive results and
						achieve business goals.
					</p>
				</div>
			</div>
		</section>
	)
}