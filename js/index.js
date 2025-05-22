/**
 * @fileoverview Module principal du générateur de citations aléatoires.
 * Ce module gère l'affichage et la mise à jour des citations sur l'interface utilisateur.
 * @author [flozze]
 * @version 1.0.0
 */

// Importation des modules nécessaires
import { data } from "./data.js";
import { randomIndex } from "./random-index.js";

/**
 * Affiche une citation aléatoire dans l'interface utilisateur.
 * Cette fonction est responsable de :
 * - La sélection des éléments DOM pour le texte et l'auteur
 * - La génération d'un index aléatoire
 * - La mise à jour du contenu HTML avec la nouvelle citation
 *
 * @function display
 * @returns {void}
 */
function display() {
  // Sélection des éléments HTML pour le texte et l'auteur de la citation
  const text = document.getElementById("text");
  const autor = document.getElementById("autor");

  // Génération d'un index aléatoire pour sélectionner une citation
  const randomCitation = randomIndex(data);

  // Mise à jour du texte et de l'auteur de la citation affichée
  text.innerText = data[randomCitation].texte;
  autor.innerText = data[randomCitation].auteur;
}

// Ajout d'un écouteur d'événement sur le bouton pour générer une nouvelle citation
document.getElementById("newCitation").addEventListener("click", display);
