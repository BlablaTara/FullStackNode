<script>
    let messages = $state([1, 2, "jrger", 3]);

    let messageInput = $state ("");

    function addMessage() {
        messages.push(messageInput);
        messageInput= "";
        

        console.log(messages);
        
    }

</script>


<h1>Messages</h1>

<p>{messages}</p>

{messageInput}

<input bind:value={messageInput} placeholder="Typer your message...">


<button onclick={addMessage}>Submit message</button>