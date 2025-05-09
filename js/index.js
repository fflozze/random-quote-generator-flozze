// Importation des modules nécessaires
import { citations } from "./data.js";
import { randomIndex } from "./random-index.js";

/**
 * Fonction pour afficher une citation aléatoire.
 * Sélectionne un élément HTML pour le texte et l'auteur de la citation,
 * génère un index aléatoire pour sélectionner une citation,
 * puis met à jour le texte et l'auteur de la citation affichée.
 */
function display() {
  // Sélection des éléments HTML pour le texte et l'auteur de la citation
  let text = document.getElementById("text");
  let autor = document.getElementById("autor");

  // Génération d'un index aléatoire pour sélectionner une citation
  let randomCitation = randomIndex(citations);

  // Mise à jour du texte et de l'auteur de la citation affichée
  text.innerText = citations[randomCitation].texte;
  autor.innerText = citations[randomCitation].auteur;
}

// Ajout d'un écouteur d'événement sur le bouton pour générer une nouvelle citation
document.getElementById("newCitation").addEventListener("click", display);
