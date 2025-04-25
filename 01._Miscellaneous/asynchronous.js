//Javascript is single-t



//Opretter en ny promise. (før .then indeholde allerede em promise.)
//simulerer asynkron adfærd
new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("Everyting went well");
        reject("Something went wrong")

    }, 2000);
})
.then((result) => console.log(result)
.catch((error) => console.log(error)

));