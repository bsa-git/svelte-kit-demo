import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
  console.log("serverLayout (Settings): OK");
  return {
    sections: [
      { slug: 'profile', title: 'Profile' },
      { slug: 'notifications', title: 'Notifications' },
    ],
  };
};