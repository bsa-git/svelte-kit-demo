import * as db from '$lib/service-helpers/database';
import type { PageServerLoad } from './$types';
import { inspector } from '$lib/sys/util'

const isDebug = false;

/** 
 * @type {import('./$types').PageServerLoad} 
*/
export const load:PageServerLoad = ({ cookies }) => {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	return {
		todos: db.getTodos(id)
	};
}
