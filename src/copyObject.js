/**
 * @param {Object}
 * @returns {Object}
 */
const copyObject = (source) => {
    return Object.keys(source)
                    .reduce((a,c) => { 
                        a[c] = source[c]; 
                        return a; 
                    }, {});
}
export default copyObject;