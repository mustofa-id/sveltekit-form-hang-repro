<script>
  import { enhance } from "$app/forms";

  export let form;
</script>

<form method="post" use:enhance>
  <section>
    {#each { length: 167 } as _, i}
      <label>
        <input type="checkbox" name="item" value="item-{i}" checked />
        <span>Item {i}</span>
      </label>
    {/each}
  </section>

  <section>
    <button>Submit</button>

    {#if form?.success}
      <em>Success</em>
    {/if}
  </section>
</form>

<p>
  Open the Network tab in DevTools, then try clicking the Submit button. You'll
  notice that the request is pending or hangs.
</p>

<p>
  Reload the page, uncheck the last item and then try submitting again. It will
  succeed.
</p>

<p>
  It seems to hang if the content-length is <a
    href="https://github.com/sveltejs/kit/issues/11126#issuecomment-1977218146"
  >
    above 16 KiB
  </a>
  and using <code>:enhance</code>.
</p>
