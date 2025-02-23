'use client'

import { BrainCircuit, PenLine, PencilRuler, CodeXml, ShieldCheck } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AccentTitle from '@/components/ui/AccentTitle'
import SplitText from '@/SplitText/SplitText'
import { motion, useScroll } from 'motion/react'

export default function Experience() {
	const [progress, setProgress] = useState(0)
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['120% end', 'start 40%']
	})

	document.addEventListener('scroll', () => {
		setProgress(scrollYProgress.get())
	})

	useEffect(() => {
		AOS.init()
	})
	return (
		<section className="mb-32">
			<div className="container">
				<div className="flex flex-col items-start gap-4 mb-8">
					<AccentTitle title={'Как создается сайт'} />
					<SplitText
						text="Мой процесс работы"
						className="text-5xl font-bold"
						delay={30}
						animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
						animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
						threshold={0.1}
						rootMargin="-50px" />
					<p className={'text-secondary'}>
						Мой процесс создания сайта можно разделить на несколько ступеней.
					</p>
				</div>
				<div className="h-[400px] relative">
					<div className="relative h-[200px] overflow-hidden">
						<motion.div
							ref={ref}
							style={{
								position: 'absolute',
								x: -progress * 300,
							}}
							className="left-0 top-0 flex gap-4">
							{
								[1, 2, 3, 4, 5].map((_, index) => (
									<div
										className="w-full rounded-3xl border border-bg-700 p-6 min-w-[300px]"
										key={index}>
										<p>
											To create something awesome, one must first talk about the details. Planning is essential.
										</p>
									</div>
								))
							}
						</motion.div>
						{/*<motion.div*/}
						{/*	id="carouselList"*/}
						{/*	className="flex gap-4 items-stretch transition-transform duration-300">*/}
						{/*	<div className="w-full rounded-3xl border border-bg-700 p-6 min-w-[300px]">*/}
						{/*		<div*/}
						{/*			data-aos="fade"*/}
						{/*			data-aos-offset="0"*/}
						{/*			data-aos-duration="300"*/}
						{/*			data-aos-easing="ease"*/}
						{/*			data-aos-delay="0">*/}
						{/*			<div className="mb-4 w-fit rounded-full border border-bg-600 bg-bg-700 p-4 text-accent">*/}
						{/*				<BrainCircuit size={18} />*/}
						{/*			</div>*/}
						{/*		</div>*/}
						{/*		<div*/}
						{/*			data-aos="fade"*/}
						{/*			data-aos-offset="0"*/}
						{/*			data-aos-duration="300"*/}
						{/*			data-aos-easing="ease"*/}
						{/*			data-aos-delay="200">*/}
						{/*			<h5 className="mb-2">01. Стратегия</h5>*/}
						{/*		</div>*/}
						{/*		<div*/}
						{/*			data-aos="fade"*/}
						{/*			data-aos-offset="0"*/}
						{/*			data-aos-duration="300"*/}
						{/*			data-aos-easing="ease"*/}
						{/*			data-aos-delay="400">*/}
						{/*			<p>*/}
						{/*				To create something awesome, one must first talk about the details. Planning is essential.*/}
						{/*			</p>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*	<div className="w-full rounded-3xl border border-bg-700 p-6 min-w-[300px]">*/}
						{/*		<div*/}
						{/*			data-aos="fade"*/}
						{/*			data-aos-offset="0"*/}
						{/*			data-aos-duration="300"*/}
						{/*			data-aos-easing="ease"*/}
						{/*			data-aos-delay="0">*/}
						{/*			<div*/}
						{/*				className="mb-4 w-fit rounded-full border border-bg-600 bg-bg-700 p-4 text-accent">*/}
						{/*				<PenLine size={18} />*/}
						{/*			</div>*/}
						{/*		</div>*/}
						{/*		<div*/}
						{/*			data-aos="fade"*/}
						{/*			data-aos-offset="0"*/}
						{/*			data-aos-duration="300"*/}
						{/*			data-aos-easing="ease"*/}
						{/*			data-aos-delay="200">*/}
						{/*			<h5 className="mb-2 font-satoshi">02. Wireframe</h5>*/}
						{/*		</div>*/}
						{/*		<div*/}
						{/*			data-aos="fade"*/}
						{/*			data-aos-offset="0"*/}
						{/*			data-aos-duration="300"*/}
						{/*			data-aos-easing="ease"*/}
						{/*			data-aos-delay="400">*/}
						{/*			<p>*/}
						{/*				After hashing out the details of the website, easy to throw the ideas onto pen &amp; paper.*/}
						{/*			</p>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*	<div className="w-full rounded-3xl border border-bg-700 p-6 min-w-[300px]">*/}
						{/*		<div*/}
						{/*			data-aos="fade"*/}
						{/*			data-aos-offset="0"*/}
						{/*			data-aos-duration="300"*/}
						{/*			data-aos-easing="ease"*/}
						{/*			data-aos-delay="0">*/}
						{/*			<div*/}
						{/*				className="mb-4 w-fit rounded-full border border-bg-600 bg-bg-700 p-4 text-accent">*/}
						{/*				<PencilRuler size={18} />*/}
						{/*			</div>*/}
						{/*		</div>*/}
						{/*		<div*/}
						{/*			data-aos="fade"*/}
						{/*			data-aos-offset="0"*/}
						{/*			data-aos-duration="300"*/}
						{/*			data-aos-easing="ease"*/}
						{/*			data-aos-delay="200">*/}
						{/*			<h5 className="mb-2 font-satoshi">03. Дизайн</h5>*/}
						{/*		</div>*/}
						{/*		<div*/}
						{/*			data-aos="fade"*/}
						{/*			data-aos-offset="0"*/}
						{/*			data-aos-duration="300"*/}
						{/*			data-aos-easing="ease"*/}
						{/*			data-aos-delay="400">*/}
						{/*			<p>*/}
						{/*				The most fun part of all - adding to the and bring it to life.*/}
						{/*			</p>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*	<div className="w-full rounded-3xl border border-bg-700 p-6 min-w-[300px]">*/}
						{/*		<div*/}
						{/*			data-aos="fade"*/}
						{/*			data-aos-offset="0"*/}
						{/*			data-aos-duration="300"*/}
						{/*			data-aos-easing="ease"*/}
						{/*			data-aos-delay="0">*/}
						{/*			<div*/}
						{/*				className="mb-4 w-fit rounded-full border border-bg-600 bg-bg-700 p-4 text-accent">*/}
						{/*				<CodeXml size={18} />*/}
						{/*			</div>*/}
						{/*		</div>*/}
						{/*		<div*/}
						{/*			data-aos="fade"*/}
						{/*			data-aos-offset="0"*/}
						{/*			data-aos-duration="300"*/}
						{/*			data-aos-easing="ease"*/}
						{/*			data-aos-delay="200">*/}
						{/*			<h5 className="mb-2 font-satoshi">*/}
						{/*				04. Разработка*/}
						{/*			</h5>*/}
						{/*		</div>*/}
						{/*		<div*/}
						{/*			data-aos="fade"*/}
						{/*			data-aos-offset="0"*/}
						{/*			data-aos-duration="300"*/}
						{/*			data-aos-easing="ease"*/}
						{/*			data-aos-delay="400">*/}
						{/*			<p>*/}
						{/*				The design may be final but it needs to be functional and practical. Development is key.*/}
						{/*			</p>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*	<div className="w-full rounded-3xl border border-bg-700 p-6 min-w-[300px]">*/}
						{/*		<div*/}
						{/*			data-aos="fade"*/}
						{/*			data-aos-offset="0"*/}
						{/*			data-aos-duration="300"*/}
						{/*			data-aos-easing="ease"*/}
						{/*			data-aos-delay="0">*/}
						{/*			<div className="mb-4 w-fit rounded-full border border-bg-600 bg-bg-700 p-4 text-accent">*/}
						{/*				<ShieldCheck size={18} />*/}
						{/*			</div>*/}
						{/*		</div>*/}
						{/*		<div*/}
						{/*			data-aos="fade"*/}
						{/*			data-aos-offset="0"*/}
						{/*			data-aos-duration="300"*/}
						{/*			data-aos-easing="ease"*/}
						{/*			data-aos-delay="200">*/}
						{/*			<h5 className="mb-2 font-satoshi">05. Проверка качества</h5>*/}
						{/*		</div>*/}
						{/*		<div*/}
						{/*			data-aos="fade"*/}
						{/*			data-aos-offset="0"*/}
						{/*			data-aos-duration="300"*/}
						{/*			data-aos-easing="ease"*/}
						{/*			data-aos-delay="400">*/}
						{/*			<p>*/}
						{/*				Website load times, SEO, file optimization, etc., weigh in to the quality of the site.*/}
						{/*			</p>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*</motion.div>*/}
					</div>
				</div>
			</div>
		</section>
	)
}