import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = 'auto';

const isDebug = false;

async function getFakeData(url: URL) {

	const response = await fetch(url);
	if (response && isDebug) console.log('getFakeData.response:', response)
	const responseData = await response.json();
	if (responseData && isDebug) console.log('getFakeData.responseData:', responseData)

	return JSON.stringify(responseData);
}

export const load: PageServerLoad = async ({ params }) => {

	let result = null;

	if (params.name === 'openbrewerydb') {

		try {
			let type = params.type;
			type = (type === 'list') ? '' : `/${type}`;
			let search = params.path;


			let url: URL = new URL(`https://api.openbrewerydb.org/v1/breweries${type}${search}`);

			if (url && true) console.log('server.GET.url:', url.toString());

			result = await getFakeData(url);

			return {
				title: 'Get a single brewery',
				content: result
			};

		} catch (ex: any) {
			throw new Error(ex.message);
		}
	}

	error(404, 'Not found');

};