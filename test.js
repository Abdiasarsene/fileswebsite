let nouvelpara='Je peux y arriver'

let para =document.createElement( 'p');  //création de paragraphe
para.innerHTML=nouvelpara;   //ajout du texte au paragraphe

//ajout du paragraphe à la page HTML
body.appendChild(para);

//Ajout d'évnement
let envoyer = document.getElementsByClassName('envoyer')

envoyer.addEventListerner("click", function(){
    console.log('Bienvenu chez nous')
})
let titreh1 =document.getElementsByClassName("hn")