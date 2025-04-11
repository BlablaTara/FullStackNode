<script>
  import { onMount } from "svelte";
  import { BASE_URL } from "../../stores/generalStore.js";


    //Skal ikke bruge state. et tomt array, gør at det er reaktivt.
    let employees = $state([]);

    onMount(() => {
        fetch($BASE_URL+"/employees")
        .then((response) => response.json())
        .then((result) => {
            employees = result.data;
        });
    });





</script>

<h3>Emplyees Available</h3>
{#each employees as employee }
<h4>{employees}</h4>
{/each}