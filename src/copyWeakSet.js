/**
 * @param {WeakSet}
 * @param {Function}
 * @returns {WeakSet}
 */
const copyWeakSet = source => new WeakSet(source);

export default copyWeakSet;

