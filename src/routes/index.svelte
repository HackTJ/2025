<script>
	import { base } from '$app/paths';

	import TeamMember from '../components/Index/TeamMember.svelte';
	import SponsorsReel from '../components/Index/SponsorsReel.svelte';
	import GoogleMap from '../components/Index/GoogleMap.svelte';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
	import CloseButton from '../components/Index/CloseButton.svelte';
	// import AboutCard from '../components/Index/AboutCard.svelte';
	import Modal from 'svelte-simple-modal';
	import { event, location, registration } from '../constants';
	import { sponsorData, teamMembers } from '../eventdata';
	import { googleMapsKey } from '../keys';

	const navItems = [
		{ text: 'About', href: '#about' },
		{ text: 'Sponsors', href: '#sponsors' },
		{ text: 'Team', href: '#team' },
		{ text: 'Location', href: '#location' },
		{
			text: 'FAQ',
			href: `${base}/faq`,
			button: { class: 'bg-[#A2CEF1] hover:bg-[#83BDEC]' }
		},
		{
			text: 'Schedule',
			href: `${base}/schedule`,
			button: { class: 'bg-[#8EADF6] hover:bg-[#6892F3]' }
		},
		{
			text: 'Resources',
			href: `${base}/resources`,
			button: { class: 'bg-blueberry-200 hover:bg-blueberry-300' }
		},
		{
			text: 'Past Winners',
			href: `${base}/winners`,
			button: { class: 'bg-spruce-200 hover:bg-spruce-300' }
		}
	];
</script>

<svelte:head>
	<script defer async src="https://maps.googleapis.com/maps/api/js?key={googleMapsKey}">
	</script>
</svelte:head>

<Navbar {navItems} />
<!-- <a
	id="mlh-trust-badge"
	style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000"
	href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
	target="_blank"
	><img
		src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
		alt="Major League Hacking 2025 Hackathon Season"
		style="width:100%"
	/></a
