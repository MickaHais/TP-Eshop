let annee = document.getElementById('annee')

let now = new Date();
annee.textContent = now.toLocaleString('fr-FR', {
    year: "numeric",
});

document.addEventListener('DOMContentLoaded', function () {
    var photos = document.querySelectorAll('#photos img');
    var mainPhoto = document.getElementById('photo-principal');
    var decomptePanier = document.getElementById('decompte-panier');
    var quantite = 0;

    photos.forEach(function (photo) {
        photo.addEventListener('mouseenter', function () {
            mainPhoto.src = photo.src;
        });
    });
    document.querySelector('#quantite button:first-child').addEventListener('click', function () {
        if (quantite > 0) {
            quantite--;
            decomptePanier.textContent = quantite;
        }
    });

    document.querySelector('#quantite button:last-child').addEventListener('click', function () {
        quantite++;
        decomptePanier.textContent = quantite;
    });
});

document.addEventListener('DOMContentLoaded', function () {

    function afficherFenetreModale() {
        var modal = document.getElementById('modal');
        modal.style.display = 'block';

        var closeButton = document.getElementById('close-button');
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        window.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                modal.style.display = 'none';
            }
        });
    }

    setTimeout(afficherFenetreModale, 10000);
});