<script>
  import Colors from "./pages/Colors/Colors.svelte";

  import { nickname } from "./stores/nicknameStore.js";
  
  import Registration from "./pages/Registration/Registration.svelte";

</script>

{#if !$nickname}
  <Registration />
{:else}
  <Colors />
{/if}