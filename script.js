document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();  // Empêche l'envoi traditionnel du formulaire

  const username = document.getElementById('username').value;  // Récupère le nom d'utilisateur
  const password = document.getElementById('password').value;  // Récupère le mot de passe
  const error = document.getElementById('error');  // Élément pour afficher les erreurs

  // Envoie une requête POST vers l'URL de ton Web App
  fetch('https://script.google.com/macros/s/AKfycbxvwZZ-Q-t6aM9NssO6En21L3KC74_HtlaQQPPjshQqFbSeOf4MzMIuunyIQJGRnmCTOw/exec', {
    method: 'POST',
    body: JSON.stringify({ username, password }),  // Envoie les données en JSON
    headers: {
      'Content-Type': 'application/json',  // Indique que les données envoyées sont en JSON
    },
  })
  .then(response => response.text())  // Attends la réponse du serveur
  .then(result => {
    if (result === "Success") {  // Si la réponse est "Success"
      alert("Connexion envoyée !");
      window.location.href = 'dashboard.html';  // Redirige vers le tableau de bord
    } else {
      error.textContent = "Erreur lors de l'envoi.";  // Affiche un message d'erreur
    }
  })
  .catch(err => {
    error.textContent = "Erreur de réseau.";  // Affiche un message en cas d'erreur réseau
    console.error(err);  // Affiche l'erreur dans la console pour le débogage
  });
});
