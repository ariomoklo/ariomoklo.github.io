<script>
  import Tooltip from "./ui/tooltip.svelte"
  export let linkedin = 'https://linkedin.com/in/ariowidiatmoko'
  export let github = 'https://github.com/ariomoklo'
  export let email = 'ariowidiatmoko@gmail.com'

</script>

<section class="hidden lg:block not-prose px-4 pb-4 bg-base-100 shadow">
  <p class="py-2 text-sm text-slate-600">/contact.ts</p>
  <p>function <span class="text-rose-700">sendChat</span>(<span class="text-amber-700">type</span>: <span class="text-blue-500">string</span>) {'{'}</p>
  <p>
    <span class="ml-4">if</span> (<span class="text-amber-700">type</span> === <span class="text-green-500">'linkedin'</span>) <Tooltip text="redirect to my linkedin page ➡️"><a href="{linkedin}"><span class="text-rose-700">clickHere</span>(<span class="text-green-500 cursor-pointer">'@ariowidiatmoko'</span></a>)</Tooltip>
  </p>
  <p>
    <span class="ml-4">if</span> (<span class="text-amber-700">type</span> === <span class="text-green-500">'github'</span>) <Tooltip text="redirect to my github page ➡️"><a href="{github}"><span class="text-rose-700">clickHere</span>(<span class="text-green-500 cursor-pointer">'@ariomoklo'</span></a>)</Tooltip>
  </p>
  <p>
    <span class="ml-4">else</span> <Tooltip text="link to send email ➡️"><a href="mailto:{email}"><span class="text-rose-700">sendEmail</span>(<span class="text-green-500 cursor-pointer">'ariowidiatmoko@gmail.com'</span></a>)</Tooltip>
  </p>
  <p>{'}'}</p>
</section>

<section class="flex flex-col gap-2 lg:hidden not-prose w-full">
  <a href="{linkedin}" class="flex justify-between items-center w-full px-4 py-2 bg-blue-500 text-base-100">
    <b>LinkedIn</b>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  </a>
  <a href="{github}" class="flex justify-between items-center w-full px-4 py-2 bg-blue-500 text-base-100">
    <b>Github</b>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
  </a>
  <a href="mailto:{email}" class="flex justify-between items-center w-full px-4 py-2 bg-blue-500 text-base-100">
    <b>Email</b>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64L12 9.548l6.545-4.91l1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
  </a>
</section>