/**
 * @param {*}
 * @returns {boolean}
 */
const isObject = value => value?.constructor === Object 
                            || (value?.constructor === undefined && typeof value === 'object');

export default isObject;