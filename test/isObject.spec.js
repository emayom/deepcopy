import isObject from '../src/isObject';
import { JSDOM } from 'jsdom';

describe('isObject', ()=> {
    it('객체라면 `true`를 리턴한다.', ()=>{
        expect(isObject({ user: 'barney', age: 36, active: true })).toBeTruthy();
    });

    it('[[prototype]]이 null인 객체라면 `true`를 리턴한다.', ()=>{
        expect(isObject(Object.create(null))).toBeTruthy();
    });

    it('객체가 아니라면 `false`를 리턴한다.', ()=>{
        const { document } = (new JSDOM()).window;
        function Foo(a) {
            this.a = 1;
        }

        expect(isObject(1)).toBeFalsy();
        expect(isObject('a')).toBeFalsy();
        expect(isObject(true)).toBeFalsy();
        expect(isObject(/\w+/)).toBeFalsy();
        expect(isObject(['a', 'r', 'r', 'a', 'y'])).toBeFalsy();
        expect(isObject(Object('string'))).toBeFalsy();
        expect(isObject(new Date())).toBeFalsy();
        expect(isObject(new Error())).toBeFalsy();
        expect(isObject(new WeakMap())).toBeFalsy();
        expect(isObject(new WeakSet())).toBeFalsy();
        expect(isObject(function(a,b){})).toBeFalsy();
        expect(isObject(new Foo())).toBeFalsy();
        expect(isObject(document && document.createElement('div'))).toBeFalsy();
    })
});