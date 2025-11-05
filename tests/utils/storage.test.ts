import { describe, it, expect, beforeEach } from 'vitest';
import { storage } from '$lib/utils/storage';
import type { CarConfiguration } from '$lib/types';

describe('storage', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	describe('save', () => {
		it('saves configuration to localStorage', () => {
			const config: CarConfiguration = {
				carId: 'voltura-zx-2025',
				carName: 'Voltura ZX',
				version: 'Sport',
				color: 'black',
				addons: ['winter-tires', 'navigation'],
				totalPrice: 118999,
				timestamp: '2025-01-15T10:00:00.000Z'
			};

			storage.save(config);

			const saved = localStorage.getItem('voltura_configuration');
			expect(saved).not.toBeNull();
			expect(JSON.parse(saved!)).toEqual(config);
		});
	});

	describe('load', () => {
		it('loads configuration from localStorage', () => {
			const config: CarConfiguration = {
				carId: 'voltura-px-2025',
				carName: 'Voltura PX',
				version: 'Performance',
				color: 'blue',
				addons: ['floor-mats'],
				totalPrice: 151499,
				timestamp: '2025-01-15T11:00:00.000Z'
			};

			localStorage.setItem('voltura_configuration', JSON.stringify(config));

			const loaded = storage.load();
			expect(loaded).toEqual(config);
		});

		it('returns null when no configuration exists', () => {
			const loaded = storage.load();
			expect(loaded).toBeNull();
		});

		it('returns null when localStorage contains invalid JSON', () => {
			localStorage.setItem('voltura_configuration', 'invalid-json');
			const loaded = storage.load();
			expect(loaded).toBeNull();
		});
	});

	describe('clear', () => {
		it('removes configuration from localStorage', () => {
			const config: CarConfiguration = {
				carId: 'voltura-city-2025',
				carName: 'Voltura City',
				version: 'Podstawowa',
				color: 'green',
				addons: [],
				totalPrice: 85999,
				timestamp: '2025-01-15T12:00:00.000Z'
			};

			storage.save(config);
			expect(localStorage.getItem('voltura_configuration')).not.toBeNull();

			storage.clear();
			expect(localStorage.getItem('voltura_configuration')).toBeNull();
		});
	});
});
