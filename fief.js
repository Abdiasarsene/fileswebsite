//Collecte de données sur Etienne
let dossierEti ={
    nom: "ADRI",
    prenom: "Etienne Eliasaph",
    classe: "Première D1",
    hobbies: "TRAMADOR"
}
dossierEti.formationbac="Informatique"
dossierEti.age=15
console.log("Le dossier réalisé sur Etienne montre  des informations qui seront cruciales afin de le suivre de près. Voici les information collectée sur lui. Déjà, il s'appelle" +" "+ dossierEti.nom + " "+ dossierEti.prenom +" en classe de "
+ dossierEti.classe+". Pour récap sa journée, je dirai  qu'il est juste un petit "+ dossierEti.hobbies+" agé de "+ dossierEti.age + "et envisage de continuer après son BAC le domaine de l'" + dossierEti.formationbac)

// Condition
let ageabdias = 50
if(ageabdias==20){
    console.log('Youpi, youre earned millionsdollars')
}else if(ageabdias<=30){
    console.log("Mature")
}else{
    console.log("Damn")
}

let titre = bloc3.getElementsByTagName("h2").innerHTML ="                <h2>Nouvel article</h2>";

//Récupérer l'élement logo
var sitelogo =document.getElementByClassNam("logo");
//Récupérer propriété de l'élément
var taille = sitelogo.width
sitelogo.width = taille + 200 ;

let sects = document.getElementByClassNam("sec").innerHTML;
let title = sects.getElementsByTagName("h2");
title.style.fontWeight = "bold";
title.style.fontSize = "30px"