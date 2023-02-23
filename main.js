const generaBtn = document.querySelector('#generaBtn');
const annullaBtn = document.querySelector('#annullaBtn');

generaBtn.addEventListener('click', function() {
 
    const kmInput = document.querySelector('#kilometri');
    const etaInput = document.querySelector('#eta');
    const km = parseInt(kmInput.value);
    const eta = parseInt(etaInput.value);

    if(isNaN(km)) {
        console.log('Inserisci numero valido!');
    } else {
        let costo = 0.21 * km;
        if(eta < 18) {
            costo = (costo * 20) / 100;
        } else if(eta >= 65) {
            costo = (costo * 40) / 100;
        }
    
        console.log(`Il costo totale è di ${costo.toFixed(2)} €`);
    }
})

annullaBtn.addEventListener('click', function() {
    const kmInput = document.querySelector('#kilometri');
    const etaInput = document.querySelector('#eta');
    const nomeInput = document.querySelector('#nome');
    kmInput.value = "";
    etaInput.value = "";
    nomeInput.value = "";
})


