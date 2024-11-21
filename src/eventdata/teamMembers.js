/**
 * This file contains all the team information for the team section of the index
 */

import { base } from '$app/paths';

let teamMembers = [
	{
		name: 'Samvrit Rao',
		class: '2025',
		years: 3,
		director: true,
		description:
			'Samvrit is a senior at TJHSST and this is his third year on the HackTJ team and he joined after competing in freshman year. He is passionate about the intersection of computer science and biology and likes to pursue translational projects related to infectious and neurological diseases. Along with Hack TJ, he is an avid member of clubs such as TSA, TJ Speech, and German Honor Society.Outside of school he runs a summer stem program for elementary and middle school kids. In his free time, he likes to read, play basketball, and listen to the newest rap album.',
		portraitSrc: `${base}/teamportraits/Samvrit.jpg`,
		order: 1
	},
	{
		name: 'Saanvi Indukuri',
		class: '2025',
		years: 3,
		director: true,
		description:
			'Saanvi is a senior at TJHSST, and she’s excited for her third year on the team. She loves seeing how computer science brings to life so many ideas and ties together to other fields she loves such as biology and astronomy. Other than HackTJ, Saanvi is also involved in Astronomy Club, FPS, Red Cross YTF, and she plays field hockey and lacrosse for TJ.  Outside of school, she loves to read, watch lots and lots of TV, and cook.',
		portraitSrc: `${base}/teamportraits/Saanvi.JPG`,
		order: 2
	},
	{
		name: 'Avni Garg',
		class: '2025',
		years: 3,
		director: false,
		description:
			'Avni is a senior at TJHSST, and this is her third year on the team after competing freshman year in HackTJ 9.0! She hopes to make HackTJ a memorable experience for everyone. Avni enjoys math and computer science, especially in the fields of AI and ML. Aside from HackTJ, she is also part of the Varsity Math Team and Computer Team. In her free time, she likes to bike, read, and play card games.',
		portraitSrc: `${base}/teamportraits/Avni.jpg`,
		order: 3
	},
	{
		name: 'Pratyasa Sinha',
		class: '2025',
		years: 2,
		director: false,
		description:
			'Pratyasa is a senior at TJHSST, and this is her second year on the team after competing in sophomore year! She loves how computer science can be used to innovate and solve problems in different fields, such as medicine and biology. Outside of HackTJ, Pratyasa is involved in FPS and Red Cross YTF. In her free time, she loves to read, bake (especially cookies), and listen to music.',
		portraitSrc: `${base}/teamportraits/Pratyasa.JPG`,
		order: 4
	},
	{
		name: 'Leah Zhang',
		class: '2025',
		years: 1,
		director: false,
		description: 'Leah, a senior at TJHSST, is pumped for her first year on the team after competing on HackTJ 11.0. She loves applying computer science for real-world applications, particularly in creating assistive technology. In her free time, she’s either drawing or doom-scrolling reels.',
		portraitSrc: `${base}/teamportraits/Leah.jpg`,
		order: 5
	},
	{
		name: 'Megan Sawant',
		class: '2025',
		years: 1,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/Megan.jpeg`,
		order: 6
	},
	{
		name: 'Chinmayee Yerraguntla',
		class: '2025',
		years: 1,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/Chinmayee.jpg`,
		order: 7
	},
	{
		name: 'Aanya Gupta',
		class: '2026',
		years: 2,
		director: false,
		description:
			'Aanya is a junior at TJHSST, and this is her second year on the team after competing in HackTJ 10.0! She enjoys finding ways to bridge gaps between computer science and biology, solving problems that impact social good. Outside of HackTJ, she is an active participant in Teknos and Coding Lady Colonials! In her free time, she enjoys baking for her friends, listening to music, and rock climbing.',
		portraitSrc: `${base}/teamportraits/Aanya.jpg`,
		order: 8
	},
	{
		name: 'Medhansh Verma',
		class: '2026',
		years: 1,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/Medhansh.jpg`,
		order: 9
	},
	{
		name: 'Hashmita Nittala',
		class: '2026',
		years: 1,
		director: false,
		description: 'Hashmita is a junior at TJHSST, and she is excited for her first year on the team. She enjoys using her computer science knowledge to solve competitive programming problems and create apps that can help tackle real-world issues. Outside of HackTJ, she is involved in TSA and the Computer Team. In her free time, she enjoys playing basketball, baking, watching TV (especially Suits), and listening to music.',
		portraitSrc: `${base}/teamportraits/Hashmita.jpg`,
		order: 10
	},
	{
		name: 'Shaurya Bisht',
		class: '2027',
		years: 1,
		director: false,
		description: 'Shaurya is a sophomore at TJHSST, and he is excited for his first year on the team after competing in HackTJ 11.0. He is interested in the application of machine learning and gen AI in creating solutions for human flourishing, as well as competitive programming and math. Outside of HackTJ, he is a dedicated member of Varsity Math Team and Computer Team. In his free time, he enjoys playing cricket with friends, spending time with family, and biking.',
		portraitSrc: `${base}/teamportraits/Shaurya.jpg`,
		order: 11
	},
	{
		name: 'Sanya Bhalla',
		class: '2027',
		years: 1,
		director: false,
		description: 'Sanya is a sophomore at TJHSST, and she is excited for her first year on the team after competing in HackTJ 11.0. She is fascinated by the intersection of computer science, particularly artificial intelligence, and its transformative applications in business and engineering. Outside of HackTJ, she is a dedicated member of TSA and Namaste Club. In her free time, she enjoys watching TV, going to the gym, listening to music, and flying planes.',
		portraitSrc: `${base}/teamportraits/Sanya.jpg`,
		order: 12
	},
	{
		name: 'Sidh Jaddu',
		class: '2027',
		years: 1,
		director: false,
		description: 'Sidh is a sophomore at TJHSST and is thrilled for his first year on the team after competing in HackTJ 11.0. He is interested in the applications of machine learning, particularly generative AI, in combating pressing real-world problems like climate change. Outside of HackTJ, he is a member of the Science Olympiad team and an officer and lecturer at Computer Vision club. In his free time, he enjoys hiking on scenic trails all throughout Virginia and exploring the outdoors.',
		portraitSrc: `${base}/teamportraits/Sidh.jpg`,
		order: 13
	},
	{
		name: 'Dhanvinkumar Ganeshkumar',
		class: '2027',
		years: 1,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/Dhanvin.jpg`,
		order: 14
	},
	{
		name: 'Mr. Hannum',
		class: 'sponsor',
		years: 0,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/MrHannum.JPG`,
		order: 15
	},
	{
		name: 'Mr. Kosek',
		class: 'sponsor',
		years: 0,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/MrKosek.JPG`,
		order: 16
	}
];

teamMembers = teamMembers.filter((member) => !member.hidden);
teamMembers.sort((a, b) => a.order - b.order);

export default teamMembers;