import { ContactSection, List, Section } from 'components'
import { certifications, education, experience, projects } from 'data'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowDownTray } from 'react-icons/hi2'
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
						<h2 className={styles.subtitle}>Web Developer</h2>
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
						<a className={styles.link}>See all</a>
					</Link>
				</Section>
				<Section title='Experience'>
					<List
						items={experience.map((experience) => ({
							title: experience.title,
							description: experience.period,
							link: experience.link,
							image: experience.logo,
						}))}
						variant='secondary'
					/>
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

export default HomePage
