import { List, Section } from 'components'
import { projects } from 'data'
import type { NextPage } from 'next'
import { ProjectsPageStyles as styles } from 'styles'

const ProjectsPage: NextPage = () => {
	return (
		<section className={styles.projectsPage}>
			<Section title='Projects'>
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
