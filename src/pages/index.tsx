import emailjs from '@emailjs/browser'
import {
	Button,
	ContactSection,
	Control,
	Form,
	List,
	Section,
} from 'components'
import { certifications, projects } from 'data'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import { HomePageStyles as styles } from 'styles'
import { object, string } from 'yup'

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
			</main>
			<aside className={styles.aside}>
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
