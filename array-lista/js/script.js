// creare un array contenente i frutti 
let frigorifero = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']
console.log(frigorifero)
// aggiungere "pesca" all'array "frigorifero"
frigorifero.push("pesca")
console.log(frigorifero)
// verificare se "cocomero" è presente nell 'array "frigorifero"
// utilizzare una variabile flag 
let flag = false
for ( let i = 1; i<frigorifero.length; i++){
    if("cocomero" == frigorifero[i]){
        flag =true
    }
}
if(flag){
    console.log("Trovato! Devo solo preparare il cocktail.")

}
else {
    console.log("Oh no, devo uscire a comprare il cocomero!")
}