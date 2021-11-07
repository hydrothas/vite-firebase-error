<script>
	import '../app.css'
	import Header from '$lib/shared/header.svelte'
  </script>
  
  <div class="mx-auto max-w-5xl px-4 sm:px-6">
	<Header>
	  <main>
		<slot />
	  </main>
	</Header>
	<slot />
  </div>
  