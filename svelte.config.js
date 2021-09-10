import preprocess from 'svelte-preprocess'
import staticAdapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: staticAdapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
    trailingSlash: 'always',
    prerender: {
      crawl: false,
      enabled: true,
      entries: ['*'],
      onError: 'fail',
    },
  },

  preprocess: [
    preprocess({
      defaults: {
        style: 'postcss',
      },
      postcss: true,
    }),
  ],
}

export default config
