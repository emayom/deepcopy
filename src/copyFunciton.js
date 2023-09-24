/**
 * @param {Function}
 * @returns {Function}
 */
const copyFunction = source => source.bind(this);

export default copyFunction;

