import { describe, it, expect } from 'vitest';
import { formatPrice, formatRange } from '$lib/utils/formatters';

describe('formatPrice', () => {
	it('formats 100000 as PLN currency', () => {
		const result = formatPrice(100000);
		expect(result).toContain('100');
		expect(result).toContain('000');
		expect(result).toContain('zł');
	});

	it('formats 85999 as PLN currency', () => {
		const result = formatPrice(85999);
		expect(result).toContain('85');
		expect(result).toContain('999');
		expect(result).toContain('zł');
	});

	it('formats 120999 as PLN currency', () => {
		const result = formatPrice(120999);
		expect(result).toContain('120');
		expect(result).toContain('999');
		expect(result).toContain('zł');
	});

	it('formats 0 as PLN currency', () => {
		const result = formatPrice(0);
		expect(result).toMatch(/0\s+zł/);
	});
});

describe('formatRange', () => {
	it('formats 400 as km', () => {
		const result = formatRange(400);
		expect(result).toBe('400 km');
	});

	it('formats 280 as km', () => {
		const result = formatRange(280);
		expect(result).toBe('280 km');
	});

	it('formats 500 as km', () => {
		const result = formatRange(500);
		expect(result).toBe('500 km');
	});
});
