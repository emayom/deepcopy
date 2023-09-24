// type check 
import isSet from './isSet';
import isMap from './isMap';
import isDate from './isDate';
import isArray from './isArray';
import isObject from './isArray';
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
import copyWeakMap from './copyWeakMap';
import copyWeakSet from './copyWeakSet';
import copyFunction from './copyFunciton';
import copyTypedArray from './copyTypedArray';

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
    validation: isWeakMap,
    copy: copyWeakMap,
  },
  {
    validation: isWeakSet,
    copy: copyWeakSet,
  },
  {
    validation: isFunction,
    copy: copyFunction,
  },
  {
    validation: isTypedArray,
    copy: copyTypedArray,
  },
];
/**
 * 원본 객체에 대한 참조가 끊어진 깊은 복사를 수행한다.
 * @param {*} source 
 * @returns {*} 
 */
const deepCopy = (source) => {
  for (const {validation, copy} of copyValidations) {
    return validation(source)? copy(source, deepCopy) : source;
  }
}

export default deepCopy;
