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

	// return JSON.stringify(responseData);
	return responseData;
}

export const fakeDataService = async (params: Params) => {
	if (params && true) inspector('RequestParams:', params)

	let url: URL;
	let search: string = '';
	let result: any = '';

	const serviceName = params.name;
	if (serviceName === 'openbrewerydb') {
		const listOfAllowedTypes: string[] = ['single', 'list', 'random', 'search', 'autocomplete', 'meta'];
		
		// Check allowed types
		let type = params.type;
		if(!listOfAllowedTypes.includes(type)) {
			return error(400, { message: `The type: "${type}" does not match the type of the request!` });
		}

		//Convert types: 'single', 'list'
		let path: any = params.path ? params.path : '';
		if(type === 'single') {
			type = path;
			path = '';
		} 
		type = (type === 'list') ? '' : `/${type}`;

		// Convert path to Array
		path = path ? path.split('/') : [];
		path = loChunk(path, 2);
		if (path && true) console.log('fakeDataService.path:', path);

		// Get search string for request
		loForEach(path, function (value) {
			search = search ? search + `&${value[0]}=${value[1]}` : search + `?${value[0]}=${value[1]}`;
		});
		if (search && true) console.log('fakeDataService.search:', search);

		// Get URL for request
		url = new URL(`https://api.openbrewerydb.org/v1/breweries${type}${search}`);
		if (url && true) console.log('fakeDataService.url:', url.toString());

		// Get fake data
		result = await getFakeData(url);
		if (result && result.message) return error(400, { message: result.message });

		return result;
	}
	return error(400, { message: 'There are no names of services to receive fake data!' });
};