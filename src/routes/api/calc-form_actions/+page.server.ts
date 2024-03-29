import { fail, error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const prerender = false;

export const actions = {
	sum: async ({ request, url }) => {
		let result = 0;
		const data = await request.formData();
		let a = Number(data.get('a'));
		let b = Number(data.get('b'));

		if (isNaN(a) || isNaN(b)) {
			return fail(400, { a, b, missing: true });
		}
		result = a + b;

		if (url.searchParams.has('redirectTo')) {
			let redirectUrl = url.searchParams.get('redirectTo');
			redirectUrl = redirectUrl? redirectUrl : '/';
			redirect(303, redirectUrl);
		}

		return { success: true, a, b, result };
	},
	random: async ({ request, url }) => {
		let result = 0;
		const data = await request.formData();
		let a = Number(data.get('a'));
		let b = Number(data.get('b'));

		if (isNaN(a) || isNaN(b)) {
			return fail(400, { a, b, missing: true, message: '`a` and `b` must be numbers' });
		}
		const d = b - a;

		if (isNaN(d) || d < 0) {
			return fail(400, { a, b, incorrect: true, message: '`a` must be less than `b`' });
		}

		result = a + Math.random() * d;

		if (url.searchParams.has('redirectTo')) {
			let redirectUrl = url.searchParams.get('redirectTo');
			redirectUrl = redirectUrl? redirectUrl : '/';
			redirect(303, redirectUrl);
		}

		return { success: true, a, b, result };
	}
} satisfies Actions;