'use client'

import { Accordion, AccordionItem } from '@szhsin/react-accordion'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AccentTitle from '@/components/ui/AccentTitle'
import Link from 'next/link'
import Image from 'next/image'
import SplitText from '@/SplitText/SplitText'

type Company = {
	name: string
	bgColor: 'bg-white' | 'bg-black'
	typeOfWork: string
	link: string
	image: string
	description: string[]
	dates: string
}

const companies: Company[] = [
	{
		name: 'Биолайн',
		typeOfWork: 'Разработчик сайтов и дизайнер',
		bgColor: 'bg-white',
		link: 'https://bioline.ru/',
		image: '/experience/bioline.svg',
		dates: 'март 2023 - февраль 2025',
		description: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		]
	},
	{
		name: 'Studia 54',
		bgColor: 'bg-black',
		typeOfWork: 'Разработчик сайтов',
		link: 'https://studia-54.com',
		image: '/experience/studia-54.svg',
		dates: 'март 2022 - февраль 2023',
		description: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		]	},
	{
		name: 'Uno agency',
		bgColor: 'bg-black',
		typeOfWork: 'Разработчик сайтов',
		link: 'https://uno-agency.ru/',
		image: '/experience/uno.svg',
		dates: 'июнь 2018 - февраль 2020',
		description: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		]	},
	{
		name: 'Adcombo',
		bgColor: 'bg-white',
		typeOfWork: 'Разработчик сайтов',
		link: 'https://adcombo.com/',
		image: '/experience/adcombo.svg',
		dates: 'октябрь 2016 - апрель 2018',
		description: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		]	},
	{
		name: 'Jumeirah',
		bgColor: 'bg-white',
		typeOfWork: 'Разработчик сайтов',
		link: 'https://www.jumeirah.com',
		image: '/experience/jumeirah.svg',
		dates: 'август 2012 - июль 2014',
		description: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		]
	},
]

export default function Experience() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<section className="mb-32">
			<div className="container flex flex-col gap-12 md:flex-row md:gap-8">
				<div className="top-40 h-fit md:sticky md:w-1/3 flex flex-col gap-4 items-start">
					<div
						data-aos="fade"
						data-aos-offset="0"
						data-aos-duration="300"
						data-aos-easing="ease"
						data-aos-delay="0">
						<AccentTitle title={'карьера'} />
					</div>
					<SplitText
						text="Опыт работы"
						className="text-5xl font-bold !text-left"
						delay={50}
						animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
						animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
						threshold={0.1}
						rootMargin="-50px" />
					<p className='text-secondary'>
						Я работал с некоторыми из самых известных лидеров отрасли, помогая им создавать первоклассные продукты.
					</p>
				</div>
				<div
					className="flex flex-col items-center md:w-2/3"
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
												<h3 className='leading-none'>Веб разработчик</h3>
												<div className={'flex justify-between w-full'}>
													<Link
														className={'text-secondary underline-offset-4 hover:underline'}
														href={company.link}
														target={'_blank'}>
														{company.name}
													</Link>
													<p className="text-secondary text-xs">{company.dates}</p>
												</div>
											</div>
										</div>
									}>
									<ul className={'pl-4 list-disc'}>
										{
											company.description.map((item: string, index) => (

												<li key={index} className="text-secondary">
													<p>{item}</p>
												</li>

											))
										}
									</ul>
								</AccordionItem>
							))
						}
					</Accordion>
				</div>
			</div>
		</section>
	)
}