import type { Post, Summaries } from "./blog";
import { inspector } from '$lib/sys/util'
import { posts } from './data';
const isDebug = false;

/** 
 * @type {import('./$types').PageServerLoad} 
*/
export function load(args): Summaries {

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
