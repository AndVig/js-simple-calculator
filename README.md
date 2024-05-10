Riprendiamo l'esercizio della calcolatrice fatto con HTML e CSS e rendiamo il tutto funzionale.
:avviso: Attenzione: la nostra calcolatrice deve fare dei semplici calcoli tra due numeri interi. Quindi l'utente inserisce le cifre del primo numero, dopo dovrà cliccare sull'operazione, poi inserirà le cifre del secondo numero e infine dovrà cliccare sul tasto = per vedere il risultato. Non si può applicare più di un'operazione alla volta.
MILESTONE 1
Aggiungere event listener a tutti i numeri (0-9): quando si clicca su un numero, concatenarlo al numero visualizzato in alto
MILESTONE 2
aggiungere event listener a tutti gli operatori: quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto
MILESTONE 3
aggiungere event listener al pulsante "=": quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto
MILESTONE 4
pulsante canc: cliccando il pulsante si resetta il calcolo
:stella2: BONUS
verificare che non si stia cercando di dividere per 0


M1 soluzione:
- 2 variabili input che registrino i valori dei due numeri inseriti (prima e dopo il click dell'operatore)
- creo una variabile (booleana) che mi dica se il valore che si sta inserendo corrisponda al primo o al secondo valore
- creo una funzione che per ogni bottone cliccato, se all'interno contiene un numero lo aggiunge al valore di inpute lo mostri sul display della calcolatrice (id=result)