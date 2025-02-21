'use client'

import { BrainCircuit, PenLine, PencilRuler, CodeXml, ShieldCheck } from 'lucide-react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AccentTitle from '@/components/ui/AccentTitle'

export default function Experience() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<section className="mb-24">
			<div className="container">

				<div>
					<AccentTitle title={'Как создается дизайн'} />
					<h2>Мой процесс работы</h2>
					<p>
						I have worked with some of the most innovative industry leaders to help build their top-notch products.
					</p>
				</div>
				<div
					className="sticky top-0 mx-auto mt-8 flex w-full flex-col items-start justify-center overflow-hidden">
					<div className="flex gap-4">
						<div className="w-full rounded-3xl border border-bg-700 p-6 min-w-[300px]">
							<div data-aos="fade"
									 data-aos-offset="0"
									 data-aos-duration="300"
									 data-aos-easing="ease"
									 data-aos-delay="0">
								<div className="mb-4 w-fit rounded-full border border-bg-600 bg-bg-700 p-4 text-accent">
									<BrainCircuit size={18} />
								</div>
							</div>
							<div
								data-aos="fade"
								data-aos-offset="0"
								data-aos-duration="300"
								data-aos-easing="ease"
								data-aos-delay="200">
								<h5 className="mb-2">01. Стратегия</h5>
							</div>
							<div
								data-aos="fade"
								data-aos-offset="0"
								data-aos-duration="300"
								data-aos-easing="ease"
								data-aos-delay="400">
								<p>
									To create something awesome, one must first talk about the details. Planning is essential.
								</p>
							</div>
						</div>
						<div className="w-full rounded-3xl border border-bg-700 p-6 min-w-[300px]">
							<div data-aos="fade"
									 data-aos-offset="0"
									 data-aos-duration="300"
									 data-aos-easing="ease"
									 data-aos-delay="0">
								<div
									className="mb-4 w-fit rounded-full border border-bg-600 bg-bg-700 p-4 text-accent">
									<PenLine size={18} />
								</div>
							</div>
							<div data-aos="fade"
									 data-aos-offset="0"
									 data-aos-duration="300"
									 data-aos-easing="ease"
									 data-aos-delay="200">
								<h5 className="mb-2 font-satoshi">02. Wireframe</h5>
							</div>
							<div data-aos="fade"
									 data-aos-offset="0"
									 data-aos-duration="300"
									 data-aos-easing="ease"
									 data-aos-delay="400">
								<p>
									After hashing out the details of the website, it's easy to throw the ideas onto pen &amp; paper.
								</p>
							</div>
						</div>
						<div className="w-full rounded-3xl border border-bg-700 p-6 min-w-[300px]">
							<div data-aos="fade"
									 data-aos-offset="0"
									 data-aos-duration="300"
									 data-aos-easing="ease"
									 data-aos-delay="0">
								<div
									className="mb-4 w-fit rounded-full border border-bg-600 bg-bg-700 p-4 text-accent">
									<PencilRuler size={18} />
								</div>
							</div>
							<div
								data-aos="fade"
								data-aos-offset="0"
								data-aos-duration="300"
								data-aos-easing="ease"
								data-aos-delay="200">
								<h5 className="mb-2 font-satoshi">03. Дизайн</h5>
							</div>
							<div
								data-aos="fade"
								data-aos-offset="0"
								data-aos-duration="300"
								data-aos-easing="ease"
								data-aos-delay="400">
								<p>
									The most fun part of all - adding pizzaz to the wirefreames and bring it to life.
								</p>
							</div>
						</div>
						<div className="w-full rounded-3xl border border-bg-700 p-6 min-w-[300px]">
							<div data-aos="fade"
									 data-aos-offset="0"
									 data-aos-duration="300"
									 data-aos-easing="ease"
									 data-aos-delay="0">
								<div
									className="mb-4 w-fit rounded-full border border-bg-600 bg-bg-700 p-4 text-accent">
									<CodeXml size={18} />
								</div>
							</div>
							<div data-aos="fade"
									 data-aos-offset="0"
									 data-aos-duration="300"
									 data-aos-easing="ease"
									 data-aos-delay="200">
								<h5 className="mb-2 font-satoshi">04. Разработка</h5>
							</div>
							<div data-aos="fade"
									 data-aos-offset="0"
									 data-aos-duration="300"
									 data-aos-easing="ease"
									 data-aos-delay="400">
								<p>
									The design may be final but it needs to be functional and practical. Development is key.
								</p>
							</div>
						</div>
						<div className="w-full rounded-3xl border border-bg-700 p-6 min-w-[300px]">
							<div data-aos="fade"
									 data-aos-offset="0"
									 data-aos-duration="300"
									 data-aos-easing="ease"
									 data-aos-delay="0">
								<div className="mb-4 w-fit rounded-full border border-bg-600 bg-bg-700 p-4 text-accent">
									<ShieldCheck size={18} />
								</div>
							</div>
							<div data-aos="fade"
									 data-aos-offset="0"
									 data-aos-duration="300"
									 data-aos-easing="ease"
									 data-aos-delay="200">
								<h5 className="mb-2 font-satoshi">05. Проверка качества</h5>
							</div>
							<div data-aos="fade"
									 data-aos-offset="0"
									 data-aos-duration="300"
									 data-aos-easing="ease"
									 data-aos-delay="400">
								<p>
									Website load times, SEO, file optimization, etc., weigh in to the quality of the site.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}