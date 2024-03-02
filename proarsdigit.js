//J'ai sélectionné la section "entête du site"
let section= document.getElementsByTagName("header");
let image = section.getElementByClasseName('img') 

// script.js
window.onload = function() {
    // Exemple de modification de contenu HTML avec JavaScript
    let sects = document.getElementByClassNam("sec").innerHTML;
let title = sects.getElementsByTagName("h2");
title.style.fontWeight = "bold";
title.style.fontSize = "30px"
}
//Appliquer du style à la section banner
let sec1 = document.getElementByClassNam("sec1");
let h1 = sec1.getElementsByTagName("h1");
h1.script.textDecoration ='underlined'

//Mettere un événement
let bouteDentete = document.getElementsByClassName("bouton");
bouteDentete.addEventListener("click", function(){
    console.log("Le bouton a été cliqué");
});

let acceslink = document.getElementById("bouton");
acceslink.addEventListener("click", function(){
console.log('Le bouton vient dêtre cliqué')
})

//Ajouter un gestionnaire d'événement
let rdv = document.getElementsByClassName("rdv");
rdv.addEventListener("click", function handClick (event){
    console.log("Je donne accès ç tout"+event.type)
})

//Ajouter un événement 
let devis= document.getElementsByClassName(devis);
devis.addEventListener(keypress, function(){
    console.log("Damn bro, you got do all")
})

//Création d'une nouvelle section
let sec5 = document.createElement("sec5");
let H1 = document.createElement("h1")
//Ajouter une classe à H1
H1.classList.add(bloc6)
//ajouter un titre à H1
H1.textContent = 'Nous sommes disponibles'
//Ajouter H1 à la section sec5
sec5.appendChild(H1)
let body = querySelector(body)
body.appendChild(sec5)

//Autre manière d'y fonction