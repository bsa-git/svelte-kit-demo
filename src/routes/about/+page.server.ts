import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return new Promise((fulfil) => {
		setTimeout(fulfil, 1000);
	});
}