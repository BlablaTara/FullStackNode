//Javascript is single-t

import { response } from "express";



//Opretter en ny promise. (før .then indeholde allerede em promise.)
//simulerer asynkron adfærd
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try {
//             resolve("Everyting went well");
//         } catch (error) {
//             reject(error)
//         }
//         //resolve("Everyting went well");
//         //reject("Something went wrong")

//     }, 2000);
// })
// .then((result) => console.log(result))
// .catch((error) => console.log(error));



//promisified function - retunerer et promise.
// dette er en function som kan kaldes, som et promise. 
// hvis du sætter ,then på i funktionen er det ikke en promisifies function. 
function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Something Good")
            } catch (error) {
                reject (error);
            }
        }, 3000);
    });
}

// console.log(myPromise);

// myPromise()
// .then((result) => console.log(result))
// .catch((error) => console.log(error));

//const result = await myPromise();
//console.log(result);


// new Promise = myPromise ((resolve, reject) => {
//     setTimeout(() => {
//         try { 
//             resolve("Something Good!");
//         } catch {
//             reject("Something Bad")
//         }

//     }, 3000);
// })
// .then((result) => console.log(result))
// .catch((reject) => console.log(reject));


// istedet for en function
//Deette er en nested promise.
//Sådan se r en fetch ud. 
function myFetch(URL, options) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve({ 
                json: new Promise((resolve, reject) => resolve("Data from the server"))
                
            });
        }, 2500);
    });
}
//Man kan derfor kalde 2 then. 
// myFetch("http://www.jgkgfvkg.com")
// .then((response) => response.json())
// .then((result) => console.log(result));




async function executeFetch() {
    const response = await myFetch();
    const result = await response.json();
    console.log(result);
    
}

executeFetch();
