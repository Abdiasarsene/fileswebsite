let nompara = 'Bonsoir les amis';
let titre1 = document.getElementsByClassName('titre1')[0]; // Ajout de [0] pour sélectionner le premier élément avec la classe 'titre1'

titre1.innerHTML = nompara; // Utilisation de l'opérateur '=' pour assigner la valeur de nompara à innerHTML

let body = document.querySelector('body'); // Correction de la syntaxe de querySelector
body.prependChild(titre1); // Ajout de titre1 en tant qu'enfant de body
