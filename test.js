let nouvelpara='Je peux y arriver'

let para =document.createElement( 'p');  //création de paragraphe
para.innerHTML=nouvelpara;   //ajout du texte au paragraphe

//ajout du paragraphe à la page HTML
body.appendChild(para);

const form = document.querySelector("form")

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log("y a pas rechargement de page")
} )

const valeurNom =document.getElementsById('non')
const nom = valeurNom.value 
if( nom===''){
    console.log("Le champs est incorrect")
}else{
    console.log("Envoie du fichier effectué")
}

let valeurmail = document.getElementsById('mail')

const mail = valeurmail.value
if(mail===""){
    console.log("le champ mail est vide")
}else{
    console.log(`l adresse mail est ${mail}`)
}