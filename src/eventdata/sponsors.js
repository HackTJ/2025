/**
 * This file contains all the sponsor information for the sponsor section of the index
 */

import { base } from '$app/paths';

const sponsors = {
	platinum: [],
	gold: [
		{
			src: `${base}/sponsorlogos/eda.png`,
			alt: 'EDA Logo',
			href: 'https://fairfaxcountyeda.org/'
		},
		{
			src: `${base}/sponsorlogos/eduavenues.png`,
			alt: 'Eduavenues Logo',
			href: 'https://www.eduavenues.com/'
		},
		{
			src: `${base}/sponsorlogos/roam.png`,
			alt: 'Roam Logo',
			href: 'https://ro.am/'
		}
	],
	silver: [
		{
			src: `${base}/sponsorlogos/Appian-Logo_White.png`,
			alt: 'Appian Logo',
			href: 'https://www.appian.com/'
		},
		{
			src: `${base}/sponsorlogos/janestreet.png`,
			alt: 'Jane Street Logo',
			href: 'https://www.janestreet.com/'
		}
	],
	bronze: [
		{
			src: `${base}/sponsorlogos/FTech.png`,
			alt: 'Future Technology Logo',
			href: 'https://ftechi.com/'
		},
		{
			src: `${base}/sponsorlogos/teoco.png`,
			alt: 'TEOCO Logo',
			href: 'https://www.teoco.com/'
		},
		{
			src: `${base}/sponsorlogos/otis-logo.png`,
			alt: 'Otis Logo',
			href: 'https://www.otis.com/'
		}
	],
	partners: [
		{
			src: `${base}/sponsorlogos/cvent.png`,
			alt: 'Cvent Logo',
			href: 'https://www.cvent.com/'
		},
		{
			src: `${base}/sponsorlogos/tjpf.png`,
			alt: 'TJ Partnership Fund Logo',
			href: 'https://www.tjpartnershipfund.org/'
		}
	]
};

const platinumTierData = {
	title: 'PLATINUM TIER',
	bg: 'bg-[#C9D4E5]',
	cards: sponsors.platinum
};
const goldTierData = {
	title: 'GOLD TIER',
	bg: 'bg-[#D6B570]',
	cards: sponsors.gold
};
const silverTierData = {
	title: 'SILVER TIER',
	bg: 'bg-zinc-400',
	cards: sponsors.silver
};
const bronzeTierData = {
	title: 'BRONZE TIER',
	bg: 'bg-[#AF7A6D]',
	cards: sponsors.bronze
};
const prizeTierData = {
	title: 'PRIZE TIER',
	bg: 'bg-[#DEDBD2]',
	cards: sponsors.prize
};
const partnershipData = {
	title: 'PARTNERS',
	bg: 'bg-spruce-200',
	cards: sponsors.partners
};
const sponsorData = [
	partnershipData,
	platinumTierData,
	goldTierData,
	silverTierData,
	bronzeTierData,
	prizeTierData,
];

export default sponsorData;
