import { writable } from 'svelte/store';
export const Events = writable([
	{
		name: 'Software Development',
		description:
			'  We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.',
		list: [
			'Software consulting',
			'Custom software development',
			'Software development outsourcing',
			'Software product development',
			'Team augmentation',
			'Cloud application development',
			'Legacy software modernization'
		]
	},
	{
		name: 'Testing & QA',
		description:
			'We perform end-to-end testing of mobile, web and desktop application at each stage of the development lifecycle.',
		list: [
			'QA outsourcing',
			'QA consulting',
			'security_testing',
			'Functional testing',
			'Usability_testjng',
			'Performance testing',
			'Test automation'
		]
	},
	{
		name: 'Application Services',
		description:
			'Our experts help mid-sized and large firms build, test, protect, manage, migrate and optimize digital solutions ensuring they’re always up and running and achieve the optimal TCO.',
		list: [
			'Application management',
			'Application modernization',
			'Application integration',
			'Application security services',
			'Application development',
			'Application testing',
			'Application maintenance and support'
		]
	},
	{
		name: 'UX/UI Design',
		description:
			'We combine the latest UI/UX trends with our customers’ individual goals and needs to deliver intuitive, vibrant, and impactful designs that power up businesses.',
		list: [
			'User Interface (UII) Design',
			'Responsive Web App Design',
			'Software-as-as-Service (SaaS) UI Design',
			'Ecommerce Website Design',
			'User Experience (UX) Design',
			'Website Redesign',
			'Responsive Web Design'
		]
	},
	{
		name: 'IT Consulting',
		description:
			'Our experts can help to develop and implement an effective IT strategy, assist in smooth digital transformation and system integration as well as advise on improvements to your digital customer experience.',
		list: [
			'Digital Transformation Consulting',
			'Project Management Consulting',
			'Digital Crisis Management Consulting',
			'IT Service Management Consulting',
			'Solution consulting',
			'Platform consulting',
			'Enterprise IT consulting'
		]
	},
	{
		name: 'Data Analytics',
		description:
			'Our services are tailored to make the raw data and the environment ready, as well as strengthen the business with advanced analytics capabilities.',
		list: [
			'Business Intelligence',
			'dig Data',
			'Data Warehousing',
			'Data Science',
			'Data Management',
			'Machine and Deep Learning',
			'Data Analytics as a Service'
		]
	},
	{
		name: 'Help Desk Services',
		description:
			'We take on solving diverse issues from answering application functionality questions to performing fixes and enhancements on the code level for improved adoption of software, its smooth functioning and increased end user satisfaction.',
		list: [
			'Help desk outsourcing',
			'IT help desk services',
			'Outsourced help desk for MSP',
			'NOC outsourcing'
		]
	},
	{
		name: 'Infrastructure Services',
		description:
			'We apply our experience to offer a full set of infrastructure services. Being ISO 27001 certified, we guarantee that cooperation with us does not pose any risks to our customers’ data security.',
		list: [
			'Managed IT support',
			'Data center support and management',
			'Cloud consulting and management',
			'DevOps consulting and implementation',
			'Virtual desktop consulting, implementation and',
			'support',
			'Networking management services'
		]
	},
	{
		name: 'Cybersecurity Services',
		description:
			'Equipped with 20-year experience in information security and employing ISO 27001 certified information security management practices, we help to achieve the robust protection of the companies’ applications and networks.',
		list: [
			'Security assessment',
			'Managed security-services',
			'Security testing',
			'Information security consulting',
			'Security code review',
			'Compliance assessment',
			'Penetration testing'
		]
	}
]);
export const OtherServicesNames = [
	'Big Data',
	'Artificial Intelligence',
	'Computer Vision',
	'Internet Of Things',
	'Blockchain',
	'Mixed Reality'
];
export const OtherServices = writable([
	{
		name: 'SERVICE WE OFFER:',
		description:
			'  Tame your big data through robust solutions that empower data collection, storage, processing and analysis.',
		list: [
			'Consulting and implementation',
			'Support and evolution',
			'Data governance',
			'Data security'
		]
	},
	{
		name: 'SELECTED AI TECHNOLOGIES WE MASTER:',
		description:
			' Improve decision-making, planning and forecasting and revamp business processes with AI and ML technologies simulating human intelligence.',
		list: [
			'Machine learning (including deep learning)',
			'Robotics',
			'Natural language processing',
			'Image recognition'
		]
	},
	{
		name: 'SELECTED SOLUTIONS:',
		description: ' Derive actionable insights from images and videos.',
		list: [
			'Detection of visual defects and anomalies',
			'Recognition of item location and positioning',
			'Barcode verification and validation',
			'3D modelling and mapping'
		]
	},
	{
		name: 'SERVICE WE OFFER:',
		description: 'Collect, store, analyze sensor data and build ‘smart’ operations.',
		list: ['IoT consulting', 'IoT solution deployment', 'IoT analytics']
	},
	{
		name: 'SERVICES WE OFFER:',
		description:
			'Get solutions for enhanced traceability, security and faster processing of data and transactions.',
		list: [
			'Blockchain-based product development for product companies',
			'Blockchain consulting and implementation for non-IT enterprises'
		]
	},
	{
		name: 'SERVICES WE OFFER:',
		description:
			'Blur the line between the digital and real worlds to make regular tasks and activities easier, safer, and more engaging.',
		list: ['Virtual Reality development', 'Augmented Reality development']
	}
]);