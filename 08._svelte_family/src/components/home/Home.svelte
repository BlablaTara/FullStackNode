
<script>
    import { fridgeMessages } from "../../stores/fridgeMessagesStore.js";

</script>


{#each $fridgeMessages as fridgeMessage }
    <p>{fridgeMessages.creator || ""} {fridgeMessage.message}</p>
    
{/each}


<slot></slot>
<h3 id="welcome-mat">Home sweet home</h3>

<style>
    #welcome-mat {
        background-color: rgba(92, 38, 38, 0.357);
        padding: 20px;
        border-radius: 0 0 12px 12px;
    }
</style>