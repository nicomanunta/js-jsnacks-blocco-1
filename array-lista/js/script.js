// creare un array contenente i frutti 
let frigorifero = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']
console.log(frigorifero)
// aggiungere "pesca" all'array "frigorifero"
frigorifero.push("pesca")
console.log(frigorifero)
// verificare se "cocomero" è presente nell 'array "frigorifero" tramite un ciclo for
// per farlo utilizzare una variabile flag 
let flag = false
for ( let i = 1; i<frigorifero.length; i++){
    // se presente la variabile flag diventa vera
    if("cocomero" == frigorifero[i]){
        flag =true
    }
}
// fuori dal ciclo stampare un messaggio che dice se il cocomero c'è o meno
// se la variabile flag diventa vera, stampare in console questo
if(flag){
    console.log("Trovato! Devo solo preparare il cocktail.")

}
// altrimenti quest'altro
else {
    console.log("Oh no, devo uscire a comprare il cocomero!")
}