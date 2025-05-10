
<script>

    import { onMount } from "svelte";

    import io from 'socket.io-client';

    import { colorsList } from "../../stores/colorsListStore.js";

    import ColorsList from '../../components/ColorsList.svelte';


    let socket;
    let color = "#ff0000";

    onMount(() => {
        socket = io("http://localhost:8080", {
            withCredentials: true
        });

        socket.on("server-sends-color", (data) => {

            // dette gør man ikke normalt i et webframework
            document.body.style.backgroundColor = data.color;

            const nickname = "Miss Terror";

            colorsList.update((colorsListArray) => {
                colorsListArray.push({ color: data.color, nickname: data.nickname })
                return colorsListArray;
            });
        });
    });


    function submitColor() {
        //console.log(color);
        
        socket.emit("client-sends-color", { color} );

    }

</script>

<input type="color" bind:value={color}>
<button onclick="{submitColor}">Submit Color</button>

<ColorsList />