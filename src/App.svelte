<script>
  import {numbers} from './stores';
  let n;
  
  function addNumber() {
    numbers.update(arr => [...arr, n]);
    n = '';
  }
</script>

<form on:submit|preventDefault={addNumber}>
<label>Number to add</label>
<input type="number" bind:value={n} />
<button type="submit">Add</button>
</form>

<ul>
{#each $numbers as number}
  <li>{number}</li>
{/each}
</ul>
