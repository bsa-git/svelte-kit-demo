import { fail, error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { inspector } from '$lib/sys/util';
import { fakeDataService } from "$lib/service-helpers/fakedata.service";

export const prerender = false;

const isDebug = false;

export const actions = {
	openbrewerydb: async ({ request, url }) => {
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
		let params: Params = { type, path, name: 'openbrewerydb' };

		if (!type) {
			return fail(400, { type, path, missing: true, message: `The type value should not be empty` });
		}

		if (!listOfAllowedTypes.includes(type)) {
			return fail(400, { type, path, incorrect: true, message: `The type: "${type}" does not match the type of the request` });
		}

		// Get fake data
		try {
			result = await fakeDataService(params);
			if (result && isDebug) inspector('ActionOpenBreweryDB.result:', result);
			result = JSON.stringify(result);
		} catch (error: any) {
			if (error && true) inspector('ActionOpenBreweryDB.service_error:', error);
			return fail(error?.status, { type, path, service_error: true, message: error.body?.message });
		}


		if (url.searchParams.has('redirectTo')) {
			let redirectUrl = url.searchParams.get('redirectTo');
			redirectUrl = redirectUrl ? redirectUrl : '/';
			redirect(303, redirectUrl);
		}

		return { success: true, type, path, result };
	}
} satisfies Actions;