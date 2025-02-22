'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AccentTitle from '@/components/ui/AccentTitle'
import Image from 'next/image'
import { Accordion, AccordionItem } from '@szhsin/react-accordion'
import { ChevronDown } from 'lucide-react'
import SplitText from '@/SplitText/SplitText'

type Speciality = {
	id: number
	icon: string
	name: string
	description: string
	image: string
}

const specialities: Speciality[] = [
	{
		id: 1,
		icon: 'CodeXml',
		name: 'Frontend',
		description: 'lorem10	lorem10	lorem10	lorem10	lorem10	lorem10	lorem10	',
		image: '/specialities/development.webp'
	},
	{
		id: 2,
		icon: 'CodeXml',
		name: 'Backend',
		description: 'lorem10	lorem10	lorem10	lorem10	lorem10	',
		image: '/specialities/app1.jpg'
	},
	{
		id: 3,
		icon: 'CodeXml',
		name: 'Web Design',
		description: 'lorem10	lorem10	lorem10	lorem10	lorem10	',
		image: '/specialities/design.webp'
	}
]

export default function Experience() {
	const [activeTab, setActiveTab] = useState(1)

	function handleTabClick(id: number) {
		setActiveTab(id)
	}

	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<section className="mb-32">
			<div className="container flex sm:gap-x-16">
				<div className={'flex flex-col basis-1/2 items-start gap-4'}>
					<AccentTitle title={'Моя специализация'} />
					<SplitText
						text="Экспертные навыки"
						className="text-5xl font-bold mb-8"
						delay={50}
						animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
						animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
						threshold={0.1}
						rootMargin="-50px" />
					<div className="flex flex-col items-center w-full">
						<Accordion
							className="w-full"
							transition
							transitionTimeout={400}>
							{
								specialities.map((speciality: Speciality) => (
									<AccordionItem
										onClick={() => handleTabClick(speciality.id)}
										className={'flex flex-col mb-4 p-4 rounded-2xl border border-black-700 bg-black-800 last:mb-0'}
										key={speciality.name}
										header={
											<div
												data-aos="fade"
												data-aos-offset="0"
												data-aos-duration="300"
												data-aos-easing="ease"
												data-aos-delay="0"
												className={'flex gap-2'}>
												<div>
													O
												</div>
												<div className="flex flex-auto">
													<h3>{speciality.name}</h3>
												</div>
												<ChevronDown width={24} height={24} />
											</div>
										}>
										<p className={'pt-4 text-secondary'}>
											{speciality.description}
										</p>
									</AccordionItem>
								))
							}
						</Accordion>
					</div>
				</div>
				<div className={'basis-1/2 group relative aspect-video h-full w-full overflow-hidden rounded-3xl bg-black-800'}>
					{specialities.map((speciality: Speciality) => (
						<Image
							className={`absolute top-0 left-0 h-full w-full transition duration-300 group-hover:scale-[1.015]`}
							alt={speciality.name}
							key={speciality.name}
							src={speciality.image}
							loading={'lazy'}
							width={0}
							height={0}
							sizes="100vw"
							style={{
								opacity: activeTab === speciality.id ? 1 : 0,
								width: '100%',
								height: '100%',
								objectFit: 'cover'
							}}
						/>
					))}
				</div>
			</div>
		</section>
	)
}