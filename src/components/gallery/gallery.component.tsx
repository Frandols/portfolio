import type { Project } from 'models'
import Image from 'next/image'
import { FC, useState } from 'react'
import styles from './gallery.component.module.scss'

interface GalleryProps {
	images: Project['images']
}

const Gallery: FC<GalleryProps> = ({ images }) => {
	const [selectedImage, setSelectedImage] = useState<number>(0)

	return (
		<div className={styles.gallery}>
			<div className={styles.selectedImage}>
				<Image
					src={images[selectedImage].src}
					alt={images[selectedImage].alt}
					layout='fill'
					objectFit='contain'
					priority
				/>
			</div>
			<ul className={styles.images}>
				{images.map((image, i) => (
					<div
						key={i}
						className={`${styles.image} ${
							selectedImage === i ? styles.imageSelected : ''
						}`}
						onClick={() => setSelectedImage(i)}
					>
						<Image
							src={image.src}
							alt={image.alt}
							width={48}
							height={48}
							objectFit='cover'
						/>
					</div>
				))}
			</ul>
		</div>
	)
}

export default Gallery
