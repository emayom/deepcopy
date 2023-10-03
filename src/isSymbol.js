/**
 * `value`가 `Symbol`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 Symbol이라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isSymbol = c => value?.constructor === Symbol;

export default isSymbol;