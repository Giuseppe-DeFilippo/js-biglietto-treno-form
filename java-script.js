console.clear()

const priceKm = 0.21;
const discountJunior = 20;
const discountSenior = 40;
const juniorAge = 17;
const seniorAge = 65;

//{} ()

function calcolo(evento){
    evento.preventDefault(); //serve a non  far ricaricare la pagina
    const nomeutente = document.getElementById('fname').value;
    const km = document.getElementById('km').value;
    const age = document.getElementById('eta').value;
    
let price=(priceKm * km);
//console.log("prezzo biglietto senza sconto " + price);
if(age <=17 ){
    let sconto = (price * 20) /100;
    let prezzoFinale = (price - sconto);
    document.getElementById('riepilogo').classList.remove('hide');
    document.getElementById('riepilogo').classList.add('show');
    document.getElementById('nome').innerHTML;
}
else if(age >= 65 ){
    let sconto = (price * 40) /100;
    let prezzoFinale = (price - sconto);
    document.getElementById('riepilogo').classList.remove('hide');
    document.getElementById('riepilogo').classList.add('show');
}
else{
    document.getElementById('riepilogo').classList.remove('hide');
    document.getElementById('riepilogo').classList.add('show');
}
}
