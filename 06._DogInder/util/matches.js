
//forloop er ikke async/await. Så løsningen 
//derfor laver vi et array af promises. - hver kald er et promis
//den retunerer et pending-promis.
export async function getMatches(numberOfMathces = 2) {
    const promises = [];
    for (let i = 0; i <numberOfMathces; i++) {
        const promise = fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        promises.push(promise);

    }
    //promis.all sørger for atalle promises bliver fulfilled. 
    const results = await Promise.all(promises);
    const matches = results.map((result) => ({ image: result.message }))
    return matches;

}
///uden await, så giver den i stedet et ny promise
console.log(await getMatches());


