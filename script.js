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

  // 5. Construire le message personnalisé
  const message = `${prenom}, ${creature} a entendu ton appel et te suivra tout le Bloc 1 !`;

  // 6. Afficher le message dans le HTML
  document.getElementById("message").textContent = message;

  // 7. Masquer le formulaire
  document.getElementById("invocation").classList.add("cache");

  // 8. Afficher le résultat
  document.getElementById("resultat").classList.remove("cache");
});
