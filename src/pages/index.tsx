import { ContactSection, List, Section } from 'components'
import { certifications, education, experience, projects } from 'data'
import { Experience } from 'models'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { HiArrowDownTray, HiArrowRight, HiStar } from 'react-icons/hi2'
import { HomePageStyles as styles } from 'styles'

const HomePage: NextPage = () => {
	return (
		<section className={styles.homePage}>
			<main className={styles.main}>
				<section className={styles.presentation}>
					<Image
						src='/assets/avatar.avif'
						alt='Francisco De Los Santos'
						width={56}
						height={56}
						objectFit='cover'
						style={{ borderRadius: '50%' }}
					/>
					<div className={styles.body}>
						<h1 className={styles.title}>Francisco De Los Santos</h1>
						<h2 className={styles.subtitle}>
							<b className={styles.bold}>Web developer.</b> 1 year of
							experience.
						</h2>
					</div>
					<button
						className={styles.downloadCV}
						title='Download CV'
					>
						<a
							className={styles.link}
							href='/assets/CV_FranciscoDeLosSantos.pdf'
							download
						>
							CV
							<HiArrowDownTray
								size={16}
								strokeWidth={1}
								color='var(--primary)'
							/>
						</a>
					</button>
				</section>
				<Section title='Experience'>
					<List
						items={experience.map((experience) => ({
							title: experience.title,
							description: experience.period,
							link: experience.link,
							image: experience.logo,
							children:
								experience.positions.length > 0
									? experience.positions.map((position) => {
											return (
												<Position
													key={`${experience.title}-${position.title}`}
													{...position}
												/>
											)
									  })
									: null,
						}))}
						variant='secondary'
					/>
					<Link href='/experience'>
						<a className={styles.link}>
							Read more about my experience! <HiArrowRight strokeWidth={2} />
						</a>
					</Link>
				</Section>
				<Section title='Feautured projects'>
					<List
						items={projects
							.filter((project) => project.feautured)
							.map((project) => ({
								image: project.images[0],
								title: project.title,
								description: project.description,
								link: `/projects/${project.id}`,
							}))}
						variant={'secondary'}
					/>
					<Link href='/projects'>
						<a className={styles.link}>
							See all ({projects.length}) <HiArrowRight strokeWidth={2} />
						</a>
					</Link>
				</Section>
			</main>
			<aside className={styles.aside}>
				<Section title='Education'>
					<List
						items={education.map((education) => ({
							title: education.title,
							description: education.period,
							link: '/',
							image: education.logo,
						}))}
						variant='secondary'
					/>
				</Section>
				<Section title='Certifications'>
					<List
						items={certifications.map((certification) => ({
							image: certification.logo,
							title: certification.title,
							description: certification.date,
							link: certification.link,
						}))}
						variant='secondary'
					/>
				</Section>
				<ContactSection />
			</aside>
		</section>
	)
}

const Position: FC<Experience['positions'][number]> = ({
	title,
	started,
	ended,
	link,
	rating,
}) => {
	return (
		<div className={styles.position}>
			<div className={styles.connector}>
				<div className={styles.top}></div>
				<div className={styles.bottom}></div>
			</div>
			<a
				className={styles.body}
				href={link}
				target='_blank'
				rel='noreferrer'
			>
				<h1
					className={styles.title}
					title={title}
				>
					{title}
				</h1>
				<p className={styles.description}>
					{started} - {ended}
				</p>
			</a>
			{rating === undefined ? null : (
				<div className={styles.rating}>
					<p className={styles.count}>{rating}</p>{' '}
					<HiStar
						size={20}
						color='#debe1a'
					/>
				</div>
			)}
		</div>
	)
}

export default HomePage
