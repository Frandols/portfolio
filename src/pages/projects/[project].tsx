import { Button, Gallery } from 'components'
import { useProject } from 'hooks'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Code, Play } from 'react-feather'
import { ProjectPageStyles as styles } from 'styles'

const ProjectPage: NextPage = () => {
	const { project } = useProject()

	return (
		<section className={styles.project}>
			<Head>
				<title>{project.title} - Francisco De Los Santos | Web Developer</title>
				<meta
					name='description'
					content={project.description}
					key='desc'
				/>
				<meta
					property='og:title'
					content={`${project.title} - Francisco De Los Santos | Web Developer`}
				/>
				<meta
					property='og:description'
					content={project.description}
				/>
				<meta
					property='og:image'
					content={`https://franciscodelossantos.com${project.images[0].src}`}
				/>
				<meta
					property='og:url'
					content='https://franciscodelossantos.com/projects'
				/>
			</Head>
			<Gallery images={project.images} />
			<div className={styles.info}>
				<h1 className={styles.title}>{project.title}</h1>
				<p className={styles.description}>{project.description}</p>
				<div className={styles.buttons}>
					<Link href={project.links.demo}>
						<a
							className={styles.link}
							target='_blank'
							rel='noreferrer'
						>
							<Button variant='primary'>
								Demo <Play size={16} />
							</Button>
						</a>
					</Link>
					<Link href={project.links.source}>
						<a
							className={styles.link}
							target='_blank'
							rel='noreferrer'
						>
							<Button variant='secondary'>
								Source <Code size={16} />
							</Button>
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default ProjectPage
