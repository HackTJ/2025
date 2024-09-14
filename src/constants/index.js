import dayjs from 'dayjs';

export const event = {
	iteration: '12.0',
	year: '2025',
	start: dayjs('2/24/2025 11:30'),
	end: dayjs('2/25/2025 8:00'),
	sponsorshipPacket: 'sponsorship12_0.pdf'
};

export const location = {
	name: 'Cvent HQ',
	address: '1765 Greensboro Station Pl 7th Floor, McLean, VA 22102',
	mapsLink: 'https://goo.gl/maps/L23EwHCCucy7SjKf7'
};

export const registration = {
	participant: {
		open: dayjs('1/20/2025 19:00'),
		close: dayjs('2/3/2025 23:59')
	},
	other: {
		open: dayjs('1/20/2025 19:00'),
		close: event.start
	}
};

// Time-based properties (do not edit)
registration.participant = {
	...registration.participant,
	notOpenYet: dayjs() < registration.participant.open,
	isOpen: registration.participant.open < dayjs() && dayjs() < registration.participant.close,
	isClosed: registration.participant.close < dayjs()
};

registration.other = {
	...registration.other,
	notOpenYet: dayjs() < registration.other.open,
	isOpen: registration.other.open < dayjs() && dayjs() < registration.other.close,
	isClosed: registration.other.close < dayjs()
};

registration.isOpen = registration.participant.isOpen || registration.other.isOpen;
