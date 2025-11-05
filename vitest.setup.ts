import '@testing-library/jest-dom/vitest';

class LocalStorageMock {
	private store: Record<string, string> = {};

	clear(): void {
		this.store = {};
	}

	getItem(key: string): string | null {
		return this.store[key] || null;
	}

	setItem(key: string, value: string): void {
		this.store[key] = String(value);
	}

	removeItem(key: string): void {
		delete this.store[key];
	}

	get length(): number {
		return Object.keys(this.store).length;
	}

	key(index: number): string | null {
		const keys = Object.keys(this.store);
		return keys[index] || null;
	}
}

global.localStorage = new LocalStorageMock() as Storage;
