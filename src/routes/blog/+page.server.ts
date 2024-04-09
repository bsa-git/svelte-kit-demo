import type { Post, Summaries } from "./blog";
import { posts } from './data';
const isDebug = true;

/** 
 * @type {import('./$types').PageServerLoad} 
*/
export function load(): Summaries {

	isDebug? console.log("PageServer.ts (Blog): OK") : '';

	const postsData: Summaries = {
		summaries: posts.map((post: Post) => ({
			slug: post.slug,
			title: post.title
		}))
	};

	return  postsData
}