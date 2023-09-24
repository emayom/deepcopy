/**
 * @param {Object}
 * @param {Function}
 * @returns {Object}
 */
const copyObject = (source, deepCopy) => {
    return Object.keys(source)
                    .reduce((a,c) => { 
                        a[c] = (deepCopy? deepCopy(source[c]) : source[c]); 
                        return a; 
                    }, {});
}
export default copyObject;