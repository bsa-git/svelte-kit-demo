import * as database from '$lib/service-helpers/database2.js';
import type { PageServerLoad } from './$types';
import { inspector } from '$lib/sys/util'
export const prerender = false;

const isDebug = false;

/** 
 * @method load 
 * @type {import('./$types').PageServerLoad} 
 *
*/
export const load: PageServerLoad = ({ cookies }) => {
	
  if(cookies && true) console.log("PageServer.ts (api/server-handlers/put-delete-handler).load: OK");

  let userid = cookies.get('userid');

	if (!userid) {
		userid = crypto.randomUUID();
		cookies.set('userid', userid, { path: '/' });
	}

  const todos = {
		todos: database.getTodos(userid)
	};

  if(cookies && isDebug) inspector("PageServer.ts (api/server-handlers/put-delete-handler).load.todos:", todos);

	return todos
}