import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const prerender = false;

export const actions = {
	default: async ({ request }) => {
		let total = 0;
		const data = await request.formData();
		let a = Number(data.get('a'));
		let b = Number(data.get('b'));

		if (isNaN(a) || isNaN(b)) {
			return fail(400, { a, b, incorrect: true });
		} 
		total = a + b;
		return { success: true, a, b, total };
	}
} satisfies Actions;