'use client'

import { Accordion, AccordionItem } from '@szhsin/react-accordion'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AccentTitle from '@/components/ui/AccentTitle'
import Link from 'next/link'
import Image from 'next/image'

type Company = {
	name: string
	bgColor: 'bg-white' | 'bg-black'
	link: string
	image: string
	description: string
	dates: string
}

const companies: Company[] = [
	{
		name: 'Биолайн',
		bgColor: 'bg-white',
		link: 'https://bioline.ru/',
		image: '/experience/bioline.svg',
		dates: 'март 2023 - февраль 2025',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
	{
		name: 'Studia 54',
		bgColor: 'bg-black',
		link: 'https://studia-54.com',
		image: '/experience/studia-54.svg',
		dates: 'март 2022 - февраль 2023',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}
]

export default function Experience() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<section className="mb-24">
			<div className="container flex gap-8">
				<div className="top-40 h-fit md:sticky w-1/3">
					<div
						data-aos="fade"
						data-aos-offset="0"
						data-aos-duration="300"
						data-aos-easing="ease"
						data-aos-delay="0">
						<AccentTitle title={'Опыт работы'} />
					</div>
					<p>Experience</p>
					<p>
						I have worked with some of the most innovative industry leaders to help build their top-notch products.
					</p>
				</div>
				<div
					className="flex flex-col items-center w-2/3"
					data-aos="fade"
					data-aos-offset="0"
					data-aos-duration="300"
					data-aos-easing="ease"
					data-aos-delay="0">
					<Accordion
						className="w-full"
						transition
						transitionTimeout={400}>
						{
							companies.map((company) => (
								<AccordionItem
									className={'pb-4 border-b border-black-700 mb-4 last:mb-0'}
									key={company.name}
									header={
										<div className={'flex gap-x-4 items-start mb-2'}>
											<div className={`logo flex rounded-full w-10 h-10 overflow-hidden ${company.bgColor}`}>
												<Image
													src={company.image}
													alt={company.name}
													width={40}
													height={40} />
											</div>
											<div className="flex flex-col gap-y-1 items-start flex-auto">
												<h3>Веб разработчик</h3>
												<div className={'flex justify-between w-full'}>
													<Link
														className={'text-secondary underline-offset-4 hover:underline'}
														href={company.link}
														target={'_blank'}>
														{company.name}
													</Link>
													<p>{company.dates}</p>
												</div>
											</div>
										</div>
									}>
									<p className={'pl-14'}>
										{company.description}
									</p>
								</AccordionItem>
							))
						}
					</Accordion>
				</div>
			</div>
		</section>
	)
}