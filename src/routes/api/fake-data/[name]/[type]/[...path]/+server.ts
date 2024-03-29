import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { inspector } from '$lib/sys/util';
import { fakeDataService } from "$lib/service-helpers/fakedata.service";

const isDebug = false;

export const GET: RequestHandler = async (reqEvent: any) => {
	if (reqEvent && isDebug) inspector('RequestEvent:', reqEvent)

	let result: any = null;

	//try {
	result = await fakeDataService(reqEvent.params);
	return new Response(JSON.stringify(result));

	// } catch (ex: any) {
	// 	inspector('Unknown error:', ex);
	// 	throw new Error(ex.message);
	// }
};