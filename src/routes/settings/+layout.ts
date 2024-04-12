import type { LayoutLoad } from './$types';

/** 
 * @type {import('./$types').LayoutLoad} 
*/
export const load: LayoutLoad = () => {
  console.log("Layout.ts (Settings): OK");
  return {
    sections: [
      { slug: 'profile', title: 'Profile' },
      { slug: 'set-headers', title: 'Set header' },
      { slug: 'cookies', title: 'Reading and writing cookies' },
    ],
  };
};