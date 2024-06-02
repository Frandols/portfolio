import Head from 'next/head'
import styles from 'styles/pages/experience.module.scss'

const ExperiencePage = () => {
	return (
		<section className={styles.experiencePage}>
			<Head>
				<title>Experience - Francisco De Los Santos | Web Developer</title>
				<meta
					name='description'
					content='How I started working as a web developer and the progress I made.'
					key='desc'
				/>
				<meta
					property='og:title'
					content='Experience - Francisco De Los Santos | Web Developer'
				/>
				<meta
					property='og:description'
					content='How I started working as a web developer and the progress I made.'
				/>
				<meta
					property='og:image'
					content='https://franciscodelossantos.com/assets/avatar.avif'
				/>
				<meta
					property='og:url'
					content='https://franciscodelossantos.com/experience'
				/>
			</Head>
			<h1>Experience</h1>
			<div className={styles.item}>
				<h2 className={styles.title}>
					<u>How I started</u>
				</h2>
				<p className={styles.description}>
					I started working on my own projects and applying the newest
					technologies to them, also learning concepts that are used in real
					life to communicate apps and manage data.
				</p>
			</div>
			<div className={styles.item}>
				<h2 className={styles.title}>
					<u>My first work</u> as a freelancer
				</h2>
				<p className={styles.description}>
					I wanted to work as a freelancer for clients in Upwork, so I started
					postulating for different jobs, after some postulations, I was offered
					to work on this project <b>&quot;Ranked Results Quiz Tool&quot;</b> I
					postulated for this job just having the experience of working on my
					own apps and this was the first time that I was developing an
					application for a client. This client asked for an application where
					users can resolve a quiz and then they get a ranked list of results
					based on their selections.
				</p>
			</div>
			<div className={styles.item}>
				<h2 className={styles.title}>
					Working at <u>El Dorado Research Group</u>
				</h2>
				<p className={styles.description}>
					Working at <b>El Dorado Research Group</b> was definetely a step for
					me. My previous experience to this was working as a freelancer to a
					client, and now I was working with other developers in different apps
					with different goals to achieve. I learned a lot of things during my
					time working here and I&apos;m very grateful with the team for how
					they treated me, they are very good people.
				</p>
			</div>
		</section>
	)
}

export default ExperiencePage
