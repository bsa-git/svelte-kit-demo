import type { PageServerLoad } from './$types';
import { inspector } from '$lib/sys/util'

const isDebug = false;

/** 
 * @type {import('./$types').PageServerLoad} 
*/
export const load: PageServerLoad = (args) => {

  if(args && true) console.log("PageServer.ts (settings/cookies): OK");
  if(args && isDebug) inspector("PageServer.ts (settings/cookies).args:", args);

	const visited = args.cookies.get('visited');

	args.cookies.set('visited', 'true', { path: '/' });

	return {
		visited: visited === 'true'
	};
}