import { base } from '$app/paths';
import mobile from 'svelte-icons/io/IoIosTabletPortrait.svelte'
import best from 'svelte-icons/io/IoIosStar.svelte'
import AIML from 'svelte-icons/io/IoIosWalk.svelte'
import web from 'svelte-icons/md/MdComputer.svelte'
import finance from 'svelte-icons/md/MdAttachMoney.svelte'
import beginner from 'svelte-icons/fa/FaChild.svelte'
import design from 'svelte-icons/io/IoMdFlower.svelte'
import biomedical from 'svelte-icons/io/IoIosMedical.svelte'
import educational from 'svelte-icons/fa/FaChalkboardTeacher.svelte'
import env from 'svelte-icons/fa/FaEnvira.svelte'
import cyber from 'svelte-icons/gi/GiCyberEye.svelte'
import quantum from 'svelte-icons/gi/GiAtom.svelte'
import social from 'svelte-icons/io/IoIosHand.svelte'
import life from 'svelte-icons/gi/GiLifeBar.svelte'

export default [
	{
		title: 'Best Overall Hack',
		description:
			'Watchdog is a security camera that is able to detect a user’s pose and determine if they fell and could be having a health issue such as a seizure, a heart attack, or even a fire, and alert the person’s loved ones and authorities.',
		name: 'WatchDog', 
        picture: `${base}/pastwinners/2024/BestOverallHack.jpg`,
        winners: 'Shaurya Jain, Arjun Babla, Anmol Karan, Ajith Sivakumar',
		icon: best
	},
	{
		title: 'Best AI/ML Hack',
		description:
			"Nutrium uses AI to identify ingredients from images or grocery receipts, recommends recipes based on those ingredients, and calculates personalized caloric intake, while also logging daily calorie consumption.",
		name: 'Nutrium',
        picture: `${base}/pastwinners/2024/BestAIMLHack.jpg`,
        winners: 'Michael Rodriguez, Ryan Ghimire, Syed Raza Haider',
		icon: AIML
	},
	{
		title: 'Best Web Hack',
		description:
			"WeCode is a coding platform offering diverse challenges, competitions, and learning resources, fostering community engagement across multiple programming languages.",
        name: 'WeCode',
        picture: `${base}/pastwinners/2024/BestWebHack.jpg`,
        winners: 'Drew Zauel, Nikhit Rachapudi, Max Weinstein, Eshwar Moorthy',
		icon: web
	},
    {
		title: 'Best Finance Hack',
		description:
			"This simulator predicts credit scores based on eight financial parameters, providing users with personalized advice to improve their creditworthiness.",
        name: 'Credit Score Simulator',
        picture: `${base}/pastwinners/2024/BestFinanceHack.jpg`,
        winners: 'Anika Saraf, Sahil Kapadia, Angelina Richter, Alina Chen',
		icon: finance
	},
    {
		title: 'Best Mobile Hack',
		description:
			"Bites allows users to input key financial parameters to predict future credit scores and receive actionable insights on improving them.",
        name: 'Bites',
        picture: `${base}/pastwinners/2024/BestMobileHack.jpg`,
        winners: 'Arvind Ragunathan, Brij Baghat, Rohan Kalahasty',
		icon: mobile

	},
    {
		title: 'Best Beginner Hack',
		description:
			"Our program uses microphone input to do things like google search, go to websites, scroll, and uses AI head tracking to move the mouse cursor.",
        name: 'Speaksearch',
        picture: `${base}/pastwinners/2024/BestBeginnerHack.jpg`,
        winners: 'Adhiraj Chhoda, Prateek Vadde',
		icon: beginner
	},
    {
		title: 'Best Design Hack',
		description:
			"FIN is a financial stock recommendation app that incorporates a swiping mechanism for users",
        name: 'Fin',
        picture: `na`,
        winners: 'Nivaan Kaushal, Pratham Singh, Armaan Ahmed,Ansh Malhotra',
		icon: design
	},
    {
		title: 'Best Biomedical Hack',
		description:
            "Cost effective and non-invasive at-home diagnosis for hypertension.",
        name: 'Helping Hearts',
        picture: `na`,
        winners: 'Ojas Chaudhary, Noah Kabiri, Alex Nassif, Phong Lam', 
		icon: biomedical
	},
    {
		title: 'Best Education Hack',
		description:
            "Our project aims to detect students that are playing video games on their computers during class time, without looking at their screens. Our web app uses machine learning to identify students who are likely playing video games based on the way they interact with their keyboards.",
        name: 'IntegriKey',
        picture: `na`,
        winners: 'Aneesh Kalla, Abhikurupati', 
		icon: educational
	},
    {
		title: 'Best Environmental Science Hack',
		description:
			"Uses natural language processing to calculate personal carbon emissions based on user input.",
        name: 'Your Carbon Foot',
        picture: `na`,
        winners: 'Maneesh Vaddi, Kevin Su, Rishab Nanduri', 
		icon: env
	},
    {
		title: 'Best Cyber Technology Hack',
		description:
            "Vigilant is a novel alert system that combines Artificial Intelligence with broadcasting systems to minimize search time for a child. using high fidelity Machine Learning models to identify objects at fast speeds, as well as alerting systems to maximize responsiveness and ease of use.",
        name: 'Vigilant',
        picture: `na`,
        winners: 'Deven Hagen, Justin Lee, Alan Zhu', 
		icon: cyber
	},
    {
		title: 'Best Quantum Hack',
		description:
			"Finding the shortest path length of signal transduction pathways, we can help inform research institutions and companies of how these drugs should be designed to most efficiently induce apoptosis in cancerous cells.",
        name: 'Implementing a Pathfinding Heuristic',
        picture: `na`,
        winners: 'Neha Chandran, Kade Yen, Enerel Munkhbaatar', 
		icon: quantum
	},
    {
		title: 'Best Social Impact Hack',
		description:
			"Voice commands paired with the actual head movements allow disabled people to use a computer with ease and increase their accessibility to technology.",
        name: 'Look N Go',
        picture: `na`,
        winners: 'Anurag Perakalapudi, Arnav Gupta, Adarsh Bharadwaj', 
		icon: social
	},
    {
		title: 'Best Lifestyle Hack',
		description:
			"Users can upload PDFs or paste text from documents, and Cider will use a large language model to intelligently analyze the document for any events described and displays them to the user. ",
        name: 'Cider',
        picture: `na`,
        winners: 'Ray Shen, Ken Zhou', 
		icon: life
	},
    
];
