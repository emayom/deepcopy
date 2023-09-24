import deepCopy from '../src/deepCopy';
import copyArray from '../src/copyArray';
import { Faker, faker } from '@faker-js/faker';

describe("copy", () => {
  const array = faker.datatype.array({ min: 3, max: 5 });
  const object = faker.getMetadata();;
  const date = faker.date.anytime();
  const set = new Set();
  const map = new Map();

  const nestedObject = {
    string: faker.person.fullName(),
    set: set,
    map: map,
    date: date,
    meta: object,
    array: array,
  }

  it("배열을 깊은 복사한다.", ()=>{
    const _1dArray = faker.datatype.array({ min: 3, max: 5 });
    const _2dArray = new Array(1000).fill(_1dArray);
    const arrayOfObject = new Array(1000).fill(faker.getMetadata());

    expect(copy.copyArray(_1dArray)).toStrictEqual(_1dArray);
    expect(copy.copyArray(_2dArray)).toStrictEqual(_2dArray);
    expect(copy.copyArray(arrayOfObject)).toStrictEqual(arrayOfObject);
  });

  test("객체를 깊은 복사한다.", () => {
    const object = faker.getMetadata();
    const nestedObject = {
      func: copy.isObject,
      set: set,
      map: map,
      date: date,
      array: array,
      object: object,
    };

    expect(copy.copyObject(object)).toStrictEqual(object);
    expect(copy.copyObject(nestedObject)).toStrictEqual(nestedObject);
  });

  test("Date 객체를 깊은 복사한다.", () => {
    const date = faker.date.anytime();
    expect(copyDate(date)).toStrictEqual(date);
  });

  // // Deep Copy
  // test("toStrictEqual", () => {
  //   const origin = {
  //     name: "foo",
  //     age: undefined,
  //     items: ["a", "b", "b", [1, 2, 3], new Object()],
  //     set: new Set(),
  //     map: new Map(),
  //   };
  //   const compare = origin;
  //   expect(copy.deepCopy(origin)).toStrictEqual(compare);
  // });

  // test("toStrictEqual", () => {
  //   const origin = { level1: { level2: { level3: function () {} } } };
  //   const compare = origin;
  //   expect(copy.deepCopy(origin)).toStrictEqual(compare);
  // });
});

