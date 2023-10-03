import cloneArrayBufferView from "./cloneArrayBufferView";
/**
 * `typedArray`을 복사한다. 
 * @param {Object} source
 * @param {boolean} isDeep 
 * @returns {Object} 복사된 `typedArray`를 리턴한다.
 */
const copyTypedArray = (source, isDeep) => {
    return cloneArrayBufferView(source, isDeep)
            .map((val, idx)=> val = source[idx]);
};

export default copyTypedArray;