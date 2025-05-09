/**
 * Fonction pour générer un index aléatoire dans un tableau.
 * @param {Array} array - Le tableau à partir duquel générer un index aléatoire.
 * @returns {number} Un index aléatoire basé sur la longueur du tableau.
 */
export function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
