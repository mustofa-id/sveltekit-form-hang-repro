<script>
  import { enhance } from "$app/forms";

  export let form;
</script>

<form method="post" use:enhance>
  <section>
    {#each { length: 200 } as _, i}
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
