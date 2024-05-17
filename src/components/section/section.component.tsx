import { FC, PropsWithChildren } from 'react'
import styles from './section.component.module.scss'

interface SectionProps {
	title?: string
}

const Section: FC<
	PropsWithChildren<SectionProps & Partial<Pick<HTMLElement, 'className'>>>
> = ({ title, children, className = '' }) => {
	return (
		<section className={`${styles.section} ${className}`}>
			{title === undefined ? null : <h2 className={styles.title}>{title}</h2>}
			{children}
		</section>
	)
}

export default Section
