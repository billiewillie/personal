import AccentTitle from '@/components/ui/AccentTitle'
import Link from 'next/link'
import Image from 'next/image'

type Project = {
	name: string
	image: string
	link: string
	bgColor: string
	bgCover?: boolean
	year: number,
	typeOfWork: string
}

const projects: Project[] = [
	{
		name: 'Кировский завод',
		image: '/projects/kirovski-zavod.jpg',
		link: '/projects/1',
		bgColor: 'bg-[#122858]',
		year: 2021,
		typeOfWork: 'Разработка сайта'
	},
	{
		name: 'York Fresh',
		image: '/projects/york-fresh.jpg',
		link: '/projects/2',
		bgColor: 'bg-[#ffffff]',
		year: 2020,
		typeOfWork: 'Разработка и дизайн'
	},
	{
		name: 'Jumeirah',
		image: '/projects/jumeirah.jpg',
		link: '/projects/3',
		bgColor: 'bg-[#fff]',
		bgCover: true,
		year: 2018,
		typeOfWork: 'Разработка сайта'
	},
	{
		name: 'Labvision',
		image: '/projects/labvision.jpg',
		link: '/projects/4',
		bgColor: 'bg-[#000000]',
		bgCover: false,
		year: 2024,
		typeOfWork: 'Разработка сайта и дизайн'
	}
]

export default function Projects() {
	return (
		<section className="mb-24">
			<div className="container">
				<div className={'mb-8'}>
					<AccentTitle title={'Мои работы'} />
					<h2>Projects</h2>
					<p>
						curated selection showcasing my expertise and the achieved results.
					</p>
				</div>
				<div
					className={'opacity-container grid grid-cols-1 grid-rows-[masonry] gap-y-10 py-md sm:grid-cols-2 sm:gap-x-16 sm:gap-y-0'}>
					{
						projects.map((project: Project) => (
							<div
								className={'opacity-container-child group h-fit w-full cursor-pointer even:sm:mt-14'}
								key={project.name}>
								<Link href={project.link}>
									<div
										data-aos="fade"
										data-aos-offset="0"
										data-aos-duration="300"
										data-aos-easing="ease"
										data-aos-delay="0">
										<div className={`aspect-3/2 w-full object-center overflow-hidden rounded-3xl ${project.bgColor}`}>
											<Image
												className={'transition duration-300 group-hover:scale-[1.015]'}
												alt={project.name}
												src={project.image}
												width={0}
												height={0}
												sizes="100vw"
												style={{
													width: '100%',
													height: '100%',
													objectFit: `${project.bgCover ? 'cover' : 'contain'}`
												}} />
										</div>
									</div>
									<div
										data-aos="fade"
										data-aos-offset="0"
										data-aos-duration="300"
										data-aos-easing="ease"
										data-aos-delay="200">
										<div className="mt-4 space-y-2">
											<h5>{project.name}</h5>
											<div className="flex justify-between">
												<div className="flex flex-wrap gap-2">
													<p className="text-sm text-text-secondary">{project.typeOfWork}</p></div>
												<p className="text-sm text-text-secondary">{project.year}</p></div>
										</div>
									</div>
								</Link>
							</div>
						))
					}
				</div>
				<div
					className={'flex justify-center'}
					data-aos="fade"
					data-aos-offset="0"
					data-aos-duration="300"
					data-aos-easing="ease"
					data-aos-delay="0">
					<Link href="/projects">projects</Link>
				</div>
			</div>
		</section>
	)
}