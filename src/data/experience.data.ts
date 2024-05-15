import { Experience } from 'models'

const experience: Experience[] = [
	{
		title: 'El Dorado Research Group | Web Developer',
		period: 'November 2023 - April 2024',
		link: 'https://edrgr.com',
		logo: {
			src: 'assets/experience/edrgr.avif',
			alt: 'El Dorado Research Group Logo',
		},
		positions: [],
	},
	{
		title: 'Upwork Freelance | Freelancer Web Developer',
		period: 'Worked on these projects during these periods:',
		link: 'https://www.upwork.com/freelancers/~0152beea25154149fa',
		logo: {
			src: 'assets/experience/upwork.avif',
			alt: 'Upwork logo',
		},
		positions: [
			{
				title: 'Ranked Results Quiz Tool',
				started: 'January 2022',
				ended: 'August 2022',
				link: 'https://www.upwork.com/jobs/~010e2b65f0c547aad9',
				rating: 5,
			},
		],
	},
]

export default experience
