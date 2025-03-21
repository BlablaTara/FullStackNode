<script>
    let counter = 0;

   /* function incrementCounterByAmount(amount) {
        counter += amount;
    }*/

    function decrement() {
        counter--;
    }

</script>

<h3 id="counter">{counter}</h3>


<button onclick={() => counter++}>Increment</button>
<button onclick={() => counter--}>Decrement</button>

<!--pas påmed at lave en funktion som wrapper en anden funktion.-->
<!--<button onclick={counter()}>Decrement</button>-->

<style>
    #counter {
        color: yellow;
    }
</style>

