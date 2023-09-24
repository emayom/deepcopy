/**
 * @param {*}
 * @returns {boolean}
 */
const isTypedArray = value => value instanceof Int8Array || value?.constructor === Int8Array;

export default isTypedArray;