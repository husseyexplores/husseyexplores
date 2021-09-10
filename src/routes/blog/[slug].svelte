<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch }) {
    const { slug } = page.params
    const endpoint = `https://dev.to/api/articles/ben/${slug}`
    const post = await fetch(endpoint, {
      headers: { accept: 'application/json' },
    }).then(r => r.json())

    return {
      props: {
        post,
      },
    }
  }
</script>

<script>
  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<article>
  <h1>{post.title}</h1>
  {@html post.body_html}
</article>
