// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

const isDebug = true;
if(isDebug) console.log("Layout.ts (Home): OK");