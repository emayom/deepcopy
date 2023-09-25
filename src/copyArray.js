/**
 * `Array`를 복사한다. 
 * @param {Array}
 * @returns {Array}
 */
const copyArray = (source) => {
    return source.reduce((a,c)=>{ 
                a.push(c); 
                return a; 
            }, []);
}

export default copyArray;