> -->
<!-- Home screen -->
<div class="h-[calc(100vh_-_8rem)] min-h-[512px]">
	<div
		class="flex justify-start lg:justify-around items-center mt-18 px-8 md:px-12 h-[calc(100%_-_8rem)]"
	>
		<div class="flex flex-col">
			<img alt="TJHSST Dome" src="{base}/dome.svg" class="block lg:hidden mb-3 w-24 h-24" />
			<div class="text-white font-bold text-6xl md:text-8xl">
				HackTJ
				<!-- TODO: `Overpass Mono`: -->
				<sup
					class="text-3xl md:text-4xl font-mono align-super"
					style="color: rgba(161,206,241,255);">{event.iteration}</sup
				>
			</div>
			<h3 class="text-white font-medium text-xl md:text-2xl w-3/4">
				<span class="text-[#A7D0F1] font-bold">March 8-9, Cvent</span>
				<br />
				Build the next greatest thing - oh, and bring your friends along too.
			</h3>
			<div class="flex flex-col md:flex-row mt-6 space-y-3 md:space-y-0 space-x-0 md:space-x-3">
				{#if registration.isOpen}
					<a
						href="{base}/register"
						class="block text-center py-3 bg-[#83BDEC] hover:bg-theme-200 text-blueberry-800 text-xl font-bold rounded-2xl px-8"
						>&emsp;Register&emsp;</a
					>
				{/if}
				<a
					href="{base}/schedule"
					class="block text-center py-3 bg-[rgba(161,206,241,255)] hover:bg-[#83BDEC] text-blueberry-800 text-xl font-bold rounded-2xl px-8"
					>Schedule</a
				>
			</div>
		</div>
		<img alt="TJHSST Dome" src="{base}/dome.svg" class="hidden lg:flex self-end max-h-full" />
	</div>
	<div class="w-full absolute bottom-0 lg:w-auto lg:relative">
		<div class="hidden lg:block">
			<svg
				class="-mt-1 mb-2 md:mb-6"
				viewBox="0 0 1440 61"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="-326" width="599" height="61" rx="30.5" fill="#B8F1EF" />
				<path
					d="M321 30.5C321 13.6553 334.655 0 351.5 0H1441V61H351.5C334.655 61 321 47.3447 321 30.5V30.5Z"
					fill="#a2cef1"
				/>
			</svg>
			<svg class="mb-6" viewBox="0 0 1440 61" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="-323" width="470" height="61" rx="30.5" fill="#F3F7F0" />
				<rect x="195" width="271" height="61" rx="30.5" fill="#B8DBD9" />
				<rect x="514" width="458" height="61" rx="30.5" fill="#6AB4B0" />
				<rect x="1020" width="599" height="61" rx="30.5" fill="#799bb6" />
			</svg>
		</div>
	</div>
</div>

<!-- About Section -->
<section class="mt-8 p-8 md:p-12 text-blueberry-200" id="about">
	<h1 class="text-4xl md:text-6xl lg:text-7xl font-black">
		Welcome to the Future Generation of <span class="text-[#A7D0F1]">Coders</span>
	</h1>
	<div class="flex flex-col lg:flex-row mt-4 text-lg space-y-8 lg:space-y-0 lg:space-x-8">
		<p class="flex-1">
			Do you get excited watching your ideas come to life? Ever wanted to build the next Snapchat or
			create an Amazon Alexa skill? Program a drone? Create programs using the latest machine
			learning or virtual reality technology? Come to HackTJ to make new friends, build mind-blowing
			projects, attend workshops to learn new tricks, and have a fantastic time!
		</p>
		<p class="flex-1">
			HackTJ is a student-run hackathon where you will have 24 hours to learn how to code and/or
			work with your friends to make your idea come to life. HackTJ is open to any and all current
			high school students. If you're not a high school student but would like to attend, consider
			coming as a judge, mentor, or volunteer.
		</p>
	</div>
	<div class="flex flex-col md:flex-row mt-6 space-y-3 md:space-y-0 space-x-0 md:space-x-3">
		<a
			href="{base}/faq"
			class="block text-center py-3 bg-[#A7D0F1] hover:bg-[#83BDEC] text-blueberry-800 text-xl font-bold rounded-2xl px-8"
			>FAQ</a
		>
		<a
			href="{base}/resources"
			class="block text-center py-3 bg-blueberry-200 text-blueberry-800 text-xl font-bold rounded-2xl px-8 hover:bg-blueberry-300"
			>Beginner Resources</a
		>
	</div>
	<!-- <div class="flex flex-col lg:flex-row mt-12 w-full space-y-6 lg:space-x-6 lg:space-y-0">
		<div class="flex flex-col w-full h-full space-y-6">
			<AboutCard title={"Education"} bg="bg-spruce-200">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper elementum sapien ut imperdiet. Vivamus eu risus a nunc vestibulum mollis. Nulla ac tincidunt mi, ut mollis arcu. Sed congue sagittis bibendum. Donec leo nibh, sagittis at mauris ut, egestas porta eros. Fusce purus risus, tristique rhoncus metus vel, scelerisque condimentum ex. Etiam malesuada leo eget erat ornare, eu malesuada arcu aliquam. In hac habitasse platea dictumst. Nulla laoreet, ex sit amet efficitur egestas, est orci laoreet massa, at viverra turpis elit vitae mauris. Praesent eleifend nibh eget est elementum, id vestibulum urna vestibulum.
			</AboutCard>
			<AboutCard title={"Hardware"} bg="bg-white">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper elementum sapien ut imperdiet. Vivamus eu risus a nunc vestibulum mollis. Nulla ac tincidunt mi, ut mollis arcu. Sed congue sagittis bibendum. Donec leo nibh, sagittis at mauris ut, egestas porta eros. Fusce purus risus, tristique rhoncus metus vel, scelerisque condimentum ex. Etiam malesuada leo eget erat ornare, eu malesuada arcu aliquam. In hac habitasse platea dictumst. Nulla laoreet, ex sit amet efficitur egestas, est orci laoreet massa, at viverra turpis elit vitae mauris. Praesent eleifend nibh eget est elementum, id vestibulum urna vestibulum.
			</AboutCard>
		</div>
		<div class="flex flex-col w-full h-full space-y-6">
			<AboutCard title={"Health"} bg="bg-strawberry-200">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper elementum sapien ut imperdiet. Vivamus eu risus a nunc vestibulum mollis. Nulla ac tincidunt mi, ut mollis arcu. Sed congue sagittis bibendum. Donec leo nibh, sagittis at mauris ut, egestas porta eros. Fusce purus risus, tristique rhoncus metus vel, scelerisque condimentum ex. Etiam malesuada leo eget erat ornare, eu malesuada arcu aliquam. In hac habitasse platea dictumst. Nulla laoreet, ex sit amet efficitur egestas, est orci laoreet massa, at viverra turpis elit vitae mauris. Praesent eleifend nibh eget est elementum, id vestibulum urna vestibulum.
			</AboutCard>
			<AboutCard title={"Other"}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper elementum sapien ut imperdiet. Vivamus eu risus a nunc vestibulum mollis. Nulla ac tincidunt mi, ut mollis arcu. Sed congue sagittis bibendum. Donec leo nibh, sagittis at mauris ut, egestas porta eros. Fusce purus risus, tristique rhoncus metus vel, scelerisque condimentum ex. Etiam malesuada leo eget erat ornare, eu malesuada arcu aliquam. In hac habitasse platea dictumst. Nulla laoreet, ex sit amet efficitur egestas, est orci laoreet massa, at viverra turpis elit vitae mauris. Praesent eleifend nibh eget est elementum, id vestibulum urna vestibulum.
			</AboutCard>
		</div>
	</div> -->
</section>

<!-- Sponsors Reel -->
<section class="mt-6 text-blueberry-200" id="sponsors">
	<div class="p-8 md:p-12">
		<h1 class="text-4xl md:text-6xl font-black text-white">Sponsors</h1>
		<h3 class="mt-2 text-xl md:text-2xl font-bold text-blueberry-200">
			Interested in sponsoring? Check out our <a
				class="underline text-[#A7D0F1] hover:text-[#83BDEC]"
				href="{base}/{event.sponsorshipPacket}"
				target="_blank">{event.iteration} sponsorship packet</a
			>
			or email us at
			<a class="underline text-[#A7D0F1] hover:text-[#83BDEC]" href="mailto:sponsor@hacktj.org"
				>sponsor@hacktj.org</a
			> if you're interested or have any questions!
		</h3>
	</div>
	{#each sponsorData as { bg, cards, title }}
		<SponsorsReel {bg} cardsData={cards} {title} />
	{/each}
</section>

<!-- Meet the team -->
<section class="mt-6 text-blueberry-200 p-8 md:p-12" id="team">
	<h1 class="text-4xl md:text-6xl font-black text-white">Meet The Team</h1>
	<h3 class="mt-2 text-xl md:text-2xl font-bold text-blueberry-200">Hello, us!</h3>
	<Modal
		unstyled={true}
		classBg="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center bg-blackberry-800/[0.8] z-10"
		classWindowWrap="relative m-4 max-h-full"
		classWindow="rounded-2xl bg-[#A7D0F1] text-black p-6 md:p-8 max-w-xl max-h-full m-auto relative"
		closeButton={CloseButton}
	>
		<div
			class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8"
		>
			{#each teamMembers as { description, portraitSrc, name }}
				<TeamMember {description} {portraitSrc} {name} />
			{/each}
		</div>
	</Modal>
</section>

<!-- Location -->
<section class="mt-6 text-blueberry-200 p-8 md:p-12" id="location">
	<div
		class="flex flex-col lg:flex-row items-center justify-center lg:space-x-32 space-y-6 lg:space-y-0 m-auto"
	>
		<div class="w-full lg:w-2/3">
			<h1 class="text-5xl md:text-7xl font-black text-white">Location</h1>
			<h3 class="text-xl font-black text-white mt-3">{location.name}</h3>
			<h3 class="font-medium text-white mt-1">
				{location.address}
			</h3>
			<a
				href={location.mapsLink}
				target="_blank"
				rel="noopener noreferred"
				class="block mt-4 text-center py-3 bg-[#A7D0F1] hover:bg-[#83BDEC] text-blueberry-800 text-xl font-bold rounded-2xl"
				>Open in Google Maps</a
			>
		</div>
		<GoogleMap />
	</div>
</section>

<!-- Footer -->
<Footer class="mt-8" />
