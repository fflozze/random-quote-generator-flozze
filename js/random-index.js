/**
 * @fileoverview Module utilitaire pour la génération d'index aléatoires.
 * Ce module fournit une fonction pour générer des index aléatoires
 * dans un tableau donné.
 * @author [flozze]
 * @version 1.0.0
 */

/**
 * Génère un index aléatoire valide pour un tableau donné.
 * Cette fonction est utilisée pour sélectionner aléatoirement un élément
 * dans un tableau sans dépasser ses limites.
 * 
 * @function randomIndex
 * @param {Array} array - Le tableau pour lequel générer un index aléatoire
 * @returns {number} Un index aléatoire valide (entre 0 et array.length - 1)
 * @throws {Error} Si le paramètre n'est pas un tableau ou si le tableau est vide
 */
export function randomIndex(array) {
  if (!Array.isArray(array)) {
    throw new Error('Le paramètre doit être un tableau');
  }
  if (array.length === 0) {
    throw new Error('Le tableau ne peut pas être vide');
  }
  return Math.floor(Math.random() * array.length);
}
