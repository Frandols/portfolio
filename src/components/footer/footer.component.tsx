import { social } from 'data'
import Link from 'next/link'
import { FC } from 'react'
import styles from './footer.component.module.scss'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.social}>
				{social.map((item) => (
					<li
						key={item.id}
						className={styles.li}
					>
						<Link href={item.link}>
							<a target='_blank'>{item.id}</a>
						</Link>
					</li>
				))}
			</ul>
			<p className={styles.copyright}>
				©{new Date().getFullYear()} Francisco De Los Santos. All rights
				reserved.
			</p>
		</footer>
	)
}

export default Footer
