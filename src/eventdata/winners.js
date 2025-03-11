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

export const winners2024 = [
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

export const winners2025 = [
	{
		title: 'Best Overall Hack',
		description:
			'AlgoRhythm is an innovative digital audio workstation designed to empower beginner songwriters with intuitive music composition tools. Users can sing melodies, which are then transformed into various instrumental notes, while AI enhances their creations.',
		name: 'AlgoRhythm', 
		picture: `${base}/pastwinners/2025/overall2025winner.jpg`,
		winners: 'Abraham Agbota, Ryan Ghimire, Justin Ma, Arjun Babla',
		icon: best
	},
	{
		title: 'Best Mobile Hack',
		description:
			'SeachParty enables users to create and join search parties for missing persons with real-time collaboration, live location tracking, and heatmaps of searched areas to prevent redundancy.',
		name: 'SeachParty',
		picture: `${base}/pastwinners/2025/mobile2025winner.jpg`,
		winners: 'Aryan Gadre, Kanishk Sivanandam, Chetan Maviti, Adarsh Bharadwaj',
		icon: mobile
	},
	{
		title: 'Best AI/ML Hack',
		description:
			'SafeScape offers tailored experiences for civilians and first responders, with features for emergency reporting, 3D environment models, AR-guided navigation to exits, and direct communication channels.',
		name: 'SafeScape',
		picture: `${base}/pastwinners/2025/aiml2025winner.jpg`,
		winners: 'Ansh Malhotra, Nivaan Kaushal, Pratham Singh, Armaan Ahmed',
		icon: AIML
	},
	{
		title: 'Best Web Hack',
		description:
			'QuantumFold models proteins and calculates solutions faster than existing classical algorithms using quantum computing and AlphaFold to balance high accuracy and speed.',
		name: 'QuantumFold',
		picture: `${base}/pastwinners/2025/web2025winner.jpg`,
		winners: 'Deven Hagen, Justin Lee, Alan Zhu',
		icon: web
	},
	{
		title: 'Best Quantum Hack',
		description:
			'Enhanced MRI diagnostics using quantum computing to process medical images, performing edge detection, frequency domain filtering, and quantum amplitude encoding to highlight regions of interest.',
		name: 'Quantum Enhanced MRI Diagnostics',
		picture: `${base}/pastwinners/2025/quantum2025winner.jpg`,
		winners: 'Kashi Kamat, Sarvani Vemuri, Surbhi Singla',
		icon: quantum
	},
	{
		title: 'Best Finance Hack',
		description:
			'Circa allows users to barter and rent different items, utilizing blockchain technology to make barters as accessible as possible.',
		name: 'Circa',
		picture: `${base}/pastwinners/2025/finance2025winner.jpg`,
		winners: 'Maneesh Vaddi, Agastya Sondhi, Arjun Chitla, Adhiraj Chhoda',
		icon: finance
	},
	{
		title: 'Best Lifestyle Hack',
		description:
			'PinPoint helps you quickly locate sections of videos relevant to your queries, for rewatching tutorials, reviewing security footage, and setting up cameras to detect specific events.',
		name: 'PinPoint',
		picture: `${base}/pastwinners/2025/lifestyle2025winner.jpg`,
		winners: 'Soham Jain, Shaurya Jain, Anmol Karan, Jason Hao',
		icon: life
	},
	{
		title: 'Best Cyber Technology Hack',
		description:
			'Deepfake Detector is a Chrome extension that analyzes images and videos directly on any webpage to check whether media content is AI-generated or manipulated.',
		name: 'DeepShield',
		picture: `${base}/pastwinners/2025/cyber2025winner.JPG`,
		winners: 'Rohan Honganoor, Amogh Katiki, Andrew Chen, Jayden Yang',
		icon: cyber
	},
	{
		title: 'Best Biomedical Hack',
		description:
			'RDD uses audio pattern recognition to determine tuberculosis likelihood and includes a camera component to detect Parkinson\'s disease and other conditions.',
		name: 'RDD: Respiratory Disease Detection',
		picture: `${base}/pastwinners/2025/biomed2025winner.jpg`,
		winners: 'Luv, Anush, Sanjeev, Saatvik',
		icon: biomedical
	},
	{
		title: 'Best Environmental Science Hack',
		description:
			'Retro Rower is a rowing simulator where you take the role of the coxswain/coach, building the best team of rowers to collect as much trash as possible.',
		name: 'Retro Rower',
		picture: `${base}/pastwinners/2025/env2025winner.jpg`,
		winners: 'Darwin Goldstein, Daniil Prokofev, Christoph Knaeble',
		icon: env
	},
	{
		title: 'Best Beginner Hack',
		description:
			'AP romance personifies the AP classes and teaches the user a bit more about each one.',
		name: 'AP romance',
		picture: `${base}/pastwinners/2025/beginner2025winner.jpg`,
		winners: 'Nathalie Hatchuel, Sohana bahl, Fay Amirullah',
		icon: beginner
	},
	{
		title: 'Best Use of ROAM AI Agent',
		description:
			'CyberGuard scrapes the web to find leaked passwords/emails, uses blockchain contracts for validation, scans networks for vulnerabilities, and includes a chatbot for cybersecurity decisions.',
		name: 'CyberGuard',
		picture: `${base}/pastwinners/2025/roam2025winner.JPG`,
		winners: 'Shiv Davay, Aahan Sachdeva, Parthiv Maddipatla, Svaran Medavarapu',
		icon: cyber
	},
	{
		title: 'Vishnu Murthy Foundation Best Social Impact',
		description:
			'Jot It addresses the problem of doctors\' poor handwriting when prescribing medication and diagnosis.',
		name: 'Jot It',
		picture: `${base}/pastwinners/2025/social2025winner.jpg`,
		winners: 'Sophia Huang, Jacob Dipasupil, Avery Li, Ipek Sayar',
		icon: social
	}
];

export default winners2024;
