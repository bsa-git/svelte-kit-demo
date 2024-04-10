import { error } from '@sveltejs/kit';
import { inspector } from '$lib/sys/util'
import { posts } from '../data';
const isDebug = false;

/** 
 * @type {import('./$types').PageServerLoad} 
*/
export function load(args) {// params

  if(args && true) console.log("PageServer.ts (Blog/[slug]): OK");
  if(args && isDebug) inspector("PageServer.ts (Blog).args:", args);

	const post = posts.find((post) => post.slug === args.params.slug);
  if(post) return {	post };
	
  error(404, `There's an invalid pathname: "${args.params.slug}"`);
	
}
