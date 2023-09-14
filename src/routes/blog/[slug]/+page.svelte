<script lang="ts">
	export let data
</script>

<div class="container mt-32 flex flex-col">
	<h1>{data.post.title}</h1>
	<div class="mt-8 max-w-[80ch] space-y-8">
		{@html data.post.html}
	</div>
<script src="https://utteranc.es/client.js"
        repo="Ishaan-FrontendDeveloper/Sveltekit-Blog"
        issue-term="pathname"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>
</div>




