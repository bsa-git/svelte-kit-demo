import { error } from '@sveltejs/kit';
import { posts } from '../data';
const isDebug = true;

/** 
 * @type {import('./$types').PageServerLoad} 
*/
export function load({ params }) {

  isDebug? console.log("PageServer.ts (Blog/[slug]): OK") : '';

	const post = posts.find((post) => post.slug === params.slug);
  if(post) return {	post };
	
  error(404, `There's an invalid pathname: "${params.slug}"`);
	
}
