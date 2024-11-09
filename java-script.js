console.clear()

const priceKm = 0.21;
const discountJunior = 20;
const discountSenior = 40;
const juniorAge = 17;
const seniorAge = 65;

//{} ()

function calcolo(evento){
    evento.preventDefault(); //serve a non  far ricaricare la pagina
    console.log(evento);
    const nomeutente = document.getElementById('fname').value;
    const km = document.getElementById('km').value;
    const age = document.getElementById('eta').value;
    
let price=(priceKm * km);
//console.log("prezzo biglietto senza sconto " + price);
if(age <=17 ){
    let sconto = (price * 20) /100;
    let prezzoFinale = (price - sconto);
    console.log("prezzo finale: " + prezzoFinale.toFixed(2));
}
else if(age >= 65 ){
    let sconto = (price * 40) /100;
    let prezzoFinale = (price - sconto);
    console.log("prezzo finale: " + prezzoFinale.toFixed(2));
}
else{
    console.log("prezzo finale: " + price.toFixed(2));
}
}
