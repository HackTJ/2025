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
		portraitSrc: `${base}/teamportraits/Samvrit.JPG`,
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
		portraitSrc: `${base}/teamportraits/Avni.JPG`,
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
		description: '',
		portraitSrc: `${base}/teamportraits/blank.JPG`,
		order: 5
	},
	{
		name: 'Megan Sawant',
		class: '2025',
		years: 1,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/blank.png`,
		order: 6
	},
	{
		name: 'Chinmayee Yerraguntla',
		class: '2025',
		years: 1,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/blank.png`,
		order: 7
	},
	{
		name: 'Aanya Gupta',
		class: '2026',
		years: 2,
		director: false,
		description:
			'Aanya is a junior at TJHSST, and this is her second year on the team after competing in HackTJ 10.0! She enjoys finding ways to bridge gaps between computer science and biology, solving problems that impact social good. Outside of HackTJ, she is an active participant in the Bioinformatics club, Teknos, and Coding Lady Colonials! In her free time, she enjoys baking for her friends, listening to music, and rock climbing.',
		portraitSrc: `${base}/teamportraits/Aanya.JPG`,
		order: 8
	},
	{
		name: 'Medhansh Verma',
		class: '2026',
		years: 1,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/blank.png`,
		order: 9
	},
	{
		name: 'Hashmita Nittala',
		class: '2026',
		years: 1,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/blank.png`,
		order: 10
	},
	{
		name: 'Shaurya Bisht',
		class: '2027',
		years: 1,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/blank.png`,
		order: 11
	},
	{
		name: 'Sanya Bhalla',
		class: '2027',
		years: 1,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/blank.png`,
		order: 12
	},
	{
		name: 'Sidh Jaddu',
		class: '2027',
		years: 1,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/blank.png`,
		order: 13
	},
	{
		name: 'Dhanvinkumar Ganeshkumar',
		class: '2027',
		years: 1,
		director: false,
		description: '',
		portraitSrc: `${base}/teamportraits/blank.png`,
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