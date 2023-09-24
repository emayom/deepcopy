import copyArray from '../src/copyArray';
import { Faker, faker } from '@faker-js/faker';

describe("copy", () => {
    const _1dArray = faker.datatype.array();
    const _2dArray = new Array(1000).fill(_1dArray);
    const arrayOfObject = new Array(1000).fill(faker.getMetadata());

    it("배열을 얕은 복사한다.", ()=>{
        expect(copyArray(_1dArray)).toBe(_1dArray);
    });

    it("배열을 깊은 복사한다.", ()=>{
        const cloned = copyArray(_1dArray, true);

        expect(cloned).toStrictEqual(_1dArray);

    });
});

