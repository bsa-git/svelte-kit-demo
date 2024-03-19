import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
  console.log("serverLayout (Blog): OK");
  return {
    posts: [
      { slug: 'hello-world' },
      { slug: 'about-me' },
    ],
  };
};