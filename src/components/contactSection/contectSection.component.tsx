import { Button, Section } from 'components'
import Link from 'next/link'
import { FC } from 'react'
import { Mail } from 'react-feather'
import styles from './contactSection.component.module.scss'

const ContactSection: FC = () => {
	return (
		<Section
			className={styles.contactSection}
			title='Contact'
		>
			<p className={styles.description}>Have something in mind? Let&apos;s get in touch!</p>
			<Link
				href='mailto:frandelosantoss12@gmail.com'
				passHref
			>
				<Button variant='primary'>
					Send me an email <Mail size={16} />
				</Button>
			</Link>
		</Section>
	)
}

export default ContactSection
