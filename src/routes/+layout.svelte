<script lang="ts">
	import { page } from '$app/stores'
	import { handleSession } from '@lucia-auth/sveltekit/client'
	import Heading from './heading.svelte'
	import Footer from './footer.svelte'

	import '@skeletonlabs/skeleton/themes/theme-rocket.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.postcss'

	handleSession(page)
</script>

<svelte:head>
	<title>Logs - More than simple blogs</title>
<link rel="icon" href="https://fav.farm/🖥" />
</svelte:head>

<Heading />
<slot />
<Footer />
