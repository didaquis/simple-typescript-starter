import { describe, expect, it } from 'vitest';
import { foo } from '../src/index.js';

describe('foo', () => {
	it('should exist', () => {
		expect(foo).toBeDefined();
	});

	it('should return foo', () => {
		expect(foo()).toBe('foo');
	});
});
