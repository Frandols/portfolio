import type { Project } from 'models'

const projects: Project[] = [
	{
		id: 'microblogging-network',
		images: [
			{
				src: '/assets/projects/microblogging-network/1.avif',
				alt: 'Microblogging Network Web Application',
			},
			{
				src: '/assets/projects/microblogging-network/2.avif',
				alt: 'Microblogging Network Web Application',
			},
			{
				src: '/assets/projects/microblogging-network/3.avif',
				alt: 'Microblogging Network Web Application',
			},
			{
				src: '/assets/projects/microblogging-network/4.avif',
				alt: 'Microblogging Network Web Application',
			},
			{
				src: '/assets/projects/microblogging-network/5.avif',
				alt: 'Microblogging Network Web Application',
			},
		],
		title: 'Microblogging Network | NestJS, React, GraphQL, PostgreSQL',
		description:
			'This application is a social network oriented to microblogging. Everyone can make posts and comment posts of other users. A comment works exactly like the parent post does, so we can have infinitely nested posts.',
		feautured: true,
		links: {
			demo: 'https://microblogging-web-application.onrender.com/',
			source: 'https://github.com/Frandols/microblogging-network',
		},
	},
	{
		id: 'users-manager',
		images: [
			{
				src: '/assets/projects/users-manager/1.avif',
				alt: 'Users Manager Web Application',
			},
			{
				src: '/assets/projects/users-manager/2.avif',
				alt: 'Users Manager Network Web Application',
			},
			{
				src: '/assets/projects/users-manager/3.avif',
				alt: 'Users Manager Network Web Application',
			},
			{
				src: '/assets/projects/users-manager/4.avif',
				alt: 'Users Manager Network Web Application',
			},
			{
				src: '/assets/projects/users-manager/5.avif',
				alt: 'Users Manager Network Web Application',
			},
		],
		title: 'Users Manager | Express, React, MongoDB',
		description:
			'This application has a REST API for CRUD operations where you can create, get, edit and delete users. Also, you have a visual interface where you can do all this operations in an easy way.',
		feautured: true,
		links: {
			demo: 'https://users-manager-90y0.onrender.com/',
			source: 'https://github.com/Frandols/users-manager',
		},
	},
	{
		id: 'wazaa',
		images: [
			{
				src: '/assets/projects/wazaa/1.avif',
				alt: 'Real Time Chat Web Application',
			},
			{
				src: '/assets/projects/wazaa/2.avif',
				alt: 'Real Time Chat Web Application',
			},
			{
				src: '/assets/projects/wazaa/3.avif',
				alt: 'Real Time Chat Web Application',
			},
			{
				src: '/assets/projects/wazaa/4.avif',
				alt: 'Real Time Chat Web Application',
			},
			{
				src: '/assets/projects/wazaa/5.avif',
				alt: 'Real Time Chat Web Application',
			},
		],
		title: 'Wazaa | Socket.io, React',
		description:
			'Wazaa is a socket based chat application where you can set your username and join or create rooms to chat with other users.',
		feautured: true,
		links: {
			demo: 'https://wazaa.onrender.com/',
			source: 'https://github.com/Frandols/wazaa',
		},
	},
	{
		id: 'rpg-corrientes',
		images: [
			{
				src: '/assets/projects/rpg-corrientes/1.avif',
				alt: 'RPG Corrientes Website',
			},
			{
				src: '/assets/projects/rpg-corrientes/2.avif',
				alt: 'RPG Corrientes Website',
			},
		],
		title: 'RPG Corrientes | Next, Bootstrap.',
		description:
			'This is a website that I made for a kinesiology center in my city.',
		feautured: false,
		links: {
			demo: 'https://rpgcorrientes.vercel.app/',
			source: 'https://github.com/Frandols/rpgcorrientes',
		},
	},
]

export default projects
