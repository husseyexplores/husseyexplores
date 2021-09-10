<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const endpoint = `https://dev.to/api/articles?username=ben`
    const posts = await fetch(endpoint, { headers: { accept: 'application/json' } }).then(r =>
      r.json(),
    )

    return {
      props: {
        posts,
        basePath: '/blog/',
      },
    }
  }
</script>

<script>
  export let posts

  function formatDate(d) {
    if (typeof d === 'string') {
      d = new Date(d)
    }

    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
  }
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="bg-gray-100 text-gray-700  font-sans quicksand">
  <div class="p-16">
    <div>
      <h2>{posts.length} posts</h2>
    </div>

    <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 m-5 mb-10">
      {#each posts as post}
        <div class="bg-white overflow-hidden hover:bg-gray-100 border border-gray-200 p-3">
          <div class="m-2 text-justify text-sm">
            <p class="text-right text-xs">{formatDate(post.published_at)}</p>
            <h2 class="font-bold text-lg mb-8 leading-tight">{post.title}</h2>
            <p class="text-xs">
              {post.description}
            </p>
          </div>
          <div class="w-full text-right mt-4">
            <a
              class="text-green-400 uppercase font-bold text-sm"
              href="{$$props.basePath}{post.slug}">Read More</a
            >
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
