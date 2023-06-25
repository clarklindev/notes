const S = require('./index');
const uniqueSort = S.uniqueSort;

describe('Unique sort', () => {
  test('no repeated entries', () => {
    const result = uniqueSort([3,2,1,'yo',1,1,2,3,'pool']);
    expect(result).toEqual([1,2,3,'pool','yo']);
  });
});