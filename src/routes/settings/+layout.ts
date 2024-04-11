import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
  console.log("Layout.ts (Settings): OK");
  return {
    sections: [
      { slug: 'profile', title: 'Profile' },
      { slug: 'set-headers', title: 'Set "Content-Type" header to "text/plain"' },
    ],
  };
};