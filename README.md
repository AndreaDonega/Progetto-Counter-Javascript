# progetto-counter-javascript realizzato per start2impact


Link per testare il counter online :
https://andreadonega.github.io/Progetto-Counter-Javascript/

caratteristiche del progetto : 

interfaccia grafica :
L’interfaccia grafica del progetto è stata volutamente tenuta minimale per permettere un’esperienza d’uso semplice e intuitiva.
Sono stati sviluppati tre pulsanti dalle funzionalità esplicite per gestire le possibili operazioni da eseguire ed una sezione centrale per la visualizzazione
del risultato.

L’intera interfaccia è responsive, permettendo all’applicazione di essere utilizzabile su display di ogni dimensione.

Creazione dei Bottoni

Per lo sviluppo del progetto sono stati generati dei bottoni dal file main.js tramite una funzione GenerateButton(), la quale crea il bottone ed assegna rispettivamente il testo e l’id del bottone.
Quest’ultimo viene ripreso successivamente all’interno di una variabile tramite l’utilizzo della funzione document.getelemendbyid, permettendo l’assegnazione degli eventi al click dell’utente.
L’assegnazione dell’id consente inoltre di modificare lo stile grafico dal file style.css.


incremento del valore del counter :
Il valore visualizzato nella sezione risultato è il valore di una variabile counter, che viene incrementata, decrementata o azzerata tramite delle apposite funzioni
chiamate rispettivamente IncrementCounter(),DecrementCounter(), ResetCounter().

Queste funzioni ricevono il valore del counter come parametro andando a modificarne il valore, che viene poi aggiornato al click di ogni bottone.
