import * as posts from '$lib/services/posts'

export const load = async ({setHeaders}) => {
  setHeaders({
    'Cache-Control':`max-age=0, s-maxage=${60*60}`,
  }),

	return { posts: posts.getPublishedPosts() }
}
