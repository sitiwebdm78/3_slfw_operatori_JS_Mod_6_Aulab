/*ESERCITAZIONE SELFWORK_3 OPERATORI JS MODULO 6 CORSO AULAB */

// DICHIARO E INIZIALIZZO LE VARIABILI ACQUISENDO IL DATO NUMERICO DALL'UTENTE.

    let num1 = parseInt(prompt('Scegli il Primo numero.')); // Acquisisco dall'utente il primo Input, trasformando il dato stringa ricevuto dal prompt in numerico, con parseint.
    let num2 = parseInt(prompt('Scegli il Secondo numero.'));// Acquisisco dall'utente il Secondo Input, trasformando il dato stringa ricevuto dal prompt in numerico, con parseint.
    let esponente = parseInt(prompt('Scegli il Terzo numero da elevare a potenza.')); // Acquisisco dall'utente il terzo Input, trasformando il dato stringa ricevuto dal prompt in numerico, con parseint.

    // ESEGUO LE OPERAZIONI RICHIESTE DALLA TRACCIA DELL'ESERCIZIO I CUI RISULTATI VENGONO SALVATI NELLERELATIVE VARIABILI.

    let somma = num1 + num2;
    let sottrazione = num1 - num2;
    let moltiplicazione = num1 * num2;
    let divisione = num1 / num2;
    let potenza1 = num1 ** esponente;
    let potenza2 = num2 ** esponente;

    console.log('In base ai numeri da te scelti, si sono ricavati dalle relative operazioni i seguenti risultati:');
    console.log(`Somma = ${somma}
Sottrazione = ${sottrazione} 
Moltiplicazione = ${moltiplicazione} 
Divisione = ${divisione} 
Elevamento a Potenza del primo numero = ${potenza1} 
Elevamento a Potenza del secondo numero = ${potenza2}`);

    console.log(`Somma = ${typeof somma}
Sottrazione = ${typeof sottrazione} 
Moltiplicazione = ${typeof moltiplicazione} 
Divisione = ${typeof divisione} 
Elevamento a Potenza del primo numero = ${typeof potenza1} 
Elevamento a Potenza del secondo numero = ${typeof potenza2}`);




    
