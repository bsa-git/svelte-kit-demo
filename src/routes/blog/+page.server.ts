import type { PageServerLoad } from './$types';
import type { Post, Summaries } from "./blog";
import { inspector } from '$lib/sys/util'
import { posts } from './data';
const isDebug = false;

/** 
 * @type {import('./$types').PageServerLoad} 
*/
export const load: PageServerLoad = (args) => {

	if(args && true) console.log("PageServer.ts (Blog): OK");
  if(args && isDebug) inspector("PageServer.ts (Blog).args:", args);

	const postsData: Summaries = {
		summaries: posts.map((post: Post) => ({
			slug: post.slug,
			title: post.title
		}))
	};

	return  postsData
}
