/*ESERCITAZIONE SELFWORK_3 OPERATORI JS MODULO 6 CORSO AULAB */

// DICHIARO E INIZIALIZZO LE VARIABILI ACQUISENDO IL DATO NUMERICO DALL'UTENTE.

    let num1 = prompt('Scegli il Primo numero.'); // Acquisisco dall'utente il primo dato numerico.
    let num2 = prompt('Scegli il Secondo numero.'); // Acquisisco dall'utente il secondo dato numerico.
    let esponente = prompt('Scegli un numero diesponente di potenza'); //Acquisisco Il dato numerico per eseguire l'elevamento a potenza.

    // ESEGUO LE OPERAZIONI RICHIESTE DALLA TRACCIA DELL'ESERCIZIO I CUI RISULTATI VENGONO SALVATI NELLERELATIVE VARIABILI.

    let somma = num1 + num2;
    let sottrazione = num1 - num2;
    let moltiplicazione = num1 * num2;
    let divisione = num1 / num2;
    let potenza1 = num1 ** esponente;
    let potenza2 = num2 ** esponente;

    console.log(`In base ai numeri da te scelti, si sono ricavati dalle relative operazioni i seguenti risultati : Somma = ${somma}, Sottrazione = ${sottrazione}, Moltiplicazione = ${moltiplicazione}, Divisione = ${divisione}, Elevamento a Potenza del primo numero = ${potenza1}, Elevamento a Potenza del secondo numero = ${potenza2} `);
    



    
