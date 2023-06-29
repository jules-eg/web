document.addEventListener('DOMContentLoaded', function() {
  var sommaire = document.querySelector('#sommaire');
  var liensSommaire = sommaire.querySelectorAll('a');

  // Cacher le sommairje
  function cacherSommaire() {
    sommaire.style.left = -(sommaire.offsetWidth) + 'px';
  }

  // Afficher le sommaire
  function afficherSommaire() {
    sommaire.style.left = '0';
  }

  // Ajouter un écouteur d'événement pour le clic sur le sommaire
  liensSommaire.forEach(function(lien) {
    lien.addEventListener('click', function(e) {
      e.preventDefault();
      cacherSommaire();
      var targetSection = document.querySelector(this.getAttribute('href'));
      var sommaireHeight = sommaire.offsetHeight;
  
      // Calculer la position de défilement en tenant compte de la hauteur du sommaire
      var scrollToPosition = targetSection.offsetTop - sommaireHeight;
  
      // Défiler jusqu'à la position
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    });
  });

  // Ajouter un écouteur d'événement pour le clic en dehors du sommaire
  document.addEventListener('click', function(e) {
    if (!sommaire.contains(e.target)) {
      afficherSommaire();
    }
  });

  // Appel initial pour cacher le sommaire
  cacherSommaire();
});
