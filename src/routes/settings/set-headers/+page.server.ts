import type { PageServerLoad } from './$types';
import { inspector } from '$lib/sys/util'

const isDebug = false;

/** 
 * @type {import('./$types').PageServerLoad} 
*/
export const load: PageServerLoad = (args) => {

  if(args && true) console.log("PageServer.ts (settings/set-headers): OK");
  if(args && isDebug) inspector("PageServer.ts (settings/set-headers).args:", args);

	args.setHeaders({
		'Content-Type': 'text/plain'
	});
}