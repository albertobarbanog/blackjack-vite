/**
 * Toma una carta del deck.
 *
 * @param {string[]} deck - Un array de strings donde cada elemento representa una carta, por ejemplo: ["2C", "JD", "AH"].
 * @returns {string} La carta tomada del deck.
 * @throws {Error} Si no hay cartas en el deck.
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw new Error('No hay cartas en el deck');
  }
  const carta = deck.pop();
  return carta;
};
