import emailjs from '@emailjs/browser'
import { Button, Control, Form, Section } from 'components'
import { FC, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { object, string } from 'yup'
import styles from './contactSection.component.module.scss'

const ContactSection: FC = () => {
	const [submitting, setSubmitting] = useState<boolean>(false)

	return (
		<Section
			className={styles.contactSection}
			title='Contact'
		>
			<Form
				initialValues={{
					name: '',
					email: '',
					message: '',
				}}
				validationSchema={object({
					name: string().required('Name required.'),
					email: string()
						.email('Email must be valid.')
						.required('Email required.'),
					message: string().required('Message required.'),
				})}
				onSubmit={(values, form) => {
					setSubmitting(true)

					const emailSubmission = emailjs
						.send(
							process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
							process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
							values,
							process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
						)
						.then(() => {
							form.resetForm()
						})
						.finally(() => {
							setSubmitting(false)
						})

					toast.promise(emailSubmission, {
						loading: 'Sending...',
						success: 'Message sent succesfully!',
						error: 'An error ocurred, try later.',
					})
				}}
			>
				<Control name='name' />
				<Control name='email' />
				<Control name='message' />
				<Button
					type='submit'
					variant='primary'
					disabled={submitting}
				>
					Get in touch
				</Button>
			</Form>
			<Toaster
				toastOptions={{
					style: {
						borderRadius: '1rem',
						border: '1.75px solid #e2e2e2',
						boxShadow: 'none',
					},
				}}
			/>
		</Section>
	)
}

export default ContactSection
