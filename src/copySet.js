import deepCopy from "./deepCopy";
/**
 * @param {Set}
 * @param {isDeep}
 * @returns {Set}
 */
const copySet = source => new Set(source);

export default copySet;

