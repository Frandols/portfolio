import { Button, Gallery } from 'components'
import { useProject } from 'hooks'
import { NextPage } from 'next'
import Link from 'next/link'
import { Code, Play } from 'react-feather'
import { ProjectPageStyles as styles } from 'styles'

const ProjectPage: NextPage = () => {
	const { project } = useProject()

	return (
		<section className={styles.project}>
			<Gallery images={project.images} />
			<div className={styles.info}>
				<h1 className={styles.title}>{project.title}</h1>
				<p className={styles.description}>{project.description}</p>
				<div className={styles.buttons}>
					<Button variant='primary'>
						<Link href={project.links.demo}>
							<a
								className={styles.link}
								target='_blank'
								rel='noreferrer'
							>
								Demo <Play size={16} />
							</a>
						</Link>
					</Button>
					<Button variant='secondary'>
						<Link href={project.links.source}>
							<a
								className={styles.link}
								target='_blank'
								rel='noreferrer'
							>
								Source <Code size={16} />
							</a>
						</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}

export default ProjectPage
