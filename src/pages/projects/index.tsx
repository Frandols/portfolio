import { List, Section } from 'components'
import { projects } from 'data'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectsPageStyles as styles } from 'styles'

const ProjectsPage: NextPage = () => {
	return (
		<section className={styles.projectsPage}>
			<Head>
				<title>Projects - Francisco De Los Santos | Web Developer</title>
				<meta
					name='description'
					content='Projects that I worked on.'
					key='desc'
				/>
				<meta
					property='og:title'
					content='Projects - Francisco De Los Santos | Web Developer'
				/>
				<meta
					property='og:description'
					content='Projects that I worked on.'
				/>
				<meta
					property='og:image'
					content='https://franciscodelossantos.com/assets/avatar.avif'
				/>
				<meta
					property='og:url'
					content='https://franciscodelossantos.com/projects'
				/>
			</Head>
			<h1>Projects</h1>
			<Section>
				<List
					items={projects.map((project) => ({
						image: project.images[0],
						title: project.title,
						description: project.description,
						link: `/projects/${project.id}`,
					}))}
				/>
			</Section>
		</section>
	)
}

export default ProjectsPage
