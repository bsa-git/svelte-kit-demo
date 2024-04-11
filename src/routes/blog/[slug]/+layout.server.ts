import type { LayoutServerLoad } from './$types';
import type { Post, Summaries } from "../blog";
import { inspector } from '$lib/sys/util'
import { posts } from '../data';
const isDebug = false;

/** @type {import('./$types').LayoutServerLoad} */
export const load: LayoutServerLoad = (args) => {

  if(args && true) console.log("LayoutServer.ts (Blog/[slug]): OK");
  if(args && isDebug) inspector("LayoutServer.ts (Blog/[slug]).args:", args);

	const postsData: Summaries = {
		summaries: posts.map((post: Post) => ({
			slug: post.slug,
			title: post.title
		}))
	};

	return  postsData
}
