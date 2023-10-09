export default interface Project {
	id: string
	images: {
		src: string
		alt: string
	}[]
	title: string
	description: string
	feautured: boolean
	links: {
		demo: string
		source: string
	}
}
