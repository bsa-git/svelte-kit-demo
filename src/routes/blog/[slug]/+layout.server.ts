import type { Post, Summaries } from "../blog";
import { posts } from '../data';
const isDebug = true;

/** @type {import('./$types').LayoutServerLoad} */
export function load(): Summaries {

	isDebug? console.log("LayoutServer.ts (Blog/[slug]): OK") : '';

	const postsData: Summaries = {
		summaries: posts.map((post: Post) => ({
			slug: post.slug,
			title: post.title
		}))
	};

	return  postsData
}
