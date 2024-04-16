import * as db from '$lib/service-helpers/database';
import type { PageServerLoad, Actions } from './$types';
import { inspector } from '$lib/sys/util'
export const prerender = false;

const isDebug = false;

if(db && true) console.log("PageServer.ts (setting/todo-list): OK");

/** 
 * @type {import('./$types').PageServerLoad} 
*/
export const load:PageServerLoad = ({ cookies }) => {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

  const todos = db.getTodos(id);
  if(todos && isDebug) inspector('PageServer.ts (setting/todo-list).load:', todos);

	return { todos };
}

/** @type {import('./$types').Actions} */
export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const userid = cookies.get('userid');
    let description = data.get('description')?.toString();

    if(userid && description) {
      db.createTodo(userid, description);
      if(userid && isDebug) inspector('PageServer.ts (setting/todo-list).actions.default:', db.getTodos(userid));
    } 
	}
};
