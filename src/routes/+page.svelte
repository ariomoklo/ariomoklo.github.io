<script>
    import ContactCode from "$lib/components/ContactCode.svelte";
    const techs = [
        'vuejs', 'nuxtjs', 'sveltekit', 'tailwind', 'supabase', 'firebase',
        'typescript', 'prisma', 'zod'
    ]

    const outdated = [
        {
            tools: 'unity3D',
            why: 'I got job in web dev, and not been able to use unity3D anymore. Bluntly, I have been too overwhelmed when coding logic on game mechanic. Last game I made I was only a game designed and 2D artist.'
        },
        {
            tools: 'PHP - CodeIgniter',
            why: 'Last using CI is in a tech startup as a fullstack web dev in 2019. Since then I changes lines to front-end side using javascript and vue as a framework.'
        },
        {
            tools: 'Python - Django',
            why: 'I am only using django in one project for building ecommerce and not too fond doing it.'
        }
    ]
</script>

<div class="hero min-h-screen bg-base-200 py-16">
    <div class="hero-content">
        <article class="prose w-full container">

            <figure class="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 32 32"><g fill="none"><path fill="#9B9B9B" d="M16.034 1.5c-5.29 0-9.78 3.792-10.536 8.904l-.001.009L5.26 12.5H2.748c-1.088 0-1.627 1.32-.864 2.084L4.702 17.4L3.557 27.467c-.207 1.386.725 2.813 2.209 3a3.993 3.993 0 0 0 3.296-1.097a3.018 3.018 0 0 1 4.18 0c1.538 1.499 4.035 1.499 5.574 0a3.018 3.018 0 0 1 4.179 0a3.987 3.987 0 0 0 2.968 1.121h.001c1.584-.073 2.76-1.502 2.537-3.043l-1.143-10.082l2.783-2.782c.764-.764.224-2.084-.863-2.084h-2.47l-.237-2.087l-.002-.008C25.825 5.291 21.324 1.5 16.035 1.5Z"/><path fill="#fff" d="m6.152 13.5l.337-2.957c.684-4.6 4.735-8.043 9.545-8.043s8.87 3.443 9.545 8.042l.335 2.958h3.364c.192 0 .293.24.156.376L26.311 17l1.198 10.577l.001.009c.141.954-.591 1.86-1.591 1.906a2.987 2.987 0 0 1-2.227-.838c-1.538-1.499-4.035-1.499-5.574 0a3.018 3.018 0 0 1-4.179 0c-1.539-1.499-4.035-1.499-5.574 0a2.993 2.993 0 0 1-2.474.822c-.874-.111-1.48-.978-1.344-1.868l.001-.01L5.75 17.036l-3.159-3.159c-.136-.136-.036-.376.157-.376h3.404Z"/><path fill="#89029C" d="M21 12H11s0 5 5 5s5-5 5-5Z"/><path fill="#F70A8D" d="m19.588 16.058l.177-.885a1.254 1.254 0 0 0-.925-1.463a11.708 11.708 0 0 0-5.68 0a1.254 1.254 0 0 0-.925 1.463l.177.885a3.66 3.66 0 0 0 7.176 0Z"/><path fill="#321B41" d="M11.724 7.053a.5.5 0 1 0-.447.894l1.105.553l-1.105.553a.5.5 0 1 0 .447.894l2-1a.5.5 0 0 0 0-.894l-2-1ZM21 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"/></g></svg>
            </figure>
            
            <h1 class="mb-2 font-bold">Hi! I'm <span class="text-emerald-600">Ario Widiatmoko</span></h1>
            <p class="mt-0 max-w-[75ch]">Experienced web developer with a demonstrated history of working in the computer games industry.</p>
        
            <ContactCode linkedin="https://linkedin.com/in/ariowidiatmoko" />

            <h2 class="mb-2">I have been playing with:</h2>
            <div class="flex gap-2 flex-wrap">
                {#each techs as tech}
                    <span class="px-2 bg-emerald-600 text-base-300">{tech}</span>
                {/each}
            </div>

            <h2 class="mb-2">What I've used but stoped using:</h2>
            <div class="not-prose flex flex-col gap-2">
                {#each outdated as tech}
                    <article class="mb-2">
                        <p class="title mb-0 text-emerald-500">{tech.tools}</p>
                        <p class="subtitle">{tech.why}</p>
                    </article>
                {/each}
            </div>

            <p class="mt-16 inline-flex w-full justify-center items-center gap-2 text-center not-prose">
                <span>-</span>
                <span>Made using <a href="http://kit.svelte.dev" class="text-red-700 hover:text-red-500">SvelteKit</a> with </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="inline-flex"><path fill="#F8312F" d="M21.008 5.162c-2.84.509-5.011 3.905-5.011 3.905s-2.18-3.396-5.012-3.905c-7.012-1.25-9.903 4.993-8.732 9.64c1.73 6.863 10.053 13.014 12.834 14.916c.55.376 1.27.376 1.83 0c2.791-1.902 11.113-8.053 12.834-14.916c1.16-4.647-1.73-10.89-8.743-9.64Z"/></svg>
                <span>-</span>
            </p>
        </article>
    </div>
</div> 