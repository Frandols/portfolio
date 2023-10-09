import { ListItem } from 'components'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { ListItemProps } from '../listItem/listItem.component'
import styles from './list.component.module.scss'

interface ListProps extends Pick<ListItemProps, 'variant'> {
	items: Pick<ListItemProps, 'image' | 'title' | 'description' | 'link'>[]
}

const List: FC<ListProps> = ({ items, variant = 'primary' }) => {
	return (
		<motion.ul
			className={`${styles.list} ${styles[`list-${variant}`]}`}
			initial='hidden'
			animate='visible'
			transition={{ staggerChildren: 0.125 }}
		>
			{items.map((item, index) => (
				<ListItem
					key={index}
					{...item}
					variant={variant}
				/>
			))}
		</motion.ul>
	)
}

export default List
