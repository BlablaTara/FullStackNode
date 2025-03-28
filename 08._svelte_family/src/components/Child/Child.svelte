<script>
    const {name, familySheep, isGirl, onShowLove, onEatCookie} = $props();

    import { fridgeMessages } from "../../stores/fridgeMessagesStore.js";

    let fridgeMessageInput = $state('');

    function writeMessageeOnFridge() {

        const newFridgeMessage = {
            creator: name,
            message: fridgeMessageInput
        };

        // dette laver et ny objeckt.
        // fridgeMessages.set(
        // [...$fridgeMessages, 
        //     newFridgeMessage
        // ]);

        // update skal have en return
        fridgeMessages.update((fridgeMessagesStoreValue) => {
            fridgeMessagesStoreValue.push(newFridgeMessage);
            return fridgeMessagesStoreValue;
        });

        fridgeMessageInput = "";
    }

</script>


<div
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
    class={familySheep || "not-a-sheep" }
>

    <h2>{name}</h2>
</div>


<button onclick={() => onShowLove(name)}>Show love</button>
<button onclick={onEatCookie}>Eat cookie</button>

<br>
<input bind:value={fridgeMessageInput}>
<button onclick={writeMessageeOnFridge}> Write Message</button>


<style>

    .is-girl {
        background-color: green;
    }

    .is-boy {

        background-color: salmon;
    }

    .not-a-sheep {
        border: 0.5px solid goldenrod;
    }

    .grey-sheep {
        border: 0.5em solid pink;

    }

    .black-sheep {
        border: 0.5em solid purple;
    }

</style>


