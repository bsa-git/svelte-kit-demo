import { posts } from './data.js';

type Post = {
	slug: string,
	title: string,
	content?: string
}

type Summaries = {
    summaries: Post[]
}

export function load(): Summaries {
	return  {
		summaries: posts.map((post: Post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}
