import { FieldInputProps, useField } from 'formik'

import { FC } from 'react'
import styles from './control.component.module.scss'

const Control: FC<FieldInputProps<any>> = (props) => {
	const [field, meta] = useField(props)

	return (
		<div className={styles.control}>
			<input
				className={styles.input}
				id={props.name}
				placeholder=' '
				{...field}
				{...props}
			/>
			<label
				className={styles.label}
				htmlFor={props.name}
			>
				{props.name}
			</label>
			{meta.touched && meta.error && (
				<p className={styles.error}>{meta.error}</p>
			)}
		</div>
	)
}

export default Control
