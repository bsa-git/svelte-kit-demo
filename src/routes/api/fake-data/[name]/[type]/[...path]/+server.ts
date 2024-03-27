import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { inspector } from '$lib/sys/util';
// import { chunk } from 'lodash';//  as loChunk
import loChunk from 'lodash/chunk';
import loForEach from 'lodash/forEach';

const isDebug = false;

async function getFakeData(url: URL) {

	const response = await fetch(url);
	if (response && isDebug) inspector('getBreweryData.response:', response)
	const responseData = await response.json();
	if (responseData && isDebug) inspector('getBreweryData.responseData:', responseData);

	return JSON.stringify(responseData);
}

export const GET: RequestHandler = async (reqEvent: any) => {
	if (reqEvent && isDebug) inspector('RequestEvent:', reqEvent)

	let url: URL;
	let search: string = '';
	let result = null;
	try {

		const serviceName = reqEvent.params.name;
		if (serviceName === 'openbrewerydb') {
			let type = reqEvent.params.type;
			type = (type === 'list') ? '' : `/${type}`;
			let path: any = reqEvent.params.path ? reqEvent.params.path : '';
			console.log('server.GET.path:', path);
			path = path ? path.split('/') : [];
			console.log('server.GET.path:', path);
			path = loChunk(path, 2);
			console.log('server.GET.path:', path);
			loForEach(path, function (value) {
				search = search ? search + `&${value[0]}=${value[1]}` : search + `?${value[0]}=${value[1]}`;
			});
			console.log('server.GET.params.search:', search);

			url = new URL(`https://api.openbrewerydb.org/v1/breweries${type}${search}`);

			if (url && true) console.log('server.GET.url:', url.toString());

			result = await getFakeData(url);
		}
		return new Response(result);

	} catch (ex: any) {
		throw new Error(ex.message);
	}


};