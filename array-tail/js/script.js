// prompt per chiedere all'utente quanti elementi vuole nell'array
let number_user = parseInt(prompt("Quanti numeri deve contenere"))
// creare un'array
let number_list = []
// creare un ciclo per generare una quantità di numeri uguale al numeo inserito dall'utente
for(let i = 1; i<= number_user; i++){
    // comando per creare un numero random
    let number_random = Math.floor(Math.random()* 100 +1)
    console.log(number_random)
    // aggiungiamo il numero randomico all'array
    number_list.push(number_random)
    
    
}
console.log(number_list)

// cambiamo l'ordine degli elementi dell'array dall'ultimo al primo
number_list.reverse()
// utilizziamo .slice per prendere i primi 5 elementi e creare una  nuova array
let number_5 = number_list.slice(0, 5)
// riportiamoli all'ordine originale
number_5.reverse()
// stampiamoli 
console.log(number_5)