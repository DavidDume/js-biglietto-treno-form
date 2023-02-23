const title = document.getElementById('title');
const generaBtn = document.querySelector('#generaBtn');


generaBtn.addEventListener('click', function() {
 
    const kmInput = document.querySelector('#kilometri');
    const etaInput = document.querySelector('#eta');
    const km = parseInt(kmInput.value);
    const eta = parseInt(etaInput.value);
    let costo = 0.21 * km;
    if(eta < 18) {
        title.innerHTML = "Hai diritto allo sconto per minorenni!";
        costo = (costo * 20) / 100;
    } else if(eta >= 65) {
        title.innerHTML = "Hai diritto allo sconto per anziani!";
        costo = (costo * 40) / 100;
    }
    console.log(`Il costo totale è di ${costo.toFixed(2)} €`);
})



