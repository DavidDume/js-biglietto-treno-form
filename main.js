const generaBtn = document.querySelector('#generaBtn');
const annullaBtn = document.querySelector('#annullaBtn');
const biglietto = document.querySelector('#biglietto');


const nome = document.querySelector('#nome');
const tipo = document.querySelector('#tipo');
const carrozza = document.querySelector('#carrozza');
const codice = document.querySelector('#codice');
const prezzo = document.querySelector('#prezzo');

const nomeInput = document.querySelector('#nomeForm');
const kmInput = document.querySelector('#kilometriForm');
const etaInput = document.querySelector('#etaForm');

generaBtn.addEventListener('click', function() {

    const km = parseInt(kmInput.value);
    const eta = parseInt(etaInput.value);

    if(isNaN(km)) {
        console.log('Inserisci numero valido!');
    } else {
        let costo = 0.21 * km;
        if(eta < 18) {
            tipo.innerHTML = "Under 18 <br/> Sconto del 20%"
            costo = costo - ((costo * 20) / 100);
        } else if(eta >= 65) {
            tipo.innerHTML = "Over 65 <br/> Sconto del 40%"
            costo = costo - ((costo * 40) / 100);
        } else {
            tipo.innerHTML = "Biglietto standard"
        }
        
        nome.innerHTML = nomeInput.value;
        carrozza.innerHTML = Math.floor(Math.random() * (1 - 6) + 6);
        codice.innerHTML = Math.floor(Math.random() * (90000 - 99999) + 99999);
        prezzo.innerHTML = `${costo.toFixed(2)} €`;

        biglietto.classList.remove("hidden");
        biglietto.classList.add("d-block");

    }
})

annullaBtn.addEventListener('click', function() {
    kmInput.value = "";
    etaInput.value = "";
    nomeInput.value = "";
    biglietto.classList.add("hidden");
    biglietto.classList.remove("d-block");
})


