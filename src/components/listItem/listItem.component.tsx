import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { FC, PropsWithChildren, ReactNode } from 'react'
import styles from './listItem.component.module.scss'

const variants = {
	listItem: {
		visible: {
			y: 0,
			opacity: 1,
		},
		hidden: {
			y: 50,
			opacity: 0,
		},
	},
}

export interface ListItemProps {
	image: {
		src: string
		alt: string
	}
	title: string
	description: string
	link: string
	variant?: 'primary' | 'secondary'
	children?: ReactNode
}

const ListItem: FC<ListItemProps> = ({
	image,
	title,
	description,
	link,
	variant = 'primary',
	children,
}) => {
	return (
		<motion.li
			className={`${styles.listItem} ${styles[`listItem-${variant}`]}`}
			variants={variants.listItem}
			transition={{
				type: 'spring',
				bounce: 0.4,
				duration: 0.8,
			}}
		>
			<Link href={link}>
				<a
					className={styles.link}
					target={link.includes('https://') ? '_blank' : '_self'}
					rel='noreferrer'
				>
					<Image
						className={styles.image}
						src={image.src}
						alt={image.alt}
						width={variant === 'secondary' ? 64 : 224}
						height={variant === 'secondary' ? 64 : 128}
						unoptimized
						objectFit='cover'
					/>
					<div className={styles.body}>
						<h3
							className={styles.title}
							title={title}
						>
							{title}
						</h3>
						<p className={styles.description}>{description}</p>
					</div>
				</a>
			</Link>
			{children === undefined ? null : (
				<div className={styles.extra}>{children}</div>
			)}
		</motion.li>
	)
}

export default ListItem
