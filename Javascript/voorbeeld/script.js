let naam = prompt("Wat is je naam?");
let leeftijd = prompt("Hoe oud ben je?");
let kleur = prompt("Liever geel of bruin?");

console.log(naam, leeftijd, kleur);

let kop = document.createElement("h1");
kop.innerText = naam;
document.body.appendChild(kop);

for (var i = 0; i <= leeftijd; i++){
    let nummer = document.createElement("p");
    nummer.innerText = i;
    document.body.appendChild(nummer);
}

let afbeelding = document.createElement("img");
if(kleur == "geel"){
    afbeelding.src = "images/kat1.jpg";
} 

else if(kleur == "bruin"){
    afbeelding.src = "images/kat2.jpg";
}

// else {
//     alert("Kies uit geel of bruin")
// }

document.body.appendChild(afbeelding);