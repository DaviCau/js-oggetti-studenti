/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età. */

var idStudenti = document.getElementById("studenti");
var idBtn = document.getElementById("btn");

var studente1 = {
    nome: "Davide",
    cognome: "Cau",
    eta: 19
};

console.log(studente1);

var studenti = [
    studente1,
    studente2 = {
        nome: "Matteo",
        cognome: "Rossi",
        eta: 24
    },
    studente3 = {
        nome: "Alessandro",
        cognome: "Bianchi",
        eta: 21
    },
    studente4 = {
        nome: "Nicola",
        cognome: "Neri",
        eta: 32
    },
];

for (var i = 0; i < studenti.length; i++) {
    
    for (var key in studenti[i]) {
        idStudenti.innerHTML += studenti[i][key] + "<br>";
    }
    idStudenti.innerHTML += "<hr>";
}

idBtn.addEventListener("click", function() {
    var nomeAggiunto = prompt("inserisci il tuo nome");
    var cognomeAggiunto = prompt("inserisci il tuo cognome");
    do {
        var etaAggiunta = parseInt(prompt("inserisci la tua età"));
    } while (isNaN(etaAggiunta) || etaAggiunta < 0);

    var aggiungiStudente = {
        nome: nomeAggiunto,
        cognome: cognomeAggiunto,
        eta: etaAggiunta,
    }

    for (var key in aggiungiStudente) {
        idStudenti.innerHTML += aggiungiStudente[key] + "<br>";
    }
    idStudenti.innerHTML += "<hr>";

    studenti.push(aggiungiStudente);
    console.log(studenti);
})