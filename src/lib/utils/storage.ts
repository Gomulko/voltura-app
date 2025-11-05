import type { CarConfiguration } from '$lib/types';

const STORAGE_KEY = 'voltura_configuration';

export const storage = {
	save(config: CarConfiguration): void {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(`Failed to save configuration: ${error.message}`);
			}
		}
	},

	load(): CarConfiguration | null {
		try {
			const data = localStorage.getItem(STORAGE_KEY);
			return data ? JSON.parse(data) : null;
		} catch {
			return null;
		}
	},

	clear(): void {
		localStorage.removeItem(STORAGE_KEY);
	}
};
