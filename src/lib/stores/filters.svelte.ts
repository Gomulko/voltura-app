import type { FilterState, BodyType, DriveType } from '$lib/types';

// eslint-disable-next-line prefer-const
let state = $state<FilterState>({
	type: null,
	drive: null,
	minPrice: 50000,
	maxPrice: 250000
});

export const filtersStore = {
	get state(): FilterState {
		return state;
	},
	setType(type: BodyType | null): void {
		state.type = type;
	},
	setDrive(drive: DriveType | null): void {
		state.drive = drive;
	},
	setPriceRange(min: number, max: number): void {
		state.minPrice = min;
		state.maxPrice = max;
	},
	reset(): void {
		state.type = null;
		state.drive = null;
		state.minPrice = 50000;
		state.maxPrice = 250000;
	}
};
