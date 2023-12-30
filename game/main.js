function rediriger() {
    // Récupérer la valeur de l'URL entrée par l'utilisateur
    var url = document.getElementById('urlInput').value;

    // Vérifier si l'URL est non vide
    if (url.trim() !== '') {
        // Rediriger vers l'URL spécifiée
        window.location.href = url;
    } else {
        // Afficher un message d'erreur si l'URL est vide
        alert('Veuillez entrer une URL valide.');
    }
}
