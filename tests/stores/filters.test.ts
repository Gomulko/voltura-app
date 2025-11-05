import { describe, it, expect } from 'vitest';
import { filtersStore } from '$lib/stores/filters.svelte';
import type { BodyType, DriveType } from '$lib/types';

describe('filtersStore', () => {
	it('has default state', () => {
		const state = filtersStore.state;
		expect(state.type).toBeNull();
		expect(state.drive).toBeNull();
		expect(state.minPrice).toBe(50000);
		expect(state.maxPrice).toBe(250000);
	});

	it('sets body type', () => {
		const bodyType: BodyType = 'suv';
		filtersStore.setType(bodyType);
		expect(filtersStore.state.type).toBe('suv');

		filtersStore.setType(null);
		expect(filtersStore.state.type).toBeNull();
	});

	it('sets drive type', () => {
		const driveType: DriveType = 'AWD';
		filtersStore.setDrive(driveType);
		expect(filtersStore.state.drive).toBe('AWD');

		filtersStore.setDrive(null);
		expect(filtersStore.state.drive).toBeNull();
	});

	it('sets price range', () => {
		filtersStore.setPriceRange(80000, 150000);
		expect(filtersStore.state.minPrice).toBe(80000);
		expect(filtersStore.state.maxPrice).toBe(150000);
	});

	it('resets to default state', () => {
		filtersStore.setType('sedan');
		filtersStore.setDrive('RWD');
		filtersStore.setPriceRange(100000, 200000);

		filtersStore.reset();

		expect(filtersStore.state.type).toBeNull();
		expect(filtersStore.state.drive).toBeNull();
		expect(filtersStore.state.minPrice).toBe(50000);
		expect(filtersStore.state.maxPrice).toBe(250000);
	});
});
