import { ButtonHTMLAttributes, FC } from 'react'
import styles from './button.component.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary'
	disabled?: boolean
}

const Button: FC<ButtonProps> = ({
	variant = 'primary',
	disabled,
	onClick,
	...props
}) => {
	return (
		<button
			className={`${styles.button} ${styles[`button-${variant}`]} ${
				disabled ? styles.buttonDisabled : ''
			}`}
			onClick={disabled ? () => {} : onClick}
			{...props}
		/>
	)
}

export default Button
