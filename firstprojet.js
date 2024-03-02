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