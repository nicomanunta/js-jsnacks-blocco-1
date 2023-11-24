// creare due array 
let array_maggiore = [34, 67 ,43 ,12 , 8, 19, 23, 56, 9]
let array_minore = [11, 24, 67, 4, 99]
console.log(array_maggiore)
console.log(array_minore)
// se il primo array ha un maggior numero di elementi rispetto al secondo...
if(array_maggiore.length>array_minore.length){
    // ...creare un ciclo che generi una quantità di numeri random tra 1 e 100, pari alla differenza tra il numero degli elementi presenti nei due array

    let differenza = array_maggiore.length - array_minore.length
    for (let i = 1; i<=differenza; i++){

        let number = Math.floor(Math.random()* 100 + 1)
        // aggiungere i numeri generati all'array con minor elementi
        array_minore.push(number)
        
    }
}


console.log(array_minore)