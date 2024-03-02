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