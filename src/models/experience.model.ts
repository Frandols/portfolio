export default interface Experience {
	title: string
	period: string
	link: string
	logo: {
		src: string
		alt: string
	}
	positions: {
		title: string
		started: string
		ended: string
		link: string
		rating?: number
	}[]
}
