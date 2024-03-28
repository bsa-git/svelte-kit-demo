import { error, fail } from '@sveltejs/kit';
import { inspector } from '$lib/sys/util';
import loChunk from 'lodash/chunk';
import loForEach from 'lodash/forEach';

type Params = {
	name: string,
	type: string,
	path: string
}

const isDebug = false;

async function getFakeData(url: URL) {

	const response = await fetch(url);
	if (response && isDebug) inspector('getBreweryData.response:', response)
	const responseData = await response.json();
	if (responseData && isDebug) inspector('getBreweryData.responseData:', responseData);

	return JSON.stringify(responseData);
}

export const fakeDataService = async (params: Params) => {
	if (params && isDebug) inspector('RequestParams:', params)

	let url: URL;
	let search: string = '';
	let result: string = '';

	const serviceName = params.name;
	if (serviceName === 'openbrewerydb') {
		let type = params.type;
		type = (type === 'list') ? '' : `/${type}`;
		let path: any = params.path ? params.path : '';
		// Convert path to Array
		path = path ? path.split('/') : [];
		path = loChunk(path, 2);
		if (path && isDebug) console.log('fakeDataService.path:', path);
		// Get search string for request
		loForEach(path, function (value) {
			search = search ? search + `&${value[0]}=${value[1]}` : search + `?${value[0]}=${value[1]}`;
		});
		if (search && isDebug) console.log('fakeDataService.search:', search);
		// Get URL for request
		url = new URL(`https://api.openbrewerydb.org/v1/breweries${type}${search}`);

		if (url && isDebug) console.log('fakeDataService.url:', url.toString());
		// Get fake data
		result = await getFakeData(url);
		return result;
	}
	return error(400, { message: 'There are no names of services to receive fake data!' });
};