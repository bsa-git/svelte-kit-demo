import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const isDebug = false;

async function getBreweryData(url: URL) {

	const response = await fetch(url);
	if (response && isDebug) console.log('getBreweryData.response:', response)
	const responseData = await response.json();
	if (responseData && true) console.log('getBreweryData.responseData:', responseData)

	return JSON.stringify(responseData);
}

export const GET: RequestHandler = async (reqEvent: any) => {
	if (reqEvent && isDebug) console.log('RequestEvent:', reqEvent)

	let result = null;
	try {
		const search = reqEvent.url.search;
		const version = reqEvent.params.version;
		let type = reqEvent.params.type;
		type = (type === 'list') ? '' : `/${type}`;
		let url: URL = new URL(`https://api.openbrewerydb.org/${version}/breweries${type}${search}`);

		if (url && true) console.log('server.GET.url:', url.toString());

		result = await getBreweryData(url);

	} catch (ex: any) {
		throw new Error(ex.message);
	}

	return new Response(result);
};