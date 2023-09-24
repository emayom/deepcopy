/**
 * @param {Array}
 * @param {Function} 
 * @returns {Array}
 */
const copyArray = (source, deepCopy) => {
    return source.reduce((a,c)=>{ 
        a.push( (deepCopy? deepCopy(c) : c) ); 
        return a; 
    }, []);
}

export default copyArray;