// Sélection de l'élément bouton
var bouton = document.getElementById("monBouton");

// Ajout d'un gestionnaire d'événements pour le clic sur le bouton
bouton.addEventListener("click", function() {
    // Sélection de l'élément paragraphe
    var paragraphe = document.getElementById("monParagraphe");
    
    // Modification du texte du paragraphe
    paragraphe.textContent = "Le texte de ce paragraphe a été modifié par JavaScript.";
});
