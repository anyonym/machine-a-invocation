// 1. Récupérer le formulaire dans le HTML (éléments du DOM)
const formulaire = document.getElementById("invocation");

// 2. Écouter l'événement de soumission du formulaire
formulaire.addEventListener("submit", (event) => {
    // 3. Empêcher le rechargement de la page
    event.preventDefault();

    console.log("clic !");

    // 4. Récupérer les valeurs saisies par l'utilisateur
    const prenom = document.getElementById("prenom").value;
    const creature = document.getElementById("creature").value;

    // Bloquer les champs après validation
    document.getElementById("prenom").disabled = true;
    document.getElementById("creature").disabled = true;

    // 5. Construire le message personnalisé
    const message = `${prenom}, ${creature} a entendu ton appel et te suivra tout le Bloc 1 !`;

    // 6. Afficher le message dans le HTML
    document.getElementById("message").textContent = message;

    // 7. Masquer le formulaire
    document.getElementById("invocation").classList.add("cache");

    // 8. Afficher le résultat
    document.getElementById("resultat").classList.remove("cache");
});

// Bonus : Renouveler le formulaire
const btnRecommencer = document.getElementById("recommencer");

btnRecommencer.addEventListener("click", () => {
    
    //1. Masquer le résultat
    document.getElementById("resultat").classList.add("cache");

    //2. Réafficher le formulaire
    document.getElementById("invocation").classList.remove("cache");
    
    // Réactiver les champs
    document.getElementById("prenom").disabled = false;
    document.getElementById("creature").disabled = false;

    // Vider le champ prénom
    document.getElementById("prenom").value = ""
    document.getElementById("creature").value = "";
});
