import type { Post, Summaries } from "./blog";
import { posts } from './data';
const isDebug = false;

export function load(): Summaries {

	isDebug? console.log("PageServer.ts (Blog): OK") : '';

	const postsData: Summaries = {
		summaries: posts.map((post: Post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
	// console.log('postsData:', postsData);
	return  postsData
}
