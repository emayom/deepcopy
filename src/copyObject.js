/**
 * `Object`를 복사한다. 
 * @param {Object} source
 * @returns {Object} 복사된 `Object`를 리턴한다.
 */
const copyObject = (source) => {
    return Object.keys(source)
                    .reduce((a,c) => { 
                        a[c] = source[c]; 
                        return a; 
                    }, {});
}
export default copyObject;