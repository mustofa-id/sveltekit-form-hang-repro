# SvelteKit Form Enhance Hang Repro

```bash
pnpm i

pnpm dev
```

Open the Network tab in your browser's DevTools, then try clicking the Submit button. You'll notice that the request is pending or hangs. This issue only occurs in Node versions 18.18.2 through 20.9.0.
