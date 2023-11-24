Esercizio di oggi pomeriggio: Array Snacks
nome repo: js-jsnacks-blocco-1
:avviso: creiamo una sottocartella per ciascun esercizio/snack
1. TuttiFrutti
Cartella array-lista
Descrizione:
Abbiamo un frigorifero pieno di frutta:
'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
Suggerimenti/Indicazioni:
Sì, lo sappiamo che esiste la funzione includes() ma noi non la vogliamo utilizzare per cercare nel frigorifero.
2. La coda dell'Array
Cartella: array_tail
Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array
3.  (Bonus)
Cartella: array_bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
Buon lavoro e buon divertimento! 


1# Problema: frutta nel frigorifero
1- creare un'array "frigorifero" contenente dei frutti
2- aggiungere la pesca all'array "frigorifero"
3- verificare se il cocomero è presente nell'array "frigorifero" tramite un ciclo for, utilizzando una variabile flag dal valore false
3.1- ? presente la variabile flag cambia valore in true
4- fuori dal ciclo stampare un messaggio che dice se il cocomero c'è o meno
4.1- ? la variabile flag cambia valore in true, stampare il messaggio "Trovato! Devo solo preparare il cocktail."
4.2- : stampare il messaggio "Oh no, devo uscire a comprare il cocomero!"

2# Problema: creare un array con un numero di elementi scelti dall'utente
1- prompt per chiedere all'utente quanti elementi vuole nell'array
2- creare un'array
3- creare un ciclo per generare una quantità di numeri uguale al numeo inserito dall'utente
3.a- comando per creare un numero random
3.b- aggiungiamo il numero randomico all'array
4- stampiamo poi gli ultimi 5 elementi dell'Array
4.a- cambiamo l'ordine degli elementi dell'array dall'ultimo al primo
4.b- utilizziamo .slice per prendere i primi 5 elementi e creare una  nuova array
4.c- riportiamoli all'ordine originale
4.d- Stampiamoli 

3# Problema: fare il modo che tra due array, quello con meno elementi raggiunga l altro. 
1- creare due array con quantità diversa di elementi
1.1- ? il primo array ha un maggior numero di elementi rispetto al secondo
1.1.a- creare un ciclo che generi una quantità di numeri random tra 1 e 100, pari alla differenza tra il numero degli elementi presenti nei due array
1.1.b- aggiungere i numeri generati, all'array con minor elementi
2- stampare in console il nuovo array
