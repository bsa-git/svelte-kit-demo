import { error } from '@sveltejs/kit';
import { posts } from '../data';
const isDebug = false;

export function load({ params }) {

  isDebug? console.log("PageServer.ts (Blog/[slug]): OK") : '';

	const post = posts.find((post) => post.slug === params.slug);
  if(post) return {	post };
	
  error(404, `The parameter value must match the path parameter: "${params.slug}"`);
	
}
