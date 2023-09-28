/**
 * @param {Object} source
 * @returns {Object} 복사된 `RegExp`를 리턴한다.
 */
 const copyRegExp = source => new RegExp(source.source, source.flags);
 
export default copyRegExp;