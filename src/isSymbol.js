/**
 * @param {*}
 * @returns {boolean}
 */
const isSymbol = value => value?.constructor === Symbol;

export default isSymbol;