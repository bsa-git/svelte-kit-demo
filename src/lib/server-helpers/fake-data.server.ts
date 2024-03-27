import type { RequestHandler } from '@sveltejs/kit';
// import type { RequestHandler } from './$types';
// type RequestHandler  @sveltejs/kit.RequestHandler<RouteParams, RouteId>;
import { inspector } from '$lib/sys/util';

const isDebug = false;

async function getBreweryData(url: URL) {

	const response = await fetch(url);
	if (response && isDebug) inspector('getBreweryData.response:', response)
	const responseData = await response.json();
	if (responseData && isDebug) inspector('getBreweryData.responseData:', responseData);

	return JSON.stringify(responseData);
}

export const GET: RequestHandler = async (reqEvent: any) => {
	if (reqEvent && isDebug) inspector('RequestEvent:', reqEvent)

	let result = null;
	try {
		const search = reqEvent.url.search;
		let type = reqEvent.params.type;
		type = (type === 'list') ? '' : `/${type}`;
		let url: URL = new URL(`https://api.openbrewerydb.org/v1/breweries${type}${search}`);

		if (url && isDebug) console.log('server.GET.url:', url.toString());

		result = await getBreweryData(url);

	} catch (ex: any) {
		throw new Error(ex.message);
	}

	return new Response(result);
};