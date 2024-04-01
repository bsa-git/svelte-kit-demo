import { fail, error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { fakeDataService } from "$lib/service-helpers/fakedata.service";

export const prerender = false;

export const actions = {
	sopenbrewerydb: async ({ request, url }) => {
		const listOfAllowedTypes: string[] = ['single', 'list', 'random', 'search', 'autocomplete', 'meta'];
		let result: any;
		type Params = {
			type: string,
			path: string,
			name: string
		}
		
		
		const data = await request.formData();
		let type = String(data.get('type'));
		let path = String(data.get('path'));
		let params: Params = { type, path, name: 'sopenbrewerydb' };

		if(!listOfAllowedTypes.includes(type)) {
			return fail(400, { type, path, incorrect: true,  message: `The type: "${type}" does not match the type of the request!` });
		}

		// Get fake data
		result = await fakeDataService(params);
		result = JSON.stringify(result);

		if (url.searchParams.has('redirectTo')) {
			let redirectUrl = url.searchParams.get('redirectTo');
			redirectUrl = redirectUrl? redirectUrl : '/';
			redirect(303, redirectUrl);
		}

		return { success: true, type, path, result };
	}
} satisfies Actions;