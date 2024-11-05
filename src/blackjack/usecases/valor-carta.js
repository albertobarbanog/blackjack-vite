/**
 * Calcula el valor numérico de una carta.
 *
 * @param {string} carta - Representación de la carta en formato de texto, por ejemplo: "2C" (Two of Clubs), "JD" (Jack of Diamonds).
 * @returns {number} El valor numérico de la carta. Devuelve 11 para el As ('A'), 10 para las cartas con letras ('J', 'Q', 'K'), y su valor numérico para el resto.
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};
