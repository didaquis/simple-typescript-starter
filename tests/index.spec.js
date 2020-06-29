import { foo } from '../src/';

describe('foo', () => {
	it('should return foo', () => {
		expect(foo).toBeDefined();
	});

	it('should return foo', () => {
		expect(foo()).toBe('foo');
	});
});
