// Chiedere all’utente il cognome,
var Cognome = prompt('inserisci il tuo cognome');

// inserire in un array con altri cognomi,
var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
while (Cognome.length <= 0) {
    var Cognome = prompt('inserisci cognome');
}

// aggiungere il cognome utente nella lista
cognomi.push(Cognome);

// ordinare la lista
cognomi.sort();

// console.log(cognomi);

// stampare la lista ordinata in ordine alfabetico (in html ul > li).
    for(var i = 0; i < cognomi.length; i++) {
    document.getElementById('cognomi-utenti').innerHTML += '<li>' + cognomi[i] + '</li>';
}
// Scrivere la posizione della lista in cui il cognome si trova.
var posizione = cognomi.indexOf(Cognome) + 1 );
document.getElementById('Posizione').innerHTML = "Posizione numero" + posizione + "dell'elenco");

