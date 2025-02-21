'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Image from 'next/image'
import { Hand } from 'lucide-react'

export default function Hero() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<section className="mb-24">
			<div className="container flex flex-col items-center overflow-x-hidden sm:flex-row gap-8 md:gap-16">
				<div className="relative w-full sm:w-1/3">
					<div className="overflow-hidden rounded-b-full">
						<Image
							src="/persone.jpg"
							priority={true}
							width={406}
							height={541}
							className="transition duration-300 hover:scale-[1.015]"
							alt="Вадим Белинович" />
					</div>
				</div>
				<div className="w-full sm:w-2/3">
					<div
						data-aos="fade"
						data-aos-offset="0"
						data-aos-duration="300"
						data-aos-easing="ease"
						data-aos-delay="0">
						<p className="mb-6 flex items-center gap-2 text-text-primary">
							<span className="wave">
								<Hand
									size={24}
									color="#b5ff6d" />
							</span>
							<span>Здравствуйте! Меня зовут Вадим</span>
						</p>
					</div>
					<h1 className="text-[7.5vw] md:~text-3xl/6xl font-bold mb-6 leading-10">
						Я <span className="text-accent">Fullstack&#8209;разработчик</span><br/>и Web&#8209;дизайнер
					</h1>
					<p className={'text-balance text-base text-secondary'}>
						Я сотрудничаю с компаниями по всему миру, создавая привлекательные и многофункциональные приложения, которые способствуют достижению результатов и целей бизнеса.
					</p>
				</div>
			</div>
		</section>
	)
}