/**
 * @param {*}
 * @returns {boolean}
 */
const isRegExp = value => value instanceof RegExp || value?.constructor === RegExp;


export default isRegExp;