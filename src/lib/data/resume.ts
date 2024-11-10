import { CodeIcon, Github, Globe, HomeIcon, NotebookIcon, Youtube } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import PeerListSvg from '$lib/imgs/peerlist.svg';
import PeerListDarkSvg from '$lib/imgs/peerlist-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

import AtomicImg from '$lib/imgs/atomic.png';
import BuildSpaceImg from '$lib/imgs/buildspace.jpg';
import Gomycode from '$lib/imgs/gomycode.png'


// Your resume data
export let DATA = {
	name: 'Salimdev',
	initials: 'SD',
	url: 'https://github.com/Salimdevv1',
	img: 'https://media.discordapp.net/attachments/1074719448885383260/1305132019260592138/image.png?ex=6731ea69&is=673098e9&hm=bc224a8a87f5e273adad451019341cb63b91a349703eec399111cde7744b6216&=&format=webp&quality=lossless&width=2368&height=1296',
	location: 'Mahdia, Tunisia',
	locationLink: 'https://www.google.com/maps/place/tunisia',
	description:
		'Fullstack Web Developer. I love building things and helping people. Very active on Discord, Signal, Instagram.',
	summary:
		'I’ve been a freelancer for 2 years now and have a large client base for which I make amazing products and solutions. I am passionate about creating and designing delightful experiences through a mix of business to keep customers and users happy with their products and services online.',
	avatarUrl: 'https://images-ext-1.discordapp.net/external/Rwy7oU6Me4r9eyHB7mfhJfs35fSOboYuuQjbtvWxJ_Q/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1072808343657254943/3edec207355311bd79a9bb51b1248e7b.png?format=webp&quality=lossless&width=1296&height=1296',
	skills: [
		'Svelte',
		'Sveltekit',
		'Typescript',
		'Node.js',
		'Python',
		'Go',
		'Docker',
		'Kubernetes',
		'Pocketbase'
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '#', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		email: 'contact@salimdev.online',
		tel: '+123456789',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/Salimdevv1',
				// // icon: Icons.github,
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			Instagram: {
				name: 'Instagram',
				url: 'https://www.instagram.com/slama.saliim/',
				// // icon: Icons.linkedin,
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			X: {
				name: 'X',
				url: 'https://x.com/salim_slam86158',
				// // icon: Icons.x,
				icon: TwitterSvg,
				navbar: true,
				dark_icon: TwitterDarkSvg
			},
			email: {
				name: 'Gmail',
				url: 'mailto:contact@salimdev.online',
				// // icon: Icons.email,
				icon: GmailSvg,
				navbar: true,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: "Afkar's Digial Agency",
			href: 'https://afkars.digital/',
			badges: [],
			location: 'Remote',
			title: 'Principal Web Developer',
			logoUrl: AtomicImg,
			start: 'May 2023',
			end: 'Oct 2022',
			description:
				'Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.'
		},
	],
	education: [
		{
			school: 'Ibn Sina Highschool',
			href: 'https://buildspace.so',
			degree: 's3, s4, sf1, s5',
			logoUrl: BuildSpaceImg,
			start: '2023',
			end: '2024'
		},
		{
			school: 'GoMyCode Certification',
			href: 'https://uwaterloo.ca',
			degree: "Bachelor's Degree of Computer Science (BCS)",
			logoUrl: Gomycode,
			start: 'Jan 2022',
			end: 'Aug 2024'
		},
	],
	projects: [
		{
			title: 'Electronic Games Arena',
			href: 'https://egamesarena.pro/',
			dates: 'Aug 2024 - Sep 2024',
			active: true,
			description:
				"Welcome to EGA , your ultimate destination for competitive gaming! We're thrilled to have you join our vibrant community, where gamers from around the world come together to showcase their skills and passion.",
			technologies: [
				'Svelte',
				'Javascript',
				'Pocketbase',
				'TailwindCSS',
				'Stripe',
			],
			links: [
				{
					type: 'Website',
					href: 'https://egamesarena.pro/',
					// icon: <Icons.globe className="size-3" />,
					icon: Globe
				}
			],
			image: 'https://media.discordapp.net/attachments/1074719448885383260/1305080482878328832/image.png?ex=6731ba6a&is=673068ea&hm=e66017022f8af23689a4026a2de2bc5fc13c222089510c6aa81f7111f78c6c88&=&format=webp&quality=lossless&width=2566&height=1264',
			// video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4'
		},
		{
			title: 'Diversity Sports',
			href: 'https://magicui.design',
			dates: 'June 2023 - Aug 2023',
			active: true,
			description: 'Diversity Sports is a dynamic and forward-thinking sports event company that takes pride in hosting a diverse range of sporting events',
			technologies: [
				'Svelte',
				'Javascript',
				'Pocketbase',
				'TailwindCSS',
				'Stripe',
			],
			links: [
				{
					type: 'Website',
					href: 'https://www.diversitysports.ae/',
					// icon: <Icons.globe className="size-3" />,
					icon: Globe
				},
			],
			image: 'https://images-ext-1.discordapp.net/external/8fbzbWeGJM6BGrMT-supXuqclXP0d7tv4I6rphCeXgo/https/www.diversitysports.ae/assets/images/meta.png?format=webp&quality=lossless&width=1660&height=904',
			// video: 'https://cdn.magicui.design/bento-grid.mp4'
		},
		{
			title: 'Wassimos TV',
			href: 'https://www.wassimos.com/',
			dates: 'April 2023 - May 2023',
			active: true,
			description:
				'a multidimensional individual entrenched in the gaming world who works as a gamer, YouTube content creator, streamer, and skilled business manager. With over 1 million followers on my YouTube channel, I am a well-known figure in the Arab gaming world.',
			technologies: [
				'Svelte',
				'Javascript',
				'Pocketbase',
				'TailwindCSS',
				'Stripe',
				'MySql',
				'Cloudflare Workers'
			],
			links: [
				{
					type: 'Website',
					href: 'https://www.wassimos.com/',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				},
			],
			image: 'https://images-ext-1.discordapp.net/external/qH050P2OlehEs7xxgFfKjkWDmvrTjfx97lYaZtNbhy0/https/www.wassimos.com/assets/images/home/wsm-main.png?format=webp&quality=lossless&width=2366&height=1296',
			// video: 'https://cdn.llm.report/openai-demo.mp4'
		},
		{
			title: 'Ahmed Kharrat',
			href: 'https://www.ahmed-kharrat.com/',
			dates: 'Aug 2024 - aug 2024',
			active: true,
			description:
				'I am Ahmed, a QA Analyst and a game developer based in Canada. Working in the industry of video games has been a real childhood dream since I was young, to achieve this goal I have passed huge challenges like leaving my family and accepting to fight for this dream.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Shadcn UI',
				'Magic UI',
				'Stripe',
				'Cloudflare Workers'
			],
			links: [
				{
					type: 'Website',
					href: 'https://www.ahmed-kharrat.com/',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				}
			],
			image: 'https://images-ext-1.discordapp.net/external/nzQsjBcIEor0pJejxC6X275d_-9J17e5tY6bMf0BbLU/https/www.ahmed-kharrat.com/assets/images/highlight.webp?format=webp&width=2296&height=1296',
			// video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4'
		},
		{
			title: 'M3S Solutions',
			href: 'https://m3s-solutions.com/',
			dates: 'Aug 2024 - aug 2024',
			active: true,
			description:
				"M3S SOLUTIONS, est un cabinet de consulting dédié à l'excellence financière et au développement international. Avec notre expertise approfondie dans les domaines de l'externalisation de la direction administrative et financière ainsi que de l'accompagnement pour le développement à l'export, nous sommes là pour vous aider à atteindre de nouveaux ...",
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Shadcn UI',
				'Magic UI',
				'Stripe',
				'Cloudflare Workers'
			],
			links: [
				{
					type: 'Website',
					href: 'https://m3s-solutions.com/',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				}
			],
			image: 'https://media.discordapp.net/attachments/1074719448885383260/1305090050681208943/image.png?ex=6731c353&is=673071d3&hm=235732013411d380baba6fcf5b22ef179524a0ca23e72db6116d984ae6c5c8eb&=&format=webp&quality=lossless&width=2566&height=1264',
			// video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4'
		},
		{
			title: "Afkar's Digital",
			href: 'https://afkars.digital/',
			dates: 'Aug 2024 - aug 2024',
			active: true,
			description:
				"AFKAR’S DIGITAL est une agence de marketing et digital novatrice, persuadée que chaque entreprise a une histoire unique et puissante à raconter. Notre mission est de faire vivre cette histoire et de la diffuser à travers le monde en concevant des expériences digitales inoubliables et des stratégies percutantes.",
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Shadcn UI',
				'Magic UI',
				'Stripe',
				'Cloudflare Workers'
			],
			links: [
				{
					type: 'Website',
					href: 'https://afkars.digital/',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				}
			],
			image: 'https://media.discordapp.net/attachments/1074719448885383260/1305090331439796255/image.png?ex=6731c396&is=67307216&hm=3a0d4e56f134a7854cb674a49890584412410670ea4e42c9fb2dd948d54b2efe&=&format=webp&quality=lossless&width=2566&height=1264',
			// video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4'
		}
	],
	hackathons: [
		{
			title: 'Hack Western 5',
			dates: 'November 23rd - 25th, 2018',
			location: 'London, Ontario',
			description:
				'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: []
		},
		{
			title: 'Hack The North',
			dates: 'September 14th - 16th, 2018',
			location: 'Waterloo, Ontario',
			description:
				'Developed a mobile application which delivers university campus wide events in real time to all students.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: []
		},
		{
			title: 'FirstNet Public Safety Hackathon',
			dates: 'March 23rd - 24th, 2018',
			location: 'San Francisco, California',
			description:
				'Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.',
			// icon: "public",
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png',
			links: []
		},
		{
			title: 'DeveloperWeek Hackathon',
			dates: 'February 3rd - 4th, 2018',
			location: 'San Francisco, California',
			description:
				'Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg',
			links: [
				{
					title: 'Github',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/cryptotrends/cryptotrends'
				}
			]
		},
		{
			title: 'HackDavis',
			dates: 'January 20th - 21st, 2018',
			location: 'Davis, California',
			description:
				'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
			win: 'Best Data Hack',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
			links: [
				{
					title: 'Devpost',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://devpost.com/software/my6footprint'
				},
				{
					title: 'ML',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/Wallet6/my6footprint-machine-learning'
				},
				{
					title: 'iOS',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/Wallet6/CarbonWallet'
				},
				{
					title: 'Server',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/Wallet6/wallet6-server'
				}
			]
		},
		{
			title: 'ETH Waterloo',
			dates: 'October 13th - 15th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png',
			links: [
				{
					title: 'Organization',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/ethdocnet'
				}
			]
		},
		{
			title: 'Hack The North',
			dates: 'September 15th - 17th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed a virtual reality application allowing users to see themselves in third person.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Streamer Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/justinmichaud/htn2017'
				},
				{
					title: 'Client Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/RTSPClient'
				}
			]
		},
		{
			title: 'Hack The 6ix',
			dates: 'August 26th - 27th, 2017',
			location: 'Toronto, Ontario',
			description:
				'Developed an open platform for people shipping items to same place to combine shipping costs and save money.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/ShareShip/ShareShip'
				},
				{
					title: 'Site',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://share-ship.herokuapp.com/'
				}
			]
		},
		{
			title: 'Stupid Hack Toronto',
			dates: 'July 23rd, 2017',
			location: 'Toronto, Ontario',
			description:
				'Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png',
			links: [
				{
					title: 'Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/nsagirlfriend/nsagirlfriend'
				}
			]
		},
		{
			title: 'Global AI Hackathon - Toronto',
			dates: 'June 23rd - 25th, 2017',
			location: 'Toronto, Ontario',
			description:
				'Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg',
			win: '1st Place Winner',
			links: [
				{
					title: 'Article',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/'
				},
				{
					title: 'Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/TinySamosas/'
				}
			]
		},
		{
			title: 'McGill AI for Social Innovation Hackathon',
			dates: 'June 17th - 18th, 2017',
			location: 'Montreal, Quebec',
			description: 'Developed realtime facial microexpression analyzer using AI',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg',
			links: []
		},
		{
			title: 'Open Source Circular Economy Days Hackathon',
			dates: 'June 10th, 2017',
			location: 'Toronto, Ontario',
			description:
				"Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg',
			win: '1st Place Winner',
			links: [
				{
					title: 'Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/genecis'
				}
			]
		},
		{
			title: "Make School's Student App Competition 2017",
			dates: 'May 19th - 21st, 2017',
			location: 'International',
			description: 'Improved PocketDoc and submitted to online competition',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png',
			win: 'Top 10 Finalist | Honourable Mention',
			links: [
				{
					title: 'Medium Article',
					icon: Github,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a'
				},
				{
					title: 'Devpost',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://devpost.com/software/pocketdoc-react-native'
				},
				{
					title: 'YouTube',
					icon: Youtube,
					// icon: <Icons.youtube className="h-4 w-4" />,
					href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68'
				},
				{
					title: 'Source',
					icon: Github,
					href: 'https://github.com/dillionverma/pocketdoc-react-native'
				}
			]
		},
		{
			title: 'HackMining',
			dates: 'May 12th - 14th, 2017',
			location: 'Toronto, Ontario',
			description: 'Developed neural network to optimize a mining process',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png',
			links: []
		},
		{
			title: 'Waterloo Equithon',
			dates: 'May 5th - 7th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png',
			links: [
				{
					title: 'Devpost',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://devpost.com/software/pocketdoc-react-native'
				},
				{
					title: 'YouTube',
					icon: Youtube,
					// icon: <Icons.youtube className="h-4 w-4" />,
					href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68'
				},
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/pocketdoc-react-native'
				}
			]
		},
		{
			title: 'SpaceApps Waterloo',
			dates: 'April 28th - 30th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png',
			links: [
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/earthwatch'
				}
			]
		},
		{
			title: 'MHacks 9',
			dates: 'March 24th - 26th, 2017',
			location: 'Ann Arbor, Michigan',
			description:
				'Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/threejs-planes'
				}
			]
		},
		{
			title: 'StartHacks I',
			dates: 'March 4th - 5th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png',
			win: '1st Place Winner',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source (Mobile)',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/mattBlackDesign/recipic-ionic'
				},
				{
					title: 'Source (Server)',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/mattBlackDesign/recipic-rails'
				}
			]
		},
		{
			title: 'QHacks II',
			dates: 'February 3rd - 5th, 2017',
			location: 'Kingston, Ontario',
			description: 'Developed a mobile game which enables city-wide manhunt with random lobbies',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source (Mobile)',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/human-huntr-react-native'
				},
				{
					title: 'Source (API)',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/mattBlackDesign/human-huntr-rails'
				}
			]
		},
		{
			title: 'Terrible Hacks V',
			dates: 'November 26th, 2016',
			location: 'Waterloo, Ontario',
			description:
				'Developed a mock of Windows 11 with interesting notifications and functionality',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png',
			links: [
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/justinmichaud/TerribleHacks2016-Windows11'
				}
			]
		},
		{
			title: 'Portal Hackathon',
			dates: 'October 29, 2016',
			location: 'Kingston, Ontario',
			description:
				"Developed an internal widget for uploading assignments using Waterloo's portal app",
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png',
			links: [
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/UWPortalSDK/crowmark'
				}
			]
		}
	]
};
