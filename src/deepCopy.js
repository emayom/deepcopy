// type check 
import isSet from './isSet';
import isMap from './isMap';
import isDate from './isDate';
import isArray from './isArray';
import isObject from './isObject';
import isSymbol from './isSymbol';
import isRegExp from './isRegExp';
import isWeakMap from './isWeakMap';
import isWeakSet from './isWeakSet';
import isFunction from './isFunction';
import isTypedArray from './isTypedArray';
// copy
import copySet from './copySet';
import copyMap from './copyMap';
import copyDate from './copyDate';
import copyArray from './copyArray';
import copyObject from './copyObject';
import copySymbol from './copySymbol';
import copyFunction from './copyFunciton';
import copyTypedArray from './copyTypedArray';
import copyRegExp from './copyRegExp';

/** */
const copyValidations = [
  {
    validation: isSymbol,
    copy: copySymbol,
  },
  {
    validation: isArray,
    copy: copyArray,
  },
  {
    validation: isObject,
    copy: copyObject,
  },
  {
    validation: isSet,
    copy: copySet,
  },
  {
    validation: isMap,
    copy: copyMap,
  },
  {
    validation: isDate,
    copy: copyDate,
  },
  {
    validation: isRegExp,
    copy: copyRegExp,
  },
  {
    validation: isWeakMap,
    copy: (source)=>source,
  },
  {
    validation: isWeakSet,
    copy: (source)=>source,
  },
  {
    validation: isFunction,
    copy: copyFunction,
  },
  {
    validation: isTypedArray,
    copy: (source)=> copyTypedArray(source, true),
  },
];

/**
 * 원본 객체에 대한 참조가 끊어진 깊은 복사를 수행한다.
 * @param {*} source 
 * @returns {*} 
 */
const deepCopy = (source) => {
  if(!(source instanceof Object)){
    return source;
  }

  for (const {validation, copy} of copyValidations) {
    if(validation(source)){
      const cloned = copy(source);
     
      for(let prop in cloned){
        cloned[prop] = deepCopy(cloned[prop]);
      }
      
      return cloned;
    }
  }
}

export default deepCopy;