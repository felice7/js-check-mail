
var lista_email = ['bianco@email.com', 'rosso@email.com', 'verde@email.com'];
console.log(lista_email);

var email_utente = prompt('inserire la tua email:')
console.log(email_utente);

console.log(lista_email.lenght);

var email_presente = false;



for (var i = 0; i < lista_email.length; i++) {
    console.log(i);
    console.log(lista_email[i]);
    var elemento_corrente = lista_email[i];
    
    if (elemento_corrente == email_utente) {
        
        email_presente = true;
        
    }
}
console.log(email_presente);
if (email_presente == true) {
    console.log('accesso consentito');
    document.write('accesso consentito');
    
} else {
    console.log('accesso non consentito');
    document.write('accesso non consentito');
}
