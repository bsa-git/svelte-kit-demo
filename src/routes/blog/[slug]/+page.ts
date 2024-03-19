import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = 'auto';

export const load: PageLoad = ({ params }) => {
  if (params.slug === 'hello-world') {
    return {
      title: 'Hello world!',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
    };
  }
  
  if (params.slug === 'about-me') {
    return {
      title: 'About me',
      content: 'I\'m BSA. Lorem ipsum dolor sit amet...',
    };
  }

  error(404, 'Not found');
}