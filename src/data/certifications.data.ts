import type { Certification } from 'models'

const certifications: Certification[] = [
	{
		id: 0,
		logo: {
			src: '/assets/certifications/udemy.avif',
			alt: 'Udemy Logo',
		},
		title: 'React Expert | Nicolas Schurmann on Udemy.',
		link: 'https://www.udemy.com/certificate/UC-0f587dfd-f466-4d33-9974-0a23af322630/',
		date: '04/20/2022',
	},
	{
		id: 1,
		logo: {
			src: '/assets/certifications/udemy.avif',
			alt: 'Udemy Logo',
		},
		title: 'JavaScript Expert | Global Mentoring Ing. Ubaldo Acosta on Udemy.',
		link: 'https://www.udemy.com/certificate/UC-861b9df3-ec9b-4901-9faf-075f22ce9edf/',
		date: '09/21/2021',
	},
]

export default certifications
