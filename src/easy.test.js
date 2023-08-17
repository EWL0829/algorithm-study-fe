const { chunk, argumentsLength } = require('./easy');

it('chunk array', () => {
  const data01 = [1, 2, 3, 4, 5, 6, 7];
  const size01 = 5;
  const result01 = chunk(data01, size01);
  expect(result01).toEqual([[1, 2, 3, 4, 5], [6, 7]]);

  const data02 = [];
  const size02 = 2;
  const result02 = chunk(data02, size02);
  expect(result02).toEqual([]);

  const data03 = [1, 2];
  const size03 = 5;
  const result03 = chunk(data03, size03);
  expect(result03).toEqual([[1, 2]]);
});

it('calculate length of the argument', () => {
  const length01 = argumentsLength(1, 2, 3, 4);
  expect(length01).toEqual(4);

  const length02 = argumentsLength(1, 2, 3,);
  expect(length02).toEqual(3);

  const length03 = argumentsLength(1, 2,);
  expect(length03).toEqual(2);

  const length04 = argumentsLength(1,);
  expect(length04).toEqual(1);

  const length05 = argumentsLength();
  expect(length05).toEqual(0);
});
