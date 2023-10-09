import { social } from 'data'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './header.component.module.scss'

const Header: FC = () => {
	return (
		<nav className={styles.header}>
			<Link href='/'>
				<a className={styles.link}>
					<Image
						src='/assets/logo.svg'
						alt='Francisco De Los Santos Logo'
						width={28}
						height={28}
						unoptimized
					/>
				</a>
			</Link>
			<div className={styles.social}>
				{social.map(({ id, link, logo }) => (
					<Link
						key={id}
						href={link}
					>
						<a target='_blank'>
							<Image
								src={logo.src}
								alt={logo.alt}
								width={28}
								height={28}
								unoptimized
							/>
						</a>
					</Link>
				))}
			</div>
		</nav>
	)
}

export default Header
