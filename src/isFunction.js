/**
 * @param {*}
 * @returns {boolean}
 */
const isFunction = value => value?.constructor === Function || typeof value === 'function';

export default isFunction;