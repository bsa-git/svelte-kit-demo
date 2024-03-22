import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
  console.log("serverLayout (Docs): OK");
  return {
    docs: [
      { branch: 'm5', path: 'report1/doc-1.md' },
      { branch: 'm5', path: 'report2/doc-2.md' },
      { branch: 'm9', path: 'report1/doc-1.md' }
    ],
  };
